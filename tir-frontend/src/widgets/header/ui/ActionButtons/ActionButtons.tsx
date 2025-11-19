import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { useModal } from '@/shared/lib/hooks/useModal';
import styles from './ActionButtons.module.css';
import { CallbackForm, MeasurementForm, SuccessMessage, useFormSubmission } from '@/features/forms';
import type { CallbackFormData, MeasurementFormData } from '@/features/forms/types/forms';

export interface ActionButtonsProps {
  onMobileMenuOpen?: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onMobileMenuOpen }) => {
  const measurementModal = useModal();
  const callbackModal = useModal();
  const formSubmission = useFormSubmission();

  const handleMeasurementSubmit = async (data: MeasurementFormData) => {
    const success = await formSubmission.submitMeasurement(data);
    if (success) {
      setTimeout(() => {
        measurementModal.close();
        formSubmission.reset();
      }, 2000);
    }
  };

  const handleCallbackSubmit = async (data: CallbackFormData) => {
    const success = await formSubmission.submitCallback(data);
    if (success) {
      setTimeout(() => {
        callbackModal.close();
        formSubmission.reset();
      }, 2000);
    }
  };

  const handleCloseMeasurement = () => {
    measurementModal.close();
    formSubmission.reset();
  };

  const handleCloseCallback = () => {
    callbackModal.close();
    formSubmission.reset();
  };

  return (
    <>
      <div className={styles.desktopButtons}>
        <Button variant="primary" onClick={measurementModal.open} className={styles.button}>
          Записаться на замер
        </Button>
        <Button variant="secondary" onClick={callbackModal.open} className={styles.button}>
          Заказать обратный звонок
        </Button>
      </div>

      <div className={styles.mobileMenuButton}>
        <button type="button" className={styles.menuButton} onClick={onMobileMenuOpen}>
          <Bars3Icon className={styles.menuIcon} />
        </button>
      </div>

      <Modal
        isOpen={measurementModal.isOpen}
        onClose={handleCloseMeasurement}
        title="Запись на бесплатный замер"
        size="lg"
      >
        {formSubmission.success ? (
          <SuccessMessage
            title="Заявка принята!"
            message="Наш специалист свяжется с вами в ближайшее время"
            onClose={handleCloseMeasurement}
          />
        ) : (
          <MeasurementForm
            onSubmit={handleMeasurementSubmit}
            onCancel={handleCloseMeasurement}
            loading={formSubmission.loading}
          />
        )}
        {formSubmission.error && <div className={styles.error}>{formSubmission.error}</div>}
      </Modal>

      <Modal
        isOpen={callbackModal.isOpen}
        onClose={handleCloseCallback}
        title="Заказ обратного звонка"
        size="md"
      >
        {formSubmission.success ? (
          <SuccessMessage
            title="Заявка принята!"
            message="Мы перезвоним вам в течение 15 минут"
            onClose={handleCloseCallback}
          />
        ) : (
          <CallbackForm
            onSubmit={handleCallbackSubmit}
            onCancel={handleCloseCallback}
            loading={formSubmission.loading}
          />
        )}
        {formSubmission.error && <div className={styles.error}>{formSubmission.error}</div>}
      </Modal>
    </>
  );
};

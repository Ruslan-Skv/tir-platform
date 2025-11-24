import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { ActionButton } from '@/features/forms';
import { useFormContext } from '@/features/forms';
import styles from './ActionButtons.module.css';

export interface ActionButtonsProps {
  onMobileMenuOpen?: () => void;
  mobile?: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onMobileMenuOpen,
  mobile = false,
}) => {
  const { measurementModal, callbackModal } = useFormContext();

  if (mobile) {
    return (
      <div className={styles.mobileButtons}>
        <ActionButton variant="measurement" onClick={measurementModal.open} mobile />
        <ActionButton variant="callback" onClick={callbackModal.open} mobile />
      </div>
    );
  }

  return (
    <>
      <div className={styles.desktopButtons}>
        <ActionButton variant="measurement" onClick={measurementModal.open} />
        <ActionButton variant="callback" onClick={callbackModal.open} />
      </div>

      <div className={styles.mobileMenuButton}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={onMobileMenuOpen}
          aria-label="Открыть меню"
        >
          <Bars3Icon className={styles.menuIcon} />
        </button>
      </div>
    </>
  );
};

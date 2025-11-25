import React from 'react';
import { Modal } from '@/shared/ui/Modal';
import { CallbackForm, MeasurementForm, SuccessMessage } from '../../ui';
import { useFormContext } from '../../lib/context/FormContext';
import styles from './FormModals.module.css';
import { DirectorMessageForm } from '../DirectorMessageForm';

export const FormModals: React.FC = () => {
  const {
    measurementModal,
    callbackModal,
    directorMessageModal,
    formSubmission,
    handleMeasurementSubmit,
    handleCallbackSubmit,
    handleDirectorMessageSubmit,
    handleCloseMeasurement,
    handleCloseCallback,
    handleCloseDirectorMessage,
  } = useFormContext();

  return (
    <>
      {/* Модалка замера */}
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

      {/* Модалка обратного звонка */}
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

      {/* Модалка письма директору */}
      <Modal
        isOpen={directorMessageModal.isOpen}
        onClose={handleCloseDirectorMessage}
        title="Письмо директору"
        size="lg"
      >
        {formSubmission.success ? (
          <SuccessMessage
            title="Письмо отправлено!"
            message="Директор получит ваше сообщение и ответит в течение 24 часов"
            onClose={handleCloseDirectorMessage}
          />
        ) : (
          <DirectorMessageForm
            onSubmit={handleDirectorMessageSubmit}
            onCancel={handleCloseDirectorMessage}
            loading={formSubmission.loading}
          />
        )}
        {formSubmission.error && <div className={styles.error}>{formSubmission.error}</div>}
      </Modal>
    </>
  );
};

// import React from 'react';
// import { Modal } from '@/shared/ui/Modal';
// import { CallbackForm, MeasurementForm, SuccessMessage } from '../../ui';
// import { useFormContext } from '../../lib/context/FormContext';
// import styles from './FormModals.module.css';

// export const FormModals: React.FC = () => {
//   const {
//     measurementModal,
//     callbackModal,
//     formSubmission,
//     handleMeasurementSubmit,
//     handleCallbackSubmit,
//     handleCloseMeasurement,
//     handleCloseCallback,
//   } = useFormContext();

//   return (
//     <>
//       {/* Модалка замера */}
//       <Modal
//         isOpen={measurementModal.isOpen}
//         onClose={handleCloseMeasurement}
//         title="Запись на бесплатный замер"
//         size="lg"
//         className={styles.modal}
//       >
//         {formSubmission.success ? (
//           <SuccessMessage
//             title="Заявка принята!"
//             message="Наш специалист свяжется с вами в ближайшее время"
//             onClose={handleCloseMeasurement}
//           />
//         ) : (
//           <MeasurementForm
//             onSubmit={handleMeasurementSubmit}
//             onCancel={handleCloseMeasurement}
//             loading={formSubmission.loading}
//           />
//         )}
//         {formSubmission.error && <div className={styles.error}>{formSubmission.error}</div>}
//       </Modal>

//       {/* Модалка обратного звонка */}
//       <Modal
//         isOpen={callbackModal.isOpen}
//         onClose={handleCloseCallback}
//         title="Заказ обратного звонка"
//         size="md"
//         className={styles.modal}
//       >
//         {formSubmission.success ? (
//           <SuccessMessage
//             title="Заявка принята!"
//             message="Мы перезвоним вам в течение 15 минут"
//             onClose={handleCloseCallback}
//           />
//         ) : (
//           <CallbackForm
//             onSubmit={handleCallbackSubmit}
//             onCancel={handleCloseCallback}
//             loading={formSubmission.loading}
//           />
//         )}
//         {formSubmission.error && <div className={styles.error}>{formSubmission.error}</div>}
//       </Modal>
//     </>
//   );
// };

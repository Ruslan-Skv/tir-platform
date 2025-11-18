import React from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import styles from './Modal.module.css';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  showCloseButton = true,
}) => {
  const sizeClasses = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
    xl: styles.sizeXl,
  };

  return (
    <Dialog as="div" className={styles.dialog} open={isOpen} onClose={onClose}>
      <div className={styles.backdrop} />

      <div className={styles.container}>
        <div className={styles.center}>
          <Dialog.Panel className={`${styles.panel} ${sizeClasses[size]}`}>
            {(title || showCloseButton) && (
              <div
                className={`${styles.header} ${title ? styles.headerWithTitle : styles.headerWithoutTitle}`}
              >
                {title && <Dialog.Title className={styles.title}>{title}</Dialog.Title>}

                {showCloseButton && (
                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Закрыть модальное окно"
                  >
                    <XMarkIcon className={styles.closeIcon} />
                  </button>
                )}
              </div>
            )}

            <div className={styles.content}>{children}</div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

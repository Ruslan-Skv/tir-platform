import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@/shared/ui/Button';
import styles from './SuccessMessage.module.css';

export interface SuccessMessageProps {
  title: string;
  message: string;
  onClose: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ title, message, onClose }) => {
  return (
    <div className={styles.container}>
      <CheckCircleIcon className={styles.icon} />

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.message}>{message}</p>

      <Button onClick={onClose} variant="primary">
        Закрыть
      </Button>
    </div>
  );
};

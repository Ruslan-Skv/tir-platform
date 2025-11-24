import React from 'react';
import { Button } from '@/shared/ui/Button';
import styles from './ActionButton.module.css';

export interface ActionButtonProps {
  variant: 'measurement' | 'callback';
  onClick: () => void;
  className?: string;
  mobile?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  variant,
  onClick,
  className = '',
  mobile = false,
}) => {
  const buttonText = {
    measurement: 'Записаться на замер',
    callback: 'Заказать обратный звонок',
  }[variant];

  const buttonClass = `${styles.button} ${styles[variant]} ${mobile ? styles.mobile : ''} ${className}`;

  return (
    <Button variant="outline" onClick={onClick} className={buttonClass}>
      {buttonText}
    </Button>
  );
};

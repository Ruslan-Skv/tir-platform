import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'outline',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const variantClass = styles[variant] || '';
  const sizeClass = styles[size] || '';
  const disabledClass = disabled ? styles.disabled : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.base} ${variantClass} ${sizeClass} ${disabledClass} ${className}`}
    >
      <span className={styles.content}>{children}</span>
      <div className={styles.glow} />
    </button>
  );
};

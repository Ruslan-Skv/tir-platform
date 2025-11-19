import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Background.module.css';
import type { RootState } from '@/shared/lib/redux';

export const Background: React.FC = () => {
  const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
  // useSelector((state: RootState) => state.theme.isDarkTheme);

  // Для избежания mismatch, используем только светлую тему на сервере
  // На клиенте тема определится корректно после гидрации
  // const backgroundImage = isDarkTheme ? "url('/images/dark-fon.jpg')" : "url('/images/fon.jpg')";
  const backgroundImage = "url('/images/dark-fon.jpg')";

  return (
    <div
      className={styles.background}
      style={{ backgroundImage }}
      data-theme={isDarkTheme ? 'dark' : 'light'}
    />
  );
};

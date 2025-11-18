import React, { useEffect } from 'react';
import { initializeTheme } from '../model/themeSlice';
import { useAppDispatch } from '@/shared/lib/redux/hooks';

interface ThemeInitializerProps {
  children: React.ReactNode;
}

export const ThemeInitializer: React.FC<ThemeInitializerProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Инициализация темы только на клиенте
    dispatch(initializeTheme());
  }, [dispatch]);

  return <>{children}</>;
};

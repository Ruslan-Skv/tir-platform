import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ThemeState } from '../types/theme';

// Функция для безопасного доступа к localStorage только на клиенте
const getInitialThemeState = (): boolean => {
  // Если это сервер (SSR), возвращаем значение по умолчанию
  if (typeof window === 'undefined') {
    return false; // светлая тема по умолчанию для SSR
  }

  // Если это клиент, проверяем localStorage и системные настройки
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return savedTheme === 'dark' || (!savedTheme && prefersDark);
};

// Функция для безопасного применения темы к DOM
const applyThemeToDOM = (isDark: boolean) => {
  if (typeof window === 'undefined') return; // Пропускаем на сервере

  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const initialState: ThemeState = {
  isDarkTheme: getInitialThemeState(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.isDarkTheme = !state.isDarkTheme;
      applyThemeToDOM(state.isDarkTheme);
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkTheme = action.payload;
      applyThemeToDOM(action.payload);
    },
    initializeTheme: state => {
      // На сервере ничего не делаем, на клиенте применяем текущую тему
      if (typeof window !== 'undefined') {
        applyThemeToDOM(state.isDarkTheme);
      }
    },
  },
});

export const { toggleTheme, setTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;

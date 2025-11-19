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

  console.log('🎯 getInitialThemeState:', { savedTheme, prefersDark });
  return savedTheme === 'dark' || (!savedTheme && prefersDark);
};

// Функция для безопасного применения темы к DOM
// const applyThemeToDOM = (isDark: boolean) => {
//   if (typeof window === 'undefined') return; // Пропускаем на сервере

//   console.log('🎯 applyThemeToDOM called with isDark:', isDark);
//   console.log('🎯 Before - html classes:', document.documentElement.className);

//   if (isDark) {
//     document.documentElement.classList.add('dark');
//     localStorage.setItem('theme', 'dark');
//     console.log('✅ Added dark class to html');
//   } else {
//     document.documentElement.classList.remove('dark');
//     localStorage.setItem('theme', 'light');
//     console.log('✅ Removed dark class from html');
//   }
//   console.log('🎯 After - html classes:', document.documentElement.className);
// };
// Функция для безопасного применения темы к DOM
const applyThemeToDOM = (isDark: boolean) => {
  if (typeof window === 'undefined') return;

  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
};

const initialState: ThemeState = {
  isDarkTheme: getInitialThemeState(),
};

console.log('🎯 themeSlice initialState:', initialState);

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      console.log('🔄 toggleTheme called. Current:', state.isDarkTheme, 'New:', !state.isDarkTheme);
      state.isDarkTheme = !state.isDarkTheme;
      applyThemeToDOM(state.isDarkTheme);
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      console.log('🔄 setTheme called:', action.payload);
      state.isDarkTheme = action.payload;
      applyThemeToDOM(action.payload);
    },
    initializeTheme: state => {
      console.log('🔄 initializeTheme called:', state.isDarkTheme);
      // На сервере ничего не делаем, на клиенте применяем текущую тему
      if (typeof window !== 'undefined') {
        applyThemeToDOM(state.isDarkTheme);
      }
    },
  },
});

export const { toggleTheme, setTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;

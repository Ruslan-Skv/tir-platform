import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ThemeState } from '../types/theme';

// Функция для безопасного доступа к localStorage только на клиенте
const getInitialThemeState = (): boolean => {
  // Если это сервер (SSR), возвращаем значение по умолчанию
  if (typeof window === 'undefined') {
    return false; // светлая тема по умолчанию для SSR
  }

  // Если это клиент, проверяем localStorage
  const savedTheme = localStorage.getItem('theme');

  // Для избежания mismatch, используем только светлую тему на сервере
  return savedTheme === 'dark';
};

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

// import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { ThemeState } from '../types/theme';

// // Функция для безопасного доступа к localStorage только на клиенте
// const getInitialThemeState = (): boolean => {
//   // Если это сервер (SSR), возвращаем значение по умолчанию
//   if (typeof window === 'undefined') {
//     return false; // светлая тема по умолчанию для SSR
//   }

//   // Если это клиент, проверяем localStorage
//   const savedTheme = localStorage.getItem('theme');

//   // Для избежания mismatch, используем только светлую тему на сервере
//   // На клиенте тема определится корректно после гидрации
//   return savedTheme === 'dark';
// };

// // Функция для безопасного применения темы к DOM
// const applyThemeToDOM = (isDark: boolean) => {
//   if (typeof window === 'undefined') return;

//   if (isDark) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('theme', 'dark');
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('theme', 'light');
//   }
// };

// const initialState: ThemeState = {
//   isDarkTheme: getInitialThemeState(),
// };

// const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     toggleTheme: state => {
//       state.isDarkTheme = !state.isDarkTheme;
//       applyThemeToDOM(state.isDarkTheme);
//     },
//     setTheme: (state, action: PayloadAction<boolean>) => {
//       state.isDarkTheme = action.payload;
//       applyThemeToDOM(action.payload);
//     },
//     initializeTheme: state => {
//       // На сервере ничего не делаем, на клиенте применяем текущую тему
//       if (typeof window !== 'undefined') {
//         applyThemeToDOM(state.isDarkTheme);
//       }
//     },
//   },
// });

// export const { toggleTheme, setTheme, initializeTheme } = themeSlice.actions;
// export default themeSlice.reducer;

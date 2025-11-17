//Это клиентский рендерер для гидрации (Hydration)
//Назначение: "Оживить" статический HTML от сервера, превратив его в интерактивное React-приложение
import { hydrateRoot } from 'react-dom/client'; //hydrateRoot() - ключевая функция для гидрации
import { BrowserRouter } from 'react-router-dom'; //BrowserRouter - клиентская версия роутера (отслеживает History API)
import { Provider } from 'react-redux';
import { store } from '@/shared/lib/redux/store';
import App from '../App';

// Убираем проблемный импорт
// import pkg from 'react-helmet-async'
// const { HelmetProvider } = pkg

//Конфигурация vite-plugin-ssr
export const clientRouting = true; //Включает клиентскую маршрутизацию (SPA-навигация)
export const hydrationCanBeAborted = true; //Позволяет прервать гидрацию если нужно

//Функция render() - сердце гидрации
export function render() {
  const container = document.getElementById('page-view')!; //Находит контейнер с серверным HTML

  //Процесс гидрации
  hydrateRoot(
    container,
    // Временно без HelmetProvider
    // <HelmetProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    // <HelmetProvider>
  );
}

// import { hydrateRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store } from '@/shared/lib/redux/store'
// import App from '../App'

// // Исправляем импорт для CommonJS модуля
// import pkg from 'react-helmet-async'
// const { HelmetProvider } = pkg

// export const clientRouting = true
// export const hydrationCanBeAborted = true

// export function render() {
//   const container = document.getElementById('page-view')!

//   hydrateRoot(
//     container,
//     <HelmetProvider>
//       <BrowserRouter>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </BrowserRouter>
//     </HelmetProvider>
//   )
// }

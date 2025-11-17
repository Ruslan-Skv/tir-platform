import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/shared/lib/redux/store';
import App from '../App';

// Убираем проблемный импорт
// import pkg from 'react-helmet-async'
// const { HelmetProvider } = pkg

export const clientRouting = true;
export const hydrationCanBeAborted = true;

export function render() {
  const container = document.getElementById('page-view')!;

  hydrateRoot(
    container,
    // Временно без HelmetProvider
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
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

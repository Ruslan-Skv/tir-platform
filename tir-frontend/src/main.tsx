import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/shared/lib/redux';
import App from './App.tsx';
import './index.css';
import pkg from 'react-helmet-async';
import { ThemeInitializer } from './features/theme/index.ts';
const { HelmetProvider } = pkg;

// Fallback для чистой CSR (если SSR не используется)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeInitializer>
            <App />
          </ThemeInitializer>
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

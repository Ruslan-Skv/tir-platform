//Назначение: Преобразовать React-компоненты в готовый HTML на сервере перед отправкой клиенту (Это серверный рендерер для SSR (Server-Side Rendering)).
import ReactDOMServer from 'react-dom/server'; //инструмент для рендеринга React в HTML на сервере
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'; //Утилиты от vite-plugin-ssr для безопасной вставки HTML
import { StaticRouter } from 'react-router-dom'; //версия React Router для SSR (знает текущий URL)
import { Provider } from 'react-redux';
import { store } from '@/shared/lib/redux/store';
import App from '../App';

//Экспорты для vite-plugin-ssr (Какие данные передать от сервера к клиенту)
export const passToClient = ['pageProps', 'routeParams'];

//Функция render() - сердце SSR
//render - Вызывается сервером для каждого запроса
export function render(pageContext: { urlParsed: { pathname: string } }) {
  //pageContext - информация о запросе (URL, параметры)
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const helmetContext: { helmet?: any } = {};

  //Рендеринг React в HTML
  const pageHtml = ReactDOMServer.renderToString(
    //преобразует React-дерево в HTML-строку
    //StaticRouter передает текущий URL компонентам маршрутизации
    //Provider - подключает Redux store
    <StaticRouter location={pageContext.urlParsed.pathname}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  const { helmet } = helmetContext;

  //Сборка финального HTML документа
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html ${dangerouslySkipEscape(helmet?.htmlAttributes?.toString() || '')}>
      <head>
        ${dangerouslySkipEscape(helmet?.title?.toString() || '')}
        ${dangerouslySkipEscape(helmet?.meta?.toString() || '')}
        ${dangerouslySkipEscape(helmet?.link?.toString() || '')}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/react.svg" />
      </head>
      <body ${dangerouslySkipEscape(helmet?.bodyAttributes?.toString() || '')}>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
  };
}

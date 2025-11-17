import ReactDOMServer from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/shared/lib/redux/store';
import App from '../App';

export const passToClient = ['pageProps', 'routeParams'];

export function render(pageContext: { urlParsed: { pathname: string } }) {
  const helmetContext: { helmet?: any } = {};

  const pageHtml = ReactDOMServer.renderToString(
    <StaticRouter location={pageContext.urlParsed.pathname}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  const { helmet } = helmetContext;

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

// import ReactDOMServer from 'react-dom/server'
// import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
// import { StaticRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store } from '@/shared/lib/redux/store'
// import App from '../App'

// // ВЕРНУТЬ: default import
// import pkg from 'react-helmet-async'
// const { HelmetProvider } = pkg

// export const passToClient = ['pageProps', 'routeParams']

// export function render(pageContext: any) {
//   const helmetContext = {}

//   const pageHtml = ReactDOMServer.renderToString(
//     <HelmetProvider context={helmetContext}>
//       <StaticRouter location={pageContext.urlParsed.pathname}>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </StaticRouter>
//     </HelmetProvider>
//   )

//   const { helmet } = helmetContext as any

//   const documentHtml = escapeInject`<!DOCTYPE html>
//     <html ${dangerouslySkipEscape(helmet?.htmlAttributes?.toString() || '')}>
//       <head>
//         ${dangerouslySkipEscape(helmet?.title?.toString() || '')}
//         ${dangerouslySkipEscape(helmet?.meta?.toString() || '')}
//         ${dangerouslySkipEscape(helmet?.link?.toString() || '')}
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="icon" type="image/svg+xml" href="/react.svg" />
//       </head>
//       <body ${dangerouslySkipEscape(helmet?.bodyAttributes?.toString() || '')}>
//         <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
//       </body>
//     </html>`

//   return {
//     documentHtml
//   }
// }

import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

export const SEO: React.FC<SEOProps> = props => {
  const {
    title = 'Территория интерьерных решений',
    description = 'Современные решения для вашего интерьера.',
    keywords = 'интерьер, мебель, ремонт, потолки, окна, жалюзи, дизайн',
    image = '/og-image.jpg',
    url = '',
    type = 'website',
  } = props;

  const fullUrl = `https://psk-pobeda.ru${url}`;

  useEffect(() => {
    // Обновляем title
    document.title = title;

    // Обновляем или создаем meta-теги
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:url', fullUrl, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', 'Территория интерьерных решений', 'property');

    // Каноническая ссылка
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;
  }, [title, description, keywords, image, url, type, fullUrl]);

  // Этот компонент ничего не рендерит в DOM
  return null;
};

// Вспомогательная функция для обновления meta-тегов
function updateMetaTag(name: string, content: string, attr: string = 'name') {
  let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, name);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

// import pkg from 'react-helmet-async'
// const { Helmet } = pkg

// interface SEOProps {
//   title?: string
//   description?: string
//   keywords?: string
//   image?: string
//   url?: string
//   type?: 'website' | 'article' | 'product'
// }

// export const SEO: React.FC<SEOProps> = (props) => {
//   const {
//     title = 'Территория интерьерных решений',
//     description = 'Современные решения для вашего интерьера. Мебель, ремонт, потолки, окна и жалюзи.',
//     keywords = 'интерьер, мебель, ремонт, потолки, окна, жалюзи, дизайн',
//     image = '/og-image.jpg',
//     url = '',
//     type = 'website'
//   } = props

//   const fullUrl = `https://psk-pobeda.ru${url}`

//   return (
//     <Helmet>
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content={keywords} />

//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={image} />
//       <meta property="og:url" content={fullUrl} />
//       <meta property="og:type" content={type} />
//       <meta property="og:site_name" content="Территория интерьерных решений" />

//       <link rel="canonical" href={fullUrl} />
//     </Helmet>
//   )
// }

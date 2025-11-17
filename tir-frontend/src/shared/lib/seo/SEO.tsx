//Это кастомный SEO компонент, который управляет мета-тегами страницы.
//Это централизованная SEO-система вашего приложения, которая гарантирует что каждая страница имеет правильные мета-теги для поисковиков и соцсетей!
//Главная особенность - компонент НЕ рендерит DOM
import { useEffect } from 'react';

interface SEOProps {
  title?: string; // Заголовок страницы (<title>)
  description?: string; // Описание (meta description)
  keywords?: string; // Ключевые слова
  image?: string; // Изображение для соцсетей (Open Graph)
  url?: string; // Канонический URL
  type?: 'website' | 'article' | 'product'; // Тип контента
}

//Работает через side effects (useEffect)
//Не создает лишних DOM элементов
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
    // Этот код выполняется после рендера компонента
    // Обновляем title
    document.title = title; // Меняет заголовок вкладки

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
  }, [title, description, keywords, image, url, type, fullUrl]); // Зависимости - при изменении любого из этих props эффект перезапускается

  // Этот компонент ничего не рендерит в DOM
  return null;
};

// Вспомогательная функция для обновления meta-тегов (Функция updateMetaTag - умное обновление тегов)
function updateMetaTag(name: string, content: string, attr: string = 'name') {
  let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, name);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

import { SEO } from '@/shared/lib/seo';

export const NotFoundPage = () => (
  <div className="not-found">
    <SEO
      title="Страница не найдена | Территория интерьерных решений"
      description="Запрашиваемая страница не существует"
    />
    <h1>404 - Страница не найдена</h1>
    <p>Извините, но такой страницы не существует.</p>
  </div>
);

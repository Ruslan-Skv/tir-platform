import { SEO } from '@/shared/lib/seo';

export const Page = () => {
  return (
    <>
      <SEO title="Ошибка | Территория интерьерных решений" description="Произошла ошибка" />

      <div className="error-page">
        <h1>Произошла ошибка</h1>
        <p>Пожалуйста, попробуйте обновить страницу.</p>
      </div>
    </>
  );
};

import { SEO } from '@/shared/lib/seo';

export const HomePage = () => {
  return (
    <>
      <SEO
        title="Территория интерьерных решений - Современные интерьерные решения"
        description="Полный спектр услуг по дизайну и оформлению интерьеров. Мебель, ремонт, потолки, окна, жалюзи. Качественно и в срок."
        url="/"
      />

      <div className="home-page">
        <h1>Добро пожаловать в Территорию интерьерных решений</h1>
        {/* Контент главной страницы */}
      </div>
    </>
  );
};

// Для SSG - экспортируем данные для пререндеринга
export const documentProps = {
  // Эта страница будет сгенерирована на этапе сборки
};

// import { Button } from '@/shared/ui/Button';

// export const HomePage = () => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>Территория Интерьерных Решений!</h1>
//       <p>Добро пожаловать на нашу платформу!</p>
//       <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
//         <Button variant="primary">В каталог</Button>
//         <Button variant="secondary">О компании</Button>
//       </div>
//     </div>
//   );
// };

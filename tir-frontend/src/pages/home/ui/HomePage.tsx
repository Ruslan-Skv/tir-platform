import { SEO } from '@/shared/lib/seo';
import { Button } from '@/shared/ui';
import { Header } from '@/widgets/header';

export const HomePage = () => {
  return (
    <>
      <SEO
        title="Территория интерьерных решений - Современные интерьерные решения"
        description="Полный спектр услуг по дизайну и оформлению интерьеров. Мебель, ремонт, потолки, окна, жалюзи. Качественно и в срок."
        url="/"
      />
      <Header />

      {/* Добавляем основной контент с отступом для header */}
      <main
        style={{
          marginTop: '200px',
          padding: '2rem',
          minHeight: 'calc(100vh - 200px)',
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h1>Добро пожаловать в Территорию интерьерных решений</h1>
          <Button>Отправить заявку</Button>
          {/* Контент главной страницы */}
        </div>
      </main>
    </>
  );
};

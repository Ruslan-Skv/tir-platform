import { SEO } from '@/shared/lib/seo';
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
    </>
  );
};

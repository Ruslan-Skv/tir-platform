import { SEO } from '@/shared/lib/seo';
import { Header } from '@/widgets/header';

export const CatalogPage = () => {
  return (
    <>
      <SEO
        title="Каталог товаров | Территория интерьерных решений"
        description="Широкий выбор товаров для интерьера. Мебель, двери, окна, потолки, жалюзи."
        url="/catalog"
      />
      <Header />

      <div className="catalog-page">
        <h1>Каталог товаров</h1>
        {/* Контент каталога */}
      </div>
    </>
  );
};

import { SEO } from '@/shared/lib/seo';

export const ProductPage = () => {
  return (
    <>
      <SEO
        title="Товар | Территория интерьерных решений"
        description="Описание товара"
        url="/product"
      />

      <div className="product-page">
        <h1>Страница товара</h1>
      </div>
    </>
  );
};

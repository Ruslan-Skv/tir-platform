import { SEO } from '@/shared/lib/seo';

export const CatalogPage = () => {
  return (
    <>
      <SEO
        title="Каталог товаров | Территория интерьерных решений"
        description="Широкий выбор товаров для интерьера. Мебель, двери, окна, потолки, жалюзи."
        url="/catalog"
      />

      <div className="catalog-page">
        <h1>Каталог товаров</h1>
        {/* Контент каталога */}
      </div>
    </>
  );
};

// import { SEO } from '@/shared/lib/seo'

// export const CatalogPage = ({ products, categories }: any) => {
//   return (
//     <>
//       <SEO
//         title="Каталог товаров | Территория интерьерных решений"
//         description="Широкий выбор товаров для интерьера. Мебель, двери, окна, потолки, жалюзи."
//         url="/catalog"
//         type="website"
//       />

//       <div className="catalog-page">
//         <h1>Каталог товаров</h1>
//         {/* Динамический контент каталога */}
//       </div>
//     </>
//   )
// }

// // Для SSR - получаем данные на сервере
// export async function onBeforeRender(pageContext: any) {
//   const { routeParams } = pageContext

//   // Здесь будет запрос к API для получения данных
//   const products = await fetchProducts()
//   const categories = await fetchCategories()

//   return {
//     pageContext: {
//       pageProps: {
//         products,
//         categories
//       }
//     }
//   }
// }

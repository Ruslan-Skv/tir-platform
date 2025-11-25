import React from 'react';
import styles from './CatalogPage.module.css';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
import { FiltersSidebar } from './FiltersSidebar/FiltersSidebar';
import { ProductsGrid } from './ProductsGrid/ProductsGrid';
import { Pagination } from './Pagination/Pagination';

export const CatalogPage: React.FC = () => {
  return (
    <div className={styles.catalogPage}>
      {/* 1. Верхний ряд - хлебные крошки */}
      <div className={styles.breadcrumbsSection}>
        <Breadcrumbs />
      </div>

      {/* 2. Основной контент - фильтры и товары */}
      <div className={styles.mainContent}>
        {/* Левая колонка - фильтры */}
        <aside className={styles.filtersSidebar}>
          <FiltersSidebar />
        </aside>

        {/* Правая колонка - товары */}
        <main className={styles.productsSection}>
          <ProductsGrid />
        </main>
      </div>

      {/* 3. Нижний ряд - пагинация */}
      <div className={styles.paginationSection}>
        <Pagination />
      </div>
    </div>
  );
};

// import { SEO } from '@/shared/lib/seo';
// import { Header } from '@/widgets/header';

// export const CatalogPage = () => {
//   return (
//     <>
//       <SEO
//         title="Каталог товаров | Территория интерьерных решений"
//         description="Широкий выбор товаров для интерьера. Мебель, двери, окна, потолки, жалюзи."
//         url="/catalog"
//       />
//       <Header />

//       <div className="catalog-page">
//         <h1>Каталог товаров</h1>
//         {/* Контент каталога */}
//       </div>
//     </>
//   );
// };

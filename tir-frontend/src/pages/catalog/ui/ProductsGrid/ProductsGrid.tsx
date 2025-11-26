import React from 'react';
import styles from './ProductsGrid.module.css';
import { ProductCard } from './ProductCard/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  discount?: number;
}

export const ProductsGrid: React.FC = () => {
  // TODO: Заменить на реальные данные из API
  const products: Product[] = [
    {
      id: 1,
      name: 'Угловой диван "Милан"',
      price: 45900,
      image: '/images/products/div.jpg',
      category: 'Диваны',
      rating: 4.5,
      isNew: true,
    },
    {
      id: 2,
      name: 'Кресло "Барселона"',
      price: 23400,
      image: '/images/products/og.jpg',
      category: 'Кресла',
      rating: 4.2,
      discount: 15,
    },
    {
      id: 3,
      name: 'Обеденный стол "Глазго"',
      price: 18700,
      image: '/images/products/table.jpg',
      category: 'Столы',
      rating: 4.7,
    },
    // Добавьте больше товаров по необходимости
  ];

  return (
    <div className={styles.productsGrid}>
      <div className={styles.gridHeader}>
        <h1 className={styles.title}>Мебель</h1>
        <div className={styles.sorting}>
          <select className={styles.sortSelect}>
            <option value="popular">По популярности</option>
            <option value="price-asc">По цене (сначала дешевые)</option>
            <option value="price-desc">По цене (сначала дорогие)</option>
            <option value="new">По новизне</option>
            <option value="rating">По рейтингу</option>
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

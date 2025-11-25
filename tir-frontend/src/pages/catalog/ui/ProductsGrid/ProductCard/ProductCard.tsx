import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

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

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const finalPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${product.id}`} className={styles.cardLink}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.name} className={styles.image} loading="lazy" />

          {/* Бейджи */}
          <div className={styles.badges}>
            {product.isNew && <span className={styles.newBadge}>Новинка</span>}
            {product.discount && <span className={styles.discountBadge}>-{product.discount}%</span>}
          </div>

          <button className={styles.favoriteButton} aria-label="Добавить в избранное">
            ♡
          </button>
        </div>

        <div className={styles.content}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.category}>{product.category}</p>

          <div className={styles.rating}>
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
            <span className={styles.ratingValue}>({product.rating})</span>
          </div>

          <div className={styles.price}>
            {product.discount && (
              <span className={styles.oldPrice}>{product.price.toLocaleString()} ₽</span>
            )}
            <span className={styles.finalPrice}>{finalPrice.toLocaleString()} ₽</span>
          </div>

          <button className={styles.addToCartButton}>В корзину</button>
        </div>
      </Link>
    </div>
  );
};

import React from 'react';
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/features/theme';
import styles from './TopBar.module.css';

export const TopBar: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleSearchClick = () => {
    // Здесь будет логика открытия поиска
    console.log('Открыть поиск');
    // В будущем можно реализовать открытие модального окна поиска
  };

  const handleCompareClick = () => {
    navigate('/compare');
  };

  return (
    <div className={styles.topBar}>
      {/* Мобильный телефон */}
      {/* <div className={styles.contactMobile}>
        <span className={styles.contact}>8-(8152)-60-12-70</span>
      </div> */}

      <div className={styles.container}>
        {/* Десктопный телефон */}
        <div className={styles.desktopContact}>
          <span className={styles.contact}>8-(8152)-60-12-70</span>
        </div>

        {/* Утилиты */}
        <div className={styles.utilities}>
          <div className={styles.contactMobile}>
            <span className={styles.contact}>8-(8152)-60-12-70</span>
          </div>
          {/* Поиск */}
          <button onClick={handleSearchClick} className={styles.utilityButton}>
            <MagnifyingGlassIcon className={styles.icon} />
            <span className={styles.utilityText}>Поиск</span>
          </button>

          {/* Сравнение товаров */}
          <button onClick={handleCompareClick} className={styles.utilityButton}>
            <ChartBarIcon className={styles.icon} />
            <span className={styles.utilityText}>Сравнение</span>
          </button>

          {/* Личный кабинет */}
          <button onClick={() => navigate('/profile')} className={styles.utilityButton}>
            <UserIcon className={styles.icon} />
            <span className={styles.utilityText}>Кабинет</span>
          </button>

          {/* Избранное */}
          <button onClick={() => navigate('/favorites')} className={styles.utilityButton}>
            <HeartIcon className={styles.icon} />
            <span className={styles.utilityText}>Избранное</span>
          </button>

          {/* Корзина */}
          <button onClick={() => navigate('/cart')} className={styles.utilityButton}>
            <ShoppingCartIcon className={styles.icon} />
            <span className={styles.utilityText}>Корзина</span>
          </button>

          {/* Переключение темы */}
          <button onClick={toggleTheme} className={styles.utilityButton}>
            {isDarkTheme ? (
              <SunIcon className={styles.icon} />
            ) : (
              <MoonIcon className={styles.icon} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/features/theme';
import styles from './TopBar.module.css';

export const TopBar: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className={styles.topBar}>
      {/* Мобильный телефон */}
      <div className={styles.contactMobile}>
        <span className={styles.contact}>8-(8152)-60-12-70</span>
      </div>

      <div className={styles.container}>
        {/* Десктопный телефон */}
        <div className={styles.desktopContact}>
          <span className={styles.contact}>8-(8152)-60-12-70</span>
        </div>

        {/* Утилиты */}
        <div className={styles.utilities}>
          {/* Личный кабинет */}
          <button onClick={() => navigate('/profile')} className={styles.utilityButton}>
            <UserIcon className={styles.icon} />
            <span className={styles.utilityText}>Личный кабинет</span>
            {/* <span className={styles.utilityTextMobile}>Кабинет</span> */}
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

          {/* Мобильная кнопка пользователя */}
          <button onClick={() => navigate('/profile')} className={styles.mobileUtilityButton}>
            <UserIcon className={styles.mobileIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import {
  ChevronLeftIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { navigation, dropdownMenus } from '@/shared/constants/navigation';
import { ActionButtons } from '@/widgets/header/ui/ActionButtons/ActionButtons';
import { Logo } from '@/shared/ui/Logo';
import { useTheme } from '@/features/theme';
import styles from './MobileNavigation.module.css';

export interface MobileNavigationProps {
  onNavigationClick?: (sectionName: string) => void;
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}

type MenuState = 'main' | 'submenu';

// Интерфейс для кнопок меню с изображениями
interface MenuButton {
  name: string;
  hasDropdown: boolean;
  imageLight?: string;
  imageDark?: string;
  href?: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  onNavigationClick,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [currentMenu, setCurrentMenu] = React.useState<MenuState>('main');
  const [activeMenuItem, setActiveMenuItem] = React.useState<string | null>(null);
  const { isDarkTheme } = useTheme();

  // Предзагрузка изображений при монтировании компонента
  React.useEffect(() => {
    const preloadMenuImages = () => {
      const imagePaths = [
        '/images/menu/light/01.png',
        '/images/menu/light/02.png',
        '/images/menu/light/03.png',
        '/images/menu/light/04.png',
        '/images/menu/light/05.png',
        '/images/menu/light/06.png',
        '/images/menu/light/07.png',
        '/images/menu/dark/01.png',
        '/images/menu/dark/02.png',
        '/images/menu/dark/03.png',
        '/images/menu/dark/04.png',
        '/images/menu/dark/05.png',
        '/images/menu/dark/06.png',
        '/images/menu/dark/07.png',
      ];

      imagePaths.forEach(path => {
        const img = new Image();
        img.src = path;
      });
    };

    preloadMenuImages();
  }, []);

  // Функция для получения картинки в зависимости от темы
  const getImageForMenuItem = (itemName: string): string => {
    const imageMap: Record<string, { light: string; dark: string }> = {
      Мебель: {
        light: '/images/menu/light/02.png',
        dark: '/images/menu/dark/02.png',
      },
      Ремонт: {
        light: '/images/menu/light/01.png',
        dark: '/images/menu/dark/01.png',
      },
      Двери: {
        light: '/images/menu/light/03.png',
        dark: '/images/menu/dark/03.png',
      },
      Окна: {
        light: '/images/menu/light/04.png',
        dark: '/images/menu/dark/04.png',
      },
      Потолки: {
        light: '/images/menu/light/06.png',
        dark: '/images/menu/dark/06.png',
      },
      Жалюзи: {
        light: '/images/menu/light/05.png',
        dark: '/images/menu/dark/05.png',
      },
      Акции: {
        light: '/images/menu/light/07.png',
        dark: '/images/menu/dark/07.png',
      },
    };

    const itemImages = imageMap[itemName];
    if (itemImages) {
      return isDarkTheme ? itemImages.dark : itemImages.light;
    }

    return isDarkTheme ? '/images/menu/dark/default.jpg' : '/images/menu/light/default.jpg';
  };

  // Преобразуем навигацию в формат для кнопок с изображениями
  const menuButtons: MenuButton[] = navigation.map(item => ({
    name: item.name,
    hasDropdown: item.hasDropdown,
    imageLight: getImageForMenuItem(item.name),
    imageDark: getImageForMenuItem(item.name),
    href: item.href,
  }));

  const handleCloseMenu = () => {
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
      setTimeout(() => {
        setCurrentMenu('main');
        setActiveMenuItem(null);
      }, 300);
    }
  };

  const handleMenuItemClick = (itemName: string, hasDropdown: boolean) => {
    if (hasDropdown) {
      setActiveMenuItem(itemName);
      setCurrentMenu('submenu');
      if (onNavigationClick) {
        onNavigationClick(itemName);
      }
    } else {
      // Закрываем меню при переходе по ссылке
      handleCloseMenu();
    }
  };

  const handleBackToMainMenu = () => {
    setCurrentMenu('main');
    setActiveMenuItem(null);
  };

  const handleSubMenuItemClick = (itemName: string) => {
    if (onNavigationClick) {
      onNavigationClick(itemName);
    }
    handleCloseMenu();
  };

  // Получаем данные для активного подменю
  const getActiveSubmenu = () => {
    if (!activeMenuItem) return null;
    return dropdownMenus[activeMenuItem];
  };

  const activeSubmenu = getActiveSubmenu();

  return (
    <>
      {/* Мобильное меню */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        {/* Верхняя часть с телефоном и иконками из TopBar в одну строку */}
        <div className={styles.topSection}>
          {/* Телефон */}
          <div className={styles.phoneSection}>
            <span className={styles.phone}>8-(8152)-60-12-70</span>
          </div>

          {/* Иконки из TopBar */}
          <div className={styles.topBarIcons}>
            <button className={styles.topBarIcon} aria-label="Поиск">
              <MagnifyingGlassIcon className={styles.icon} />
            </button>
            <button className={styles.topBarIcon} aria-label="Сравнение">
              <ChartBarIcon className={styles.icon} />
            </button>
            <button className={styles.topBarIcon} aria-label="Личный кабинет">
              <UserIcon className={styles.icon} />
            </button>
            <button className={styles.topBarIcon} aria-label="Избранное">
              <HeartIcon className={styles.icon} />
            </button>
            <button className={styles.topBarIcon} aria-label="Корзина">
              <ShoppingCartIcon className={styles.icon} />
            </button>
          </div>
        </div>

        {/* Заголовок меню с логотипом и кнопкой закрытия */}
        <div className={styles.menuHeader}>
          <div className={styles.logoSection}>
            <Logo />
          </div>

          <button
            onClick={handleCloseMenu}
            className={styles.closeButton}
            aria-label="Закрыть меню"
          >
            <XMarkIcon className={styles.closeIcon} />
          </button>
        </div>

        {/* Контент меню */}
        <div className={styles.menuContent}>
          {currentMenu === 'main' ? (
            /* Главное меню в виде сетки кнопок */
            <div className={styles.menuGrid}>
              {menuButtons.map(button => (
                <button
                  key={button.name}
                  type="button"
                  onClick={() => handleMenuItemClick(button.name, button.hasDropdown)}
                  className={styles.menuGridButton}
                  style={{
                    backgroundImage: `url(${getImageForMenuItem(button.name)})`,
                  }}
                >
                  <span className={styles.buttonText}>{button.name}</span>
                  {/* {button.hasDropdown && <span className={styles.buttonArrow}>›</span>} */}
                </button>
              ))}
            </div>
          ) : (
            /* Подменю */
            <div className={styles.subMenu}>
              <button onClick={handleBackToMainMenu} className={styles.backButton}>
                <ChevronLeftIcon className={styles.backIcon} />
                Назад
              </button>
              {activeSubmenu &&
                activeSubmenu.items.map(subItem => (
                  <button
                    key={subItem.name}
                    type="button"
                    onClick={() => handleSubMenuItemClick(subItem.name)}
                    className={styles.subMenuItem}
                  >
                    {subItem.name}
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Футер меню с кнопками действий */}
        <div className={styles.menuFooter}>
          <ActionButtons mobile />
        </div>
      </div>

      {/* Overlay для закрытия меню */}
      {mobileMenuOpen && <div className={styles.overlay} onClick={handleCloseMenu} />}
    </>
  );
};

import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { navigation, dropdownMenus } from '@/shared/constants/navigation';
import { Button } from '@/shared/ui/Button';
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
  image?: string;
  href?: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  onNavigationClick,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [currentMenu, setCurrentMenu] = React.useState<MenuState>('main');
  const [activeMenuItem, setActiveMenuItem] = React.useState<string | null>(null);

  // Преобразуем навигацию в формат для кнопок с изображениями
  const menuButtons: MenuButton[] = navigation.map(item => ({
    name: item.name,
    hasDropdown: item.hasDropdown,
    image: getImageForMenuItem(item.name),
    href: item.href,
  }));

  function getImageForMenuItem(itemName: string): string {
    // Здесь можно задать изображения для каждого пункта меню
    const imageMap: Record<string, string> = {
      Мебель: '/images/menu/furniture.jpg',
      'Ремонт квартир': '/images/menu/repair.jpg',
      Двери: '/images/menu/doors.jpg',
      Окна: '/images/menu/windows.jpg',
      Потолки: '/images/menu/ceilings.jpg',
      Жалюзи: '/images/menu/blinds.jpg',
      Акции: '/images/menu/sales.jpg',
    };
    return imageMap[itemName] || '/images/menu/default.jpg';
  }

  const handleMenuToggle = () => {
    if (setMobileMenuOpen) {
      setMobileMenuOpen(!mobileMenuOpen);
      // Сброс состояния при закрытии меню
      if (mobileMenuOpen) {
        setTimeout(() => {
          setCurrentMenu('main');
          setActiveMenuItem(null);
        }, 300);
      }
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
      handleMenuToggle();
    }
  };

  const handleBackClick = () => {
    setCurrentMenu('main');
    setActiveMenuItem(null);
  };

  const handleSubMenuItemClick = (itemName: string) => {
    if (onNavigationClick) {
      onNavigationClick(itemName);
    }
    handleMenuToggle();
  };

  const handleActionButtonClick = () => {
    handleMenuToggle();
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
        {/* Заголовок меню */}
        <div className={styles.menuHeader}>
          {currentMenu === 'submenu' && (
            <button onClick={handleBackClick} className={styles.backButton}>
              <ChevronLeftIcon className={styles.backIcon} />
              Назад
            </button>
          )}
        </div>

        {/* Контент меню */}
        <div className={styles.menuContent}>
          {currentMenu === 'main' ? (
            /* Главное меню в виде сетки кнопок */
            <div className={styles.menuGrid}>
              {menuButtons.map(button => (
                <Button
                  key={button.name}
                  variant="menu" // Используем новый вариант
                  size="lg"
                  onClick={() => handleMenuItemClick(button.name, button.hasDropdown)}
                  className={styles.menuGridButton}
                  style={{
                    backgroundImage: button.image ? `url(${button.image})` : 'none',
                  }}
                >
                  <span className={styles.buttonText}>{button.name}</span>
                  {button.hasDropdown && <span className={styles.buttonArrow}>›</span>}
                </Button>
              ))}
            </div>
          ) : (
            /* Подменю */
            <div className={styles.subMenu}>
              {activeSubmenu &&
                activeSubmenu.items.map(subItem => (
                  <button
                    key={subItem.name}
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
          <div className={styles.actionButtons}>
            <Button
              variant="outline"
              onClick={handleActionButtonClick}
              className={styles.actionButton}
            >
              Записаться на замер
            </Button>
            <Button
              variant="outline"
              onClick={handleActionButtonClick}
              className={styles.actionButton}
            >
              Заказать обратный звонок
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

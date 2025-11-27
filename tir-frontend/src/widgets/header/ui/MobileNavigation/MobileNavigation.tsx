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
      Мебель: '/images/menu/light/02.png',
      Ремонт: '/images/menu/light/01.png',
      Двери: '/images/menu/light/03.png',
      Окна: '/images/menu/light/04.png',
      Потолки: '/images/menu/light/06.png',
      Жалюзи: '/images/menu/light/05.png',
      Акции: '/images/menu/light/07.png',
    };
    return imageMap[itemName] || '/images/menu/default.jpg';
  }

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
                    backgroundImage: button.image ? `url(${button.image})` : 'none',
                  }}
                >
                  <span className={styles.buttonText}>{button.name}</span>
                  {button.hasDropdown && <span className={styles.buttonArrow}>›</span>}
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

// import React from 'react';
// import { ChevronLeftIcon } from '@heroicons/react/24/outline';
// import { navigation, dropdownMenus } from '@/shared/constants/navigation';
// import { ActionButtons } from '@/widgets/header/ui/ActionButtons/ActionButtons';
// import styles from './MobileNavigation.module.css';

// export interface MobileNavigationProps {
//   onNavigationClick?: (sectionName: string) => void;
//   mobileMenuOpen?: boolean;
//   setMobileMenuOpen?: (open: boolean) => void;
// }

// type MenuState = 'main' | 'submenu';

// // Интерфейс для кнопок меню с изображениями
// interface MenuButton {
//   name: string;
//   hasDropdown: boolean;
//   image?: string;
//   href?: string;
// }

// export const MobileNavigation: React.FC<MobileNavigationProps> = ({
//   onNavigationClick,
//   mobileMenuOpen,
//   setMobileMenuOpen,
// }) => {
//   const [currentMenu, setCurrentMenu] = React.useState<MenuState>('main');
//   const [activeMenuItem, setActiveMenuItem] = React.useState<string | null>(null);

//   // Преобразуем навигацию в формат для кнопок с изображениями
//   const menuButtons: MenuButton[] = navigation.map(item => ({
//     name: item.name,
//     hasDropdown: item.hasDropdown,
//     image: getImageForMenuItem(item.name),
//     href: item.href,
//   }));

//   function getImageForMenuItem(itemName: string): string {
//     // Здесь можно задать изображения для каждого пункта меню
//     const imageMap: Record<string, string> = {
//       Мебель: '/images/menu/light/02.png',
//       Ремонт: '/images/menu/light/01.png',
//       Двери: '/images/menu/light/03.png',
//       Окна: '/images/menu/light/04.png',
//       Потолки: '/images/menu/light/06.png',
//       Жалюзи: '/images/menu/light/05.png',
//       Акции: '/images/menu/light/07.png',
//     };
//     return imageMap[itemName] || '/images/menu/default.jpg';
//   }

//   const handleMenuToggle = () => {
//     if (setMobileMenuOpen) {
//       setMobileMenuOpen(!mobileMenuOpen);
//       // Сброс состояния при закрытии меню
//       if (mobileMenuOpen) {
//         setTimeout(() => {
//           setCurrentMenu('main');
//           setActiveMenuItem(null);
//         }, 300);
//       }
//     }
//   };

//   const handleMenuItemClick = (itemName: string, hasDropdown: boolean) => {
//     if (hasDropdown) {
//       setActiveMenuItem(itemName);
//       setCurrentMenu('submenu');
//       if (onNavigationClick) {
//         onNavigationClick(itemName);
//       }
//     } else {
//       // Закрываем меню при переходе по ссылке
//       handleMenuToggle();
//     }
//   };

//   const handleBackClick = () => {
//     setCurrentMenu('main');
//     setActiveMenuItem(null);
//   };

//   const handleSubMenuItemClick = (itemName: string) => {
//     if (onNavigationClick) {
//       onNavigationClick(itemName);
//     }
//     handleMenuToggle();
//   };

//   // Получаем данные для активного подменю
//   const getActiveSubmenu = () => {
//     if (!activeMenuItem) return null;
//     return dropdownMenus[activeMenuItem];
//   };

//   const activeSubmenu = getActiveSubmenu();

//   return (
//     <>
//       {/* Мобильное меню */}
//       <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
//         {/* Заголовок меню */}
//         <div className={styles.menuHeader}>
//           {currentMenu === 'submenu' && (
//             <button onClick={handleBackClick} className={styles.backButton}>
//               <ChevronLeftIcon className={styles.backIcon} />
//               Назад
//             </button>
//           )}
//         </div>

//         {/* Контент меню */}
//         <div className={styles.menuContent}>
//           {currentMenu === 'main' ? (
//             /* Главное меню в виде сетки кнопок */
//             <div className={styles.menuGrid}>
//               {menuButtons.map(button => (
//                 <button
//                   key={button.name}
//                   type="button"
//                   onClick={() => handleMenuItemClick(button.name, button.hasDropdown)}
//                   className={styles.menuGridButton}
//                   style={{
//                     backgroundImage: button.image ? `url(${button.image})` : 'none',
//                   }}
//                 >
//                   <span className={styles.buttonText}>{button.name}</span>
//                   {button.hasDropdown && <span className={styles.buttonArrow}>›</span>}
//                 </button>
//               ))}
//             </div>
//           ) : (
//             /* Подменю */
//             <div className={styles.subMenu}>
//               {activeSubmenu &&
//                 activeSubmenu.items.map(subItem => (
//                   <button
//                     key={subItem.name}
//                     type="button"
//                     onClick={() => handleSubMenuItemClick(subItem.name)}
//                     className={styles.subMenuItem}
//                   >
//                     {subItem.name}
//                   </button>
//                 ))}
//             </div>
//           )}
//         </div>

//         {/* Футер меню с кнопками действий */}
//         <div className={styles.menuFooter}>
//           <ActionButtons mobile /> {/* Используем обновленный компонент */}
//         </div>
//       </div>
//     </>
//   );
// };

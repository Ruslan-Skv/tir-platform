import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
  XMarkIcon,
  ChevronDownIcon,
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { navigation, dropdownMenus } from '@/shared/constants/navigation';
import { Button } from '@/shared/ui/Button';
import { useTheme } from '@/features/theme';
import styles from './MobileNavigation.module.css';
import { Modal } from '@/shared/ui';
import { useModal } from '@/shared/lib';
import {
  CallbackForm,
  MeasurementForm,
  SuccessMessage,
  useFormSubmission,
  type CallbackFormData,
  type MeasurementFormData,
} from '@/features/forms';

export interface MobileNavigationProps {
  onNavigationClick?: (sectionName: string) => void;
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  onNavigationClick,
  mobileMenuOpen = false,
  setMobileMenuOpen,
}) => {
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const { isDarkTheme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const measurementModal = useModal();
  const callbackModal = useModal();
  const formSubmission = useFormSubmission();

  const handleNavClick = (itemName: string) => {
    if (onNavigationClick) {
      onNavigationClick(itemName);
    }
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    setMobileActiveDropdown(null);
  };

  const handleDropdownItemClick = (itemName: string, event: React.MouseEvent) => {
    event.preventDefault();
    if (onNavigationClick) {
      onNavigationClick(itemName);
    }
    setMobileActiveDropdown(null);
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileDropdown = (itemName: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setMobileActiveDropdown(mobileActiveDropdown === itemName ? null : itemName);
  };

  const handleCloseMenu = () => {
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    setMobileActiveDropdown(null);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handleUserButtonClick = () => {
    navigate('/profile');
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleFavoritesButtonClick = () => {
    navigate('/favorites');
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleCartButtonClick = () => {
    navigate('/cart');
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleMeasurementSubmit = async (data: MeasurementFormData) => {
    const success = await formSubmission.submitMeasurement(data);
    if (success) {
      setTimeout(() => {
        measurementModal.close();
        formSubmission.reset();
        if (setMobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }, 2000);
    }
  };

  const handleCallbackSubmit = async (data: CallbackFormData) => {
    const success = await formSubmission.submitCallback(data);
    if (success) {
      setTimeout(() => {
        callbackModal.close();
        formSubmission.reset();
        if (setMobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }, 2000);
    }
  };

  const handleCloseMeasurement = () => {
    measurementModal.close();
    formSubmission.reset();
  };

  const handleCloseCallback = () => {
    callbackModal.close();
    formSubmission.reset();
  };

  const handleMeasurementButtonClick = () => {
    measurementModal.open();
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleCallbackButtonClick = () => {
    callbackModal.open();
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <Dialog as="div" className={styles.dialog} open={mobileMenuOpen} onClose={handleCloseMenu}>
        <div className={styles.backdrop} />
        <Dialog.Panel className={styles.panel}>
          {/* Заголовок меню */}
          <div className={styles.header}>
            <div className={styles.logo}>ТИР</div>
            <button type="button" className={styles.closeButton} onClick={handleCloseMenu}>
              <XMarkIcon className={styles.closeIcon} />
            </button>
          </div>

          {/* Контакты и утилиты */}
          <div className={styles.contacts}>
            <div className={styles.phone}>8-8152-60-12-70</div>
            <div className={styles.utilities}>
              <button onClick={handleUserButtonClick} className={styles.utilityButton}>
                <UserIcon className={styles.utilityIcon} />
                Кабинет
              </button>
              <button onClick={handleFavoritesButtonClick} className={styles.utilityButton}>
                <HeartIcon className={styles.utilityIcon} />
                Избранное
              </button>
              <button onClick={handleCartButtonClick} className={styles.utilityButton}>
                <ShoppingCartIcon className={styles.utilityIcon} />
                Корзина
              </button>
              <button onClick={handleThemeToggle} className={styles.utilityButton}>
                {isDarkTheme ? (
                  <>
                    <SunIcon className={styles.utilityIcon} />
                    Светлая
                  </>
                ) : (
                  <>
                    <MoonIcon className={styles.utilityIcon} />
                    Тёмная
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Основная навигация */}
          <div className={styles.navigation}>
            <div className={styles.navContainer}>
              {navigation.map(item => {
                const hasDropdown = item.hasDropdown;
                const isDropdownOpen = mobileActiveDropdown === item.name;
                const menuData = hasDropdown ? dropdownMenus[item.name] : null;

                return (
                  <div key={item.name}>
                    <div className={styles.navItem}>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleNavClick(item.name)}
                        className={styles.navButton}
                      >
                        {item.name}
                      </Button>
                      {hasDropdown && (
                        <button
                          onClick={e => toggleMobileDropdown(item.name, e)}
                          className={styles.dropdownToggle}
                        >
                          <ChevronDownIcon
                            className={`${styles.chevron} ${
                              isDropdownOpen ? styles.chevronOpen : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {hasDropdown && isDropdownOpen && menuData && (
                      <div className={styles.dropdownMenu}>
                        {menuData.items.map(dropdownItem => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={e => handleDropdownItemClick(dropdownItem.name, e)}
                            className={styles.dropdownItem}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Кнопки действий */}
          <div className={styles.actionButtons}>
            <Button className={styles.actionButton} onClick={handleMeasurementButtonClick}>
              Записаться на замер
            </Button>
            <Button className={styles.actionButton} onClick={handleCallbackButtonClick}>
              Заказать обратный звонок
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/* Модальные окна для форм */}
      <Modal
        isOpen={measurementModal.isOpen}
        onClose={handleCloseMeasurement}
        title="Запись на бесплатный замер"
        size="lg"
      >
        {formSubmission.success ? (
          <SuccessMessage
            title="Заявка принята!"
            message="Наш специалист свяжется с вами в ближайшее время для подтверждения замера. Ожидайте звонок в выбранное время."
            onClose={handleCloseMeasurement}
          />
        ) : (
          <MeasurementForm
            onSubmit={handleMeasurementSubmit}
            onCancel={handleCloseMeasurement}
            loading={formSubmission.loading}
          />
        )}
        {formSubmission.error && <div className={styles.error}>{formSubmission.error}</div>}
      </Modal>

      <Modal
        isOpen={callbackModal.isOpen}
        onClose={handleCloseCallback}
        title="Заказ обратного звонка"
        size="md"
      >
        {formSubmission.success ? (
          <SuccessMessage
            title="Заявка принята!"
            message="Мы перезвоним вам в течение 15 минут в выбранное время. Ожидайте звонок!"
            onClose={handleCloseCallback}
          />
        ) : (
          <CallbackForm
            onSubmit={handleCallbackSubmit}
            onCancel={handleCloseCallback}
            loading={formSubmission.loading}
          />
        )}
        {formSubmission.error && <div className={styles.error}>{formSubmission.error}</div>}
      </Modal>
    </>
  );
};

import React, { useRef } from 'react';
import styles from './DesktopNavigation.module.css';
import { useDropdown } from '@/shared/lib/hooks';
import { navigation } from '@/shared/constants/navigation';
import { NavigationItem } from '../NavigationItem/NavigationItem';

export interface DesktopNavigationProps {
  onNavigationClick?: (sectionName: string) => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ onNavigationClick }) => {
  const {
    activeDropdown,
    openDropdown,
    closeDropdown,
    handleDropdownMouseEnter,
    handleDropdownMouseLeave,
  } = useDropdown();

  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.desktopNavigation} ref={dropdownRef}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          {navigation.map(item => (
            <NavigationItem
              key={item.name}
              item={item}
              isActive={activeDropdown === item.name}
              onMouseEnter={() => item.hasDropdown && openDropdown(item.name)}
              onMouseLeave={closeDropdown}
              onDropdownMouseEnter={handleDropdownMouseEnter}
              onDropdownMouseLeave={handleDropdownMouseLeave}
              onClick={onNavigationClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import styles from './Navigation.module.css';
import { DesktopNavigation } from '../DesktopNavigation/DesktopNavigation';
import { MobileNavigation } from '../MobileNavigation';

export interface NavigationProps {
  onNavigationClick?: (sectionName: string) => void;
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onNavigationClick,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <div className={styles.navigation}>
      <DesktopNavigation onNavigationClick={onNavigationClick} />
      <MobileNavigation
        onNavigationClick={onNavigationClick}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </div>
  );
};

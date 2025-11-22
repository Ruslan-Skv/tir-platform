import React from 'react';
import styles from './Header.module.css';
import { TopBar } from '../TopBar/TopBar';
import { ActionButtons } from '../ActionButtons/ActionButtons';
import { Navigation } from '../Navigation/Navigation';
import { Logo } from '@/shared/ui/Logo';

export interface HeaderProps {
  onNavigationClick?: (sectionName: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigationClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className={styles.header}>
      <TopBar />

      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.logoSection}>
            <Logo />
            <ActionButtons onMobileMenuOpen={() => setMobileMenuOpen(!mobileMenuOpen)} />
          </div>
        </div>
      </div>

      <Navigation
        onNavigationClick={onNavigationClick}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

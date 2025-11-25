import React from 'react';
import { companyInfo, socialLinks } from '@/shared/constants/footer';
import { AboutSection } from '../AboutSection/AboutSection';
import { CatalogSection } from '../CatalogSection/CatalogSection';
import { ContactSection } from '../ContactSection/ContactSection';
import styles from './FooterSections.module.css';

export const FooterSections: React.FC = () => {
  return (
    <div className={styles.sections}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <AboutSection />
          <CatalogSection />
          <ContactSection companyInfo={companyInfo} socialLinks={socialLinks} />
        </div>
      </div>
    </div>
  );
};

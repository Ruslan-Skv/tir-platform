import React from 'react';
import { companyInfo } from '@/shared/constants/footer';
import styles from './FooterBottom.module.css';

export const FooterBottom: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.bottom}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>{currentYear} «Территория интерьерных решений»</p>
          <p className={styles.developer}>
            Разработчик сайта: {companyInfo.developer} ({companyInfo.email})
          </p>
        </div>
      </div>
    </div>
  );
};

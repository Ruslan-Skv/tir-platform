import React from 'react';
import { footerSections } from '@/shared/constants/footer';
import styles from './CatalogSection.module.css';

export const CatalogSection: React.FC = () => {
  const catalogSection = footerSections.find(section => section.title === 'Каталог');

  if (!catalogSection) return null;

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>{catalogSection.title}</h3>
      <ul className={styles.list}>
        {catalogSection.links.map(link => (
          <li key={link.name}>
            <a href={link.href} className={styles.link}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

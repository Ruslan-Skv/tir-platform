import React from 'react';
import { footerSections } from '@/shared/constants/footer';
import styles from './AboutSection.module.css';

export const AboutSection: React.FC = () => {
  const aboutSection = footerSections.find(section => section.title === 'О нас');

  if (!aboutSection) return null;

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>{aboutSection.title}</h3>
      <ul className={styles.list}>
        {aboutSection.links.map(link => (
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

import React from 'react';
import { Button } from '@/shared/ui/Button';
import { useFormContext } from '@/features/forms';
import type { CompanyInfo, SocialLinks } from '@/shared/constants/footer';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  companyInfo: CompanyInfo;
  socialLinks: SocialLinks;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ companyInfo, socialLinks }) => {
  const { callbackModal } = useFormContext();

  const handleDirectorMessage = () => {
    callbackModal.open();
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>Контакты</h3>

      <div className={styles.contactInfo}>
        <p className={styles.phone}>{companyInfo.phone}</p>
        <h4 className={styles.subtitle}>Режим работы</h4>
        <p className={styles.text}>{companyInfo.workingHours.weekdays}</p>
        <p className={styles.text}>{companyInfo.workingHours.saturday}</p>
        <p className={styles.text}>{companyInfo.workingHours.sunday}</p>

        <Button variant="outline" onClick={handleDirectorMessage} className={styles.directorButton}>
          ПИСЬМО ДИРЕКТОРУ
        </Button>
      </div>

      <div className={styles.social}>
        <p className={styles.socialText}>Мы в соцсетях:</p>
        <a
          href={socialLinks.vk.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label={socialLinks.vk.ariaLabel}
        >
          <img src={socialLinks.vk.icon} alt="VK" className={styles.socialIcon} loading="lazy" />
        </a>
      </div>
    </div>
  );
};

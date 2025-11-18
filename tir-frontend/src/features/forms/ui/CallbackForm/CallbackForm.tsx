import React, { useState } from 'react';
import { Button } from '@/shared/ui/Button';
import type { CallbackFormData } from '../../types/forms';
import styles from './CallbackForm.module.css';

export interface CallbackFormProps {
  onSubmit: (data: CallbackFormData) => void;
  onCancel: () => void;
  loading?: boolean;
}

export const CallbackForm: React.FC<CallbackFormProps> = ({
  onSubmit,
  onCancel,
  loading = false,
}) => {
  const [formData, setFormData] = useState<CallbackFormData>({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    comment: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const timeSlots = [
    'В любое время',
    'Утром (09:00-12:00)',
    'Днем (12:00-15:00)',
    'Вечером (15:00-18:00)',
    'После 18:00',
  ];

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.grid}>
        <div>
          <label className={styles.label}>Имя *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="Ваше имя"
          />
        </div>

        <div>
          <label className={styles.label}>Телефон *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            placeholder="+7 (900) 123-45-67"
          />
        </div>
      </div>

      <div>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className={styles.label}>Удобное время для звонка *</label>
        <select
          name="preferredTime"
          required
          value={formData.preferredTime}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Выберите время</option>
          {timeSlots.map(time => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={styles.label}>Комментарий</label>
        <textarea
          name="comments"
          rows={3}
          value={formData.comment}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Тема разговора, интересующие товары..."
        />
      </div>

      <div className={styles.info}>
        <div className={styles.infoContent}>
          <div className={styles.infoIcon}>
            <svg className={styles.infoSvg} fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className={styles.infoText}>
            <p>
              <strong>Мы перезвоним вам в течение 15 минут</strong> в выбранное время.
            </p>
            <p className={styles.infoSubtext}>Ответим на все вопросы и поможем с выбором!</p>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
          Отмена
        </Button>
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? 'Отправка...' : 'Заказать звонок'}
        </Button>
      </div>
    </form>
  );
};

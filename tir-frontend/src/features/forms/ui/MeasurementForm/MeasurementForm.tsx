import React, { useState } from 'react';
import { Button } from '@/shared/ui/Button';
import type { MeasurementFormData } from '../../types/forms';
import styles from './MeasurementForm.module.css';

export interface MeasurementFormProps {
  onSubmit: (data: MeasurementFormData) => void;
  onCancel: () => void;
  loading?: boolean;
}

export const MeasurementForm: React.FC<MeasurementFormProps> = ({
  onSubmit,
  onCancel,
  loading = false,
}) => {
  const [formData, setFormData] = useState<MeasurementFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    productType: '',
    comments: '',
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

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }

    return dates;
  };

  const timeSlots = ['09:00-11:00', '11:00-13:00', '13:00-15:00', '15:00-17:00', '17:00-19:00'];

  const productTypes = [
    'Межкомнатные двери',
    'Входные двери',
    'Окна',
    'Потолки',
    'Жалюзи',
    'Мебель',
    'Не знаю, нужна консультация',
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
        <label className={styles.label}>Адрес объекта *</label>
        <input
          type="text"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          className={styles.input}
          placeholder="Город, улица, дом, квартира"
        />
      </div>

      <div className={styles.grid}>
        <div>
          <label className={styles.label}>Предпочтительная дата *</label>
          <select
            name="preferredDate"
            required
            value={formData.preferredDate}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Выберите дату</option>
            {getAvailableDates().map(date => (
              <option key={date} value={date}>
                {new Date(date).toLocaleDateString('ru-RU', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'long',
                })}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={styles.label}>Временной интервал *</label>
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
      </div>

      <div>
        <label className={styles.label}>Интересующий товар</label>
        <select
          name="productType"
          value={formData.productType}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Не выбрано</option>
          {productTypes.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={styles.label}>Комментарий</label>
        <textarea
          name="comments"
          rows={3}
          value={formData.comments}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Дополнительная информация, особые пожелания..."
        />
      </div>

      <div className={styles.info}>
        <div className={styles.infoContent}>
          <div className={styles.infoIcon}>
            <svg className={styles.infoSvg} fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className={styles.infoText}>
            <p>
              <strong>Бесплатный замер</strong> включает:
            </p>
            <ul className={styles.infoList}>
              <li>Выезд специалиста в удобное для вас время</li>
              <li>Профессиональные замеры и консультация</li>
              <li>Расчет точной стоимости работ</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
          Отмена
        </Button>
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? 'Отправка...' : 'Записаться на замер'}
        </Button>
      </div>
    </form>
  );
};

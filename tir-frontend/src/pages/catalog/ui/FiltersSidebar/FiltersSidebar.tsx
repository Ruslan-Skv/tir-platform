import React from 'react';
import styles from './FiltersSidebar.module.css';

interface FilterSection {
  title: string;
  type: 'checkbox' | 'range' | 'radio';
  options: string[];
}

export const FiltersSidebar: React.FC = () => {
  const filterSections: FilterSection[] = [
    {
      title: 'Цена',
      type: 'range',
      options: ['0 - 100000'],
    },
    {
      title: 'Категории',
      type: 'checkbox',
      options: ['Диваны', 'Кресла', 'Столы', 'Стулья', 'Кровати'],
    },
    {
      title: 'Бренды',
      type: 'checkbox',
      options: ['IKEA', 'Hoff', 'Mr.Doors', 'Шатура', 'Ангстрем'],
    },
    {
      title: 'Наличие',
      type: 'radio',
      options: ['В наличии', 'Под заказ'],
    },
  ];

  return (
    <div className={styles.filtersSidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>Фильтры</h2>
        <button className={styles.clearButton}>Сбросить</button>
      </div>

      <div className={styles.sections}>
        {filterSections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h3 className={styles.sectionTitle}>{section.title}</h3>

            {section.type === 'checkbox' && (
              <div className={styles.options}>
                {section.options.map(option => (
                  <label key={option} className={styles.option}>
                    <input type="checkbox" />
                    <span className={styles.optionText}>{option}</span>
                  </label>
                ))}
              </div>
            )}

            {section.type === 'radio' && (
              <div className={styles.options}>
                {section.options.map(option => (
                  <label key={option} className={styles.option}>
                    <input type="radio" name={section.title} />
                    <span className={styles.optionText}>{option}</span>
                  </label>
                ))}
              </div>
            )}

            {section.type === 'range' && (
              <div className={styles.range}>
                <input type="range" min="0" max="100000" step="1000" />
                <div className={styles.rangeValues}>
                  <span>0 ₽</span>
                  <span>100 000 ₽</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

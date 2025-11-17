import { useState } from 'react';
import { SEO } from '@/shared/lib/seo';

export const Constructor3D = () => {
  // Используем состояние по умолчанию для определения клиента
  const [isClient] = useState(typeof window !== 'undefined');

  // Полностью CSR компонент - не рендерим на сервере
  if (!isClient) {
    return (
      <div className="constructor-loading">
        <SEO
          title="3D Конструктор | Территория интерьерных решений"
          description="Создайте идеальный интерьер с помощью нашего 3D конструктора"
          url="/constructor"
        />
        <p>Загрузка конструктора...</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="3D Конструктор | Территория интерьерных решений"
        description="Создайте идеальный интерьер с помощью нашего 3D конструктора"
        url="/constructor"
      />

      <div className="constructor-3d">
        <h1>3D Конструктор</h1>
        <p>Интерактивный конструктор будет здесь</p>
      </div>
    </>
  );
};

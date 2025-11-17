import { Button } from '@/shared/ui/Button';

export const HomePage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Территория Интерьерных Решений!</h1>
      <p>Добро пожаловать на нашу платформу!</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button variant="primary">В каталог</Button>
        <Button variant="secondary">О компании</Button>
      </div>
    </div>
  );
};

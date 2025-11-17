import { SEO } from '@/shared/lib/seo';

export const AdminPage = () => {
  return (
    <>
      <SEO
        title="Админ панель | Территория интерьерных решений"
        description="Панель администратора"
        url="/admin"
      />

      <div className="admin-page">
        <h1>Админ панель</h1>
      </div>
    </>
  );
};

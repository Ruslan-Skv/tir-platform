import { SEO } from '@/shared/lib/seo';

export const ProfilePage = () => {
  return (
    <>
      <SEO
        title="Личный кабинет | Территория интерьерных решений"
        description="Ваш личный кабинет"
        url="/profile"
      />

      <div className="profile-page">
        <h1>Личный кабинет</h1>
      </div>
    </>
  );
};

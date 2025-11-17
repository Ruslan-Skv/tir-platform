import { Routes, Route } from 'react-router-dom';
import { ReduxProvider } from '@/app/providers';
import { SEO } from '@/shared/lib/seo';
import './App.css';

// ПРЯМЫЕ импорты - никаких lazy!
import { Page as HomePage } from '@/pages/index.page';
import { Page as CatalogPage } from '@/pages/catalog/index.page';
import { Page as ProductPage } from '@/pages/product/index.page';
import { Page as ProfilePage } from '@/pages/profile/index.page';
import { Page as AdminPage } from '@/pages/admin/index.page';
import { Page as Constructor3D } from '@/features/constructor/index.page';

function App() {
  return (
    <ReduxProvider>
      <div className="App">
        <SEO />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:category" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/constructor" element={<Constructor3D />} />
          <Route path="/constructor/:type" element={<Constructor3D />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </ReduxProvider>
  );
}

const NotFoundPage = () => (
  <div className="not-found">
    <SEO
      title="Страница не найдена | Территория интерьерных решений"
      description="Запрашиваемая страница не существует"
    />
    <h1>404 - Страница не найдена</h1>
    <p>Извините, но такой страницы не существует.</p>
  </div>
);

export default App;

import { Routes, Route } from 'react-router-dom';
import { SEO } from '@/shared/lib/seo';
import { FormProvider, FormModals } from '@/features/forms';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import './App.css';

// ПРЯМЫЕ импорты - никаких lazy!
import { Page as HomePage } from '@/pages/index.page';
import { Page as CatalogPage } from '@/pages/catalog/index.page';
import { Page as ProductPage } from '@/pages/product/index.page';
import { Page as ProfilePage } from '@/pages/profile/index.page';
import { Page as AdminPage } from '@/pages/admin/index.page';
import { Page as Constructor3D } from '@/features/constructor/index.page';
import { NotFoundPage } from './shared/ui';
import { Background } from './widgets/background';

function App() {
  return (
    <FormProvider>
      <div className="App">
        <SEO />
        <Background />
        <Header />

        {/* Основной контент страницы */}
        <div className="mainContent">
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

        <Footer />

        <FormModals />
      </div>
    </FormProvider>
  );
}

export default App;

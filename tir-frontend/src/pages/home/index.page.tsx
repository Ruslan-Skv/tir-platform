import { HomePage } from './ui/HomePage';

// Re-export your existing component with the name 'Page'
// that vite-plugin-ssr expects
export const Page = HomePage;

// Optional: SEO metadata for this page
export const documentProps = {
  title: 'Территория интерьерных решений - Главная',
  description: 'Современные интерьерные решения',
};

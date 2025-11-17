import { writeFileSync } from 'fs'
import { globby } from 'globby'

const generateSitemap = async () => {
  const baseUrl = 'https://psk-pobeda.ru'
  
  // Получаем все страницы
  const pages = await globby([
    'src/pages/**/*.tsx',
    '!src/pages/**/*.test.tsx',
    '!src/pages/**/_*.tsx',
    '!src/pages/**/[*].tsx' // исключаем динамические роуты
  ])

  const urls = pages.map(page => {
    const path = page
      .replace('src/pages', '')
      .replace('/ui', '')
      .replace('.tsx', '')
      .replace('/index', '')
      .replace(/\/$/, '')
    
    return path || '/'
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${url === '/' ? 'daily' : 'weekly'}</changefreq>
      <priority>${url === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`

  writeFileSync('dist/client/sitemap.xml', sitemap)
  console.log('Sitemap generated successfully!')
}

generateSitemap().catch(console.error)
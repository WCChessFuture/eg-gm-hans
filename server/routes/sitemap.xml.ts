export default defineEventHandler(() => {
  const baseUrl = 'https://hansniemann.com'
  const now = new Date().toISOString().split('T')[0]

  const routes = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog/story-hans-niemann-chess-platform', priority: '0.9', changefreq: 'monthly' },
    { url: '/blog/untold-chess-mates-everything-you-need-to-know', priority: '0.9', changefreq: 'monthly' },
    { url: '/blog/chess-platform-comparison-2026', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/play-like-hans-niemann', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/chess-ai-analysis-guide', priority: '0.8', changefreq: 'monthly' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${baseUrl}${r.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
})

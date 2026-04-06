export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Hans Niemann — Chess Grandmaster & Founder of Endgame.ai',
      meta: [
        { name: 'description', content: 'The official site of GM Hans Niemann. From the Sinquefield Cup controversy to building Endgame.ai — the AI-native chess platform with $30K+ monthly prizes. Featured in Netflix\'s Untold: Chess Mates.' },
        { name: 'author', content: 'Hans Niemann' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Hans Niemann — Endgame.ai' },
        { property: 'og:title', content: 'Hans Niemann — Chess Grandmaster & Founder of Endgame.ai' },
        { property: 'og:description', content: 'From Sinquefield Cup to Endgame.ai. The story of GM Hans Niemann, Netflix\'s Untold: Chess Mates, and the AI-native chess platform changing the game.' },
        { property: 'og:image', content: '/img/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Hans Niemann — Chess Grandmaster & Founder of Endgame.ai' },
        { name: 'twitter:description', content: 'From Sinquefield Cup to Endgame.ai. The story of GM Hans Niemann and the chess platform he built.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://hansniemann.com' },
      ],
    },
  },

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900],
      'PT+Serif': [400, 700],
    },
    display: 'swap',
    preconnect: true,
  },

  content: {},

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/blog/**': { prerender: true },
  },
})

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
  ],

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
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
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://hansniemann.com' },
      ],
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NW87JHVK');`,
          type: 'text/javascript',
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-S3T14S416Q',
          async: true,
        },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-S3T14S416Q');`,
          type: 'text/javascript',
        },
      ],
      noscript: [
        {
          innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NW87JHVK" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          body: true,
        },
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
      failOnError: false,
      crawlLinks: true,
      routes: [
        '/',
        '/blog',
        '/blog/story-hans-niemann-chess-platform',
        '/blog/untold-chess-mates-everything-you-need-to-know',
        '/blog/chess-platform-comparison-2026',
        '/blog/play-like-hans-niemann',
        '/blog/chess-ai-analysis-guide',
        '/sitemap.xml',
      ],
    },
  },
})

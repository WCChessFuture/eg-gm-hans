<template>
  <div>
    <HeroSection />
    <StorySection />
    <NetflixSection />
    <FeaturesSection />
    <PlayingStyleSection />
    <ComparisonSection />
    <BioSection />
    <BlogPreviewSection />
    <CtaSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Hans Niemann — Chess Grandmaster & Founder of Endgame.ai',
  meta: [
    { name: 'description', content: 'The official site of GM Hans Niemann. From the Sinquefield Cup controversy to building Endgame.ai — the AI-native chess platform with $30K+ monthly prizes. Featured in Netflix\'s Untold: Chess Mates (April 2026).' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Hans Niemann',
        givenName: 'Hans',
        familyName: 'Niemann',
        jobTitle: 'Chess Grandmaster & Founder of Endgame.ai',
        url: 'https://hansniemann.com',
        description: 'American Chess Grandmaster and founder of Endgame.ai. Featured in Netflix\'s Untold: Chess Mates documentary (2026).',
        knowsAbout: ['Chess', 'Chess Strategy', 'Competitive Chess', 'AI Chess Analysis'],
        affiliation: {
          '@type': 'Organization',
          name: 'Endgame',
          url: 'https://endgame.ai',
        },
        sameAs: [
          'https://en.wikipedia.org/wiki/Hans_Niemann',
          'https://www.twitch.tv/hansniemann',
          'https://ratings.fide.com/profile/2093596',
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Endgame',
        alternateName: 'Endgame.ai',
        url: 'https://endgame.ai',
        description: 'Online chess platform built by GM Hans Niemann. Play chess, solve puzzles, compete in tournaments with $30K+ monthly prizes, and analyze games with AI.',
        founder: {
          '@type': 'Person',
          name: 'Hans Niemann',
          jobTitle: 'Founder & CEO',
        },
        foundingDate: '2024',
        sameAs: [
          'https://www.tiktok.com/@endgameai',
          'https://www.instagram.com/endgameai',
          'https://twitter.com/endgameai',
          'https://www.youtube.com/@endgameai',
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Endgame',
        url: 'https://endgame.ai',
        applicationCategory: 'GameApplication',
        applicationSubCategory: 'Chess',
        operatingSystem: 'Web browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Free to play online chess with AI analysis',
        },
        featureList: [
          'Online chess (Blitz, Bullet, Rapid, Classical)',
          'AI-powered game analysis',
          'Daily chess puzzles',
          'Chess tournaments with cash prizes',
          'AI chess bots at multiple difficulty levels',
          'Live game spectating',
          'Player ratings and leaderboards',
        ],
      }),
    },
  ],
})
</script>

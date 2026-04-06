<template>
  <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div class="relative z-10 max-w-content mx-auto px-4 sm:px-6 text-center py-20">
      <p class="section-subheading mb-6 text-accent-orange">Chess Grandmaster &bull; Founder of Endgame.ai</p>

      <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
        <span class="gradient-text">Hans Niemann</span>
      </h1>

      <p class="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
        From the most controversial moment in modern chess to building the AI-native platform
        changing how the game is played online. Featured in Netflix's
        <em class="text-white not-italic">Untold: Chess Mates</em>.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="https://endgame.ai" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black font-bold text-base hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-white/10">
          Play on Endgame.ai
        </a>
        <NuxtLink to="/#story" class="inline-flex items-center justify-center px-10 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200">
          Read the Story
        </NuxtLink>
      </div>

      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-2xl mx-auto">
        <div>
          <p class="text-2xl md:text-3xl font-bold text-white">GM</p>
          <p class="text-xs md:text-sm text-text-secondary mt-1">Title at 17</p>
        </div>
        <div>
          <p class="text-2xl md:text-3xl font-bold text-accent-orange">$30K+</p>
          <p class="text-xs md:text-sm text-text-secondary mt-1">Monthly Prizes</p>
        </div>
        <div>
          <p class="text-2xl md:text-3xl font-bold text-accent-green">AI</p>
          <p class="text-xs md:text-sm text-text-secondary mt-1">Native Analysis</p>
        </div>
        <div>
          <p class="text-2xl md:text-3xl font-bold text-accent-pink">2026</p>
          <p class="text-xs md:text-sm text-text-secondary mt-1">Netflix Doc</p>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

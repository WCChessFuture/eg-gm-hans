<template>
  <section id="netflix" class="py-24 md:py-32 bg-surface relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-pink/30 to-transparent" />
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-pink/30 to-transparent" />
    <div class="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent-pink/3 rounded-full blur-[150px] pointer-events-none" />

    <div class="max-w-content mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p class="section-subheading mb-4 text-accent-pink">Netflix &bull; April 7, 2026</p>
          <h2 class="section-heading mb-6">
            Untold:<br />Chess Mates
          </h2>
          <p class="text-lg text-text-secondary mb-6 leading-relaxed">
            The full story of the Carlsen-Niemann controversy is the subject of
            <strong class="text-white">Untold: Chess Mates</strong>, part of Netflix's acclaimed
            sports documentary series. Premiering April 7, 2026.
          </p>
          <p class="text-text-secondary mb-8 leading-relaxed">
            The film covers the events of the 2022 Sinquefield Cup, the fallout, the $100 million
            lawsuit, and what happened after the cameras moved on. It features interviews with key
            figures from both sides of the controversy and offers the most complete account of the
            scandal to date.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/blog/untold-chess-mates-everything-you-need-to-know" class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/80 transition-all duration-200 shadow-lg shadow-primary/20">
              Everything You Need to Know
            </NuxtLink>
          </div>
        </div>

        <div class="relative">
          <div class="aspect-video bg-elevated rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-accent-pink/10 via-transparent to-primary/10" />
            <div class="relative text-center p-8">
              <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span class="text-xs font-medium text-white uppercase tracking-wider">Netflix</span>
              </div>
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">UNTOLD</h3>
              <p class="text-lg text-text-secondary font-display italic">Chess Mates</p>
              <p class="text-sm text-accent-pink mt-4 font-medium">Premieres April 7, 2026</p>
            </div>
          </div>

          <div class="mt-8 grid grid-cols-2 gap-4">
            <div class="card p-4 text-center">
              <p class="text-xl font-bold text-white">$100M</p>
              <p class="text-xs text-text-secondary mt-1">Lawsuit</p>
            </div>
            <div class="card p-4 text-center">
              <p class="text-xl font-bold text-white">Season 5</p>
              <p class="text-xs text-text-secondary mt-1">Untold Series</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

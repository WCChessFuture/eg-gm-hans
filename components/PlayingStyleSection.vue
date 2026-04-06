<template>
  <section class="py-24 md:py-32 bg-surface relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-orange/30 to-transparent" />
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-orange/30 to-transparent" />

    <div class="max-w-content mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p class="section-subheading mb-4 text-accent-orange">Playing Style</p>
          <h2 class="section-heading mb-6">Play Like<br />Hans Niemann</h2>
          <p class="text-lg text-text-secondary mb-8 leading-relaxed">
            Niemann's chess is defined by tactical sharpness, aggressive piece activity, and a
            willingness to sacrifice material that separates him from most players at every level.
          </p>

          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-accent-orange" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              </div>
              <div>
                <p class="text-white font-medium">Tactical Over Positional</p>
                <p class="text-text-secondary text-sm">Thrives in complicated middlegames where calculation determines the outcome</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-accent-orange" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              </div>
              <div>
                <p class="text-white font-medium">Fearless Sacrifices</p>
                <p class="text-text-secondary text-sm">Pawns, exchanges, full pieces &mdash; if it creates attacking chances, he'll take the risk</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-accent-orange" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              </div>
              <div>
                <p class="text-white font-medium">1.e4 & The Sicilian</p>
                <p class="text-text-secondary text-sm">King's pawn as White, Sicilian Defense as Black &mdash; always seeking sharp positions</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-accent-orange" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              </div>
              <div>
                <p class="text-white font-medium">Practical Over Perfect</p>
                <p class="text-text-secondary text-sm">Plays moves that create maximum difficulty for opponents, not just the engine's top choice</p>
              </div>
            </div>
          </div>

          <NuxtLink to="/blog/play-like-hans-niemann" class="inline-flex items-center gap-2 text-accent-orange hover:underline font-medium">
            Learn to play like Hans
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </NuxtLink>
        </div>

        <div class="flex flex-col items-center justify-center">
          <div class="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-accent-orange/5 mb-8">
            <img :src="assetUrl('/img/hans-hero.png')" alt="Hans Niemann" class="w-full h-full object-cover" />
          </div>
          <div class="text-center space-y-4">
            <a href="https://endgame.ai/analysis" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent-orange text-black font-semibold text-sm hover:bg-accent-orange/80 transition-all duration-200 w-full max-w-xs">
              Analyze Like Hans on Endgame.ai
            </a>
            <a href="https://endgame.ai/puzzles" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200 w-full max-w-xs">
              Train with Puzzles
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { assetUrl } = useBaseUrl()
</script>

<template>
  <section id="features" class="py-24 md:py-32">
    <div class="max-w-content mx-auto px-4 sm:px-6">
      <div class="text-center mb-16">
        <p class="section-subheading mb-4">The Platform</p>
        <a href="https://endgame.ai" target="_blank" rel="noopener" class="inline-block mb-8 hover:opacity-80 transition-opacity">
          <img :src="assetUrl('/img/endgame-logo.svg')" alt="Endgame.ai" class="h-10 md:h-14 mx-auto" />
        </a>
        <h2 class="section-heading mb-6">
          Chess, Rebuilt from<br class="hidden md:block" /> the Ground Up
        </h2>
        <p class="text-text-secondary text-lg max-w-2xl mx-auto">
          Endgame.ai is not a protest project. It is a serious chess product built by people who
          understand what competitive players actually want.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card p-8 group">
          <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.147 2.146a2.25 2.25 0 01-1.591.659H7.938a2.25 2.25 0 01-1.591-.659L4.2 14.5m15.6 0l.543.543a1.5 1.5 0 010 2.121l-6.954 6.955a1.5 1.5 0 01-2.121 0L4.743 17.164a1.5 1.5 0 010-2.121L5.286 14.5"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">AI-Powered Analysis</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            Every game gets AI-native analysis that explains positions in ways that help you improve &mdash;
            identifying patterns, highlighting critical moments, and offering training feedback
            adapted to your level.
          </p>
        </div>

        <div class="card p-8 group">
          <div class="w-14 h-14 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-orange/20 transition-colors">
            <svg class="w-7 h-7 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.04 6.04 0 01-2.27.966m4.27-4.966a6.04 6.04 0 002.27.966"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">$30K+ Monthly Prizes</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            Daily tournaments with combined prize pools exceeding $30,000 per month. Arenas,
            Swiss-system events, and themed tournaments across rating brackets, with transparent
            distribution and fast payouts.
          </p>
        </div>

        <div class="card p-8 group">
          <div class="w-14 h-14 bg-accent-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-green/20 transition-colors">
            <svg class="w-7 h-7 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">Built for Speed</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            Infrastructure optimized for low-latency play. Bullet and blitz games feel the way
            they're supposed to &mdash; instant. No lag, no premove failures, no server delays.
          </p>
        </div>

        <div class="card p-8 group">
          <div class="w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 transition-colors">
            <svg class="w-7 h-7 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">Daily Puzzles</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            Curated tactical positions designed to build pattern recognition. Daily challenges
            with difficulty scaling from 800 to 2800, giving every player a reason to come back.
          </p>
        </div>

        <div class="card p-8 group">
          <div class="w-14 h-14 bg-accent-pink/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-pink/20 transition-colors">
            <svg class="w-7 h-7 text-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">AI Training Bots</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            Training tools that simulate specific styles and challenge specific weaknesses.
            Practice against aggressive kingside attacks, sharpen endgame technique, or work on
            positional understanding.
          </p>
        </div>

        <div class="card p-8 group">
          <div class="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">Chess960 Support</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            Fischer Random chess for players who want to test their understanding beyond memorized
            opening theory. Pure chess skill, no preparation advantages.
          </p>
        </div>
      </div>

      <div class="text-center mt-14">
        <a href="https://endgame.ai" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-12 py-4 rounded-full bg-white text-black font-bold text-base hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-white/10">
          Start Playing Free
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const { assetUrl } = useBaseUrl()
</script>

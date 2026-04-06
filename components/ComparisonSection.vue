<template>
  <section class="py-24 md:py-32">
    <div class="max-w-content mx-auto px-4 sm:px-6">
      <div class="text-center mb-16">
        <p class="section-subheading mb-4">How We Compare</p>
        <h2 class="section-heading mb-6">
          Endgame.ai vs the Rest
        </h2>
        <p class="text-text-secondary text-lg max-w-2xl mx-auto">
          An honest look at where Endgame stands against the established platforms in 2026.
        </p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-white/10">
              <th class="text-left py-4 px-4 text-text-secondary font-medium">Feature</th>
              <th class="text-center py-4 px-4 text-white font-semibold bg-primary/5 rounded-t-lg">Endgame.ai</th>
              <th class="text-center py-4 px-4 text-text-secondary font-medium">Chess.com</th>
              <th class="text-center py-4 px-4 text-text-secondary font-medium">Lichess</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in features" :key="row.name" class="border-b border-white/5">
              <td class="py-3.5 px-4 text-text-tertiary">{{ row.name }}</td>
              <td class="py-3.5 px-4 text-center bg-primary/5 text-white font-medium">{{ row.endgame }}</td>
              <td class="py-3.5 px-4 text-center text-text-secondary">{{ row.chesscom }}</td>
              <td class="py-3.5 px-4 text-center text-text-secondary">{{ row.lichess }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center mt-10">
        <NuxtLink to="/blog/chess-platform-comparison-2026" class="inline-flex items-center gap-2 text-primary hover:underline font-medium">
          Read the full comparison
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { name: 'Price', endgame: 'Free', chesscom: 'Freemium ($7-14/mo)', lichess: '100% Free' },
  { name: 'AI Analysis', endgame: 'AI-Native Engine', chesscom: 'Premium Only', lichess: 'Stockfish (Free)' },
  { name: 'Monthly Prizes', endgame: '$30,000+', chesscom: 'Occasional', lichess: 'None' },
  { name: 'Low Latency', endgame: 'Purpose-Built', chesscom: 'Reliable', lichess: 'Fast' },
  { name: 'Natural Language', endgame: 'Yes', chesscom: 'Limited', lichess: 'No' },
  { name: 'Pattern Analysis', endgame: 'Cross-Game AI', chesscom: 'Basic (Premium)', lichess: 'No' },
  { name: 'Chess960', endgame: 'Yes', chesscom: 'Yes', lichess: 'Yes' },
  { name: 'Daily Puzzles', endgame: 'Unlimited', chesscom: 'Limited (Free)', lichess: 'Unlimited' },
  { name: 'Mobile Apps', endgame: 'iOS & Android', chesscom: 'iOS & Android', lichess: 'iOS & Android' },
]
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-background/80">
    <div class="max-w-content mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <LogoIcon :width="120" :height="22" />
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink to="/#story" class="text-sm text-text-secondary hover:text-white transition-colors">Story</NuxtLink>
        <NuxtLink to="/#netflix" class="text-sm text-text-secondary hover:text-white transition-colors">Netflix</NuxtLink>
        <NuxtLink to="/#features" class="text-sm text-text-secondary hover:text-white transition-colors">Platform</NuxtLink>
        <NuxtLink to="/blog" class="text-sm text-text-secondary hover:text-white transition-colors">Blog</NuxtLink>
        <a href="https://endgame.ai" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-gray-100 transition-all duration-200">
          Play Now
        </a>
      </nav>

      <button class="md:hidden p-2 text-white" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <Transition name="slide">
      <div v-if="menuOpen" class="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl">
        <nav class="flex flex-col p-6 gap-4">
          <NuxtLink to="/#story" class="text-lg text-text-secondary hover:text-white transition-colors" @click="menuOpen = false">Story</NuxtLink>
          <NuxtLink to="/#netflix" class="text-lg text-text-secondary hover:text-white transition-colors" @click="menuOpen = false">Netflix</NuxtLink>
          <NuxtLink to="/#features" class="text-lg text-text-secondary hover:text-white transition-colors" @click="menuOpen = false">Platform</NuxtLink>
          <NuxtLink to="/blog" class="text-lg text-text-secondary hover:text-white transition-colors" @click="menuOpen = false">Blog</NuxtLink>
          <a href="https://endgame.ai" target="_blank" rel="noopener" class="btn-primary text-center mt-2">
            Play Now
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const menuOpen = ref(false)
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

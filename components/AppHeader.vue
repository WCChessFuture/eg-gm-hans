<template>
  <header class="w-full flex justify-center px-1 sm:px-4 mt-2 sticky top-1 z-[100001]">
    <div class="w-full shadow-lg">
      <nav
        :class="[
          'w-full bg-[#111] text-white flex items-center justify-between px-2 pl-4 sm:px-4 md:px-8 h-[50px] sm:h-[60px] mx-auto relative',
          menuOpen ? 'rounded-3xl rounded-b-none' : 'rounded-3xl'
        ]"
      >
        <a href="https://endgame.ai" class="hover:opacity-80 transition-opacity">
          <LogoIcon class="h-[28px] w-auto" />
        </a>

        <div class="hidden md:flex items-center gap-8">
          <NuxtLink to="/#story" class="text-sm text-text-secondary hover:text-white transition-colors">Story</NuxtLink>
          <NuxtLink to="/#netflix" class="text-sm text-text-secondary hover:text-white transition-colors">Netflix</NuxtLink>
          <NuxtLink to="/#features" class="text-sm text-text-secondary hover:text-white transition-colors">Platform</NuxtLink>
          <NuxtLink to="/blog" class="text-sm text-text-secondary hover:text-white transition-colors">Blog</NuxtLink>
          <a href="https://endgame.ai" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-gray-100 transition-all duration-200">
            Play Now
          </a>
        </div>

        <button class="md:hidden p-2 text-white" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </nav>

      <Transition name="slide">
        <div v-if="menuOpen" class="md:hidden bg-[#111] text-white px-6 py-4 space-y-1 rounded-b-3xl z-[100001]">
          <NuxtLink to="/#story" class="block py-2 text-lg text-text-secondary hover:text-white transition-colors" @click="menuOpen = false">Story</NuxtLink>
          <NuxtLink to="/#netflix" class="block py-2 text-lg text-text-secondary hover:text-white transition-colors" @click="menuOpen = false">Netflix</NuxtLink>
          <NuxtLink to="/#features" class="block py-2 text-lg text-text-secondary hover:text-white transition-colors" @click="menuOpen = false">Platform</NuxtLink>
          <NuxtLink to="/blog" class="block py-2 text-lg text-text-secondary hover:text-white transition-colors" @click="menuOpen = false">Blog</NuxtLink>
          <a href="https://endgame.ai" target="_blank" rel="noopener" class="block mt-3 text-center py-3 rounded-full bg-white text-black font-semibold text-sm">
            Play Now
          </a>
        </div>
      </Transition>
    </div>
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

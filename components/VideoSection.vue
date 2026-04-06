<template>
  <section class="py-16">
    <div class="max-w-content mx-auto px-4 sm:px-6">
      <div class="rounded-2xl overflow-hidden border border-white/10">
        <video
          class="w-full h-auto"
          autoplay
          muted
          loop
          playsinline
        >
          <source :src="assetUrl('/img/hans-endgame-promo.mp4')" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script setup>
const { assetUrl } = useBaseUrl()
</script>

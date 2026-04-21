<script setup lang="ts">
import tiles from './img/gray-texture-2.jpg'
</script>

<template>
  <VAppBar color="rgba(0,0,0,0.8)" elevate-on-scroll>
    <VToolbarTitle>
      <RouterLink :to="'/test'" class="text-white"> Выбор теста </RouterLink>
    </VToolbarTitle>
  </VAppBar>

  <VMain class="bg-black pb-8" :style="{ backgroundImage: `url(${tiles})`, backgroundRepeat: 'repeat' }">
    <RouterView />
  </VMain>
</template>

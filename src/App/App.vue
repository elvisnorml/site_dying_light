<script setup>
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layout/DefaultLayout/DefaultLayout.vue'
import MainPageLayout from '@/layout/MainPageLayout/MainPageLayout.vue'

const route = useRoute()

const components = {
  DefaultLayout,
  MainPageLayout
}
</script>

<template>
  <VApp>
    <Component :is="components[route.meta.layout]">
      <RouterView />
    </Component>
  </VApp>
</template>

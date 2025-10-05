<script setup>
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layout/DefaultLayout/DefaultLayout.vue'
const route = useRoute()

const components = {
  DefaultLayout
}
</script>

<template>
  <Component :is="components[route.meta.layout]">
    <RouterView />
  </Component>
</template>

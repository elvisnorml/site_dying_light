<script setup>
import { ref, onMounted } from 'vue'
import { blocks } from './constant'
import { mdiArrowUp, mdiChevronDown, mdiChevronUp } from '@mdi/js'

const currentIndex = ref(0)
let isScrolling = false

const scrollToTop = () => {
  const container = document.querySelector('.scroll-wrapper')
  container.style.transform = 'translateY(0)'
  currentIndex.value = 0
}

const scrollToPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    const container = document.querySelector('.scroll-wrapper')
    container.style.transform = `translateY(-${currentIndex.value * 100}vh)`
    container.style.transition = 'transform 0.8s ease'
  }
}

const scrollToNext = () => {
  if (currentIndex.value < blocks.length - 1) {
    currentIndex.value++
    const container = document.querySelector('.scroll-wrapper')
    container.style.transform = `translateY(-${currentIndex.value * 100}vh)`
    container.style.transition = 'transform 0.8s ease'
  }
}

onMounted(() => {
  const container = document.querySelector('.scroll-wrapper')
  container.style.overflow = 'hidden'
  container.style.position = 'relative'
  container.style.height = blocks.length * 100 + 'vh' // Важное изменение

  window.addEventListener(
    'wheel',
    e => {
      e.preventDefault()
      if (isScrolling) return
      isScrolling = true

      const direction = e.deltaY > 0 ? 1 : -1
      currentIndex.value += direction
      if (currentIndex.value < 0) currentIndex.value = 0
      if (currentIndex.value >= blocks.length) currentIndex.value = blocks.length - 1

      container.style.transform = `translateY(-${currentIndex.value * 100}vh)`
      container.style.transition = 'transform 0.8s ease'

      setTimeout(() => (isScrolling = false), 800)
    },
    { passive: false }
  )
})
</script>

<template>
  <div class="scroll-wrapper">
    <VSheet
      v-for="(block, index) in blocks"
      :key="index"
      class="d-flex align-center justify-center"
      height="100vh"
      width="100%"
      :style="`background-image: url(${block.img}); background-size: cover; background-position: center;`"
    >
      <VCol
        cols="12"
        md="6"
        class="pa-6 rounded d-flex flex-column align-center"
        style="background-color: rgba(0, 0, 0, 0.6); max-height: 50%; overflow-y: auto"
      >
        <div class="text-center flex-grow-1 d-flex flex-column justify-center">
          <h1 class="text-white mb-4">{{ block.title }}</h1>
          <p class="text-white">{{ block.text }}</p>
        </div>

        <VBtn v-if="block.link" :to="block.link" color="black" class="align-self-end mt-6"> Перейти </VBtn>
      </VCol>
    </VSheet>
  </div>
  <VBtn
    color="black"
    size="x-large"
    class="position-fixed right-0 bottom-0 mr-10 mb-10"
    @click="scrollToTop"
    :icon="mdiArrowUp"
  />

  <div
    class="position-fixed d-flex flex-column align-center"
    style="top: 50%; left: 20px; transform: translateY(-50%); z-index: 10"
  >
    <VBtn color="black" size="x-large" @click="scrollToPrev" :icon="mdiChevronUp" class="mb-6" />
    <VBtn color="black" size="x-large" @click="scrollToNext" :icon="mdiChevronDown" />
  </div>
</template>

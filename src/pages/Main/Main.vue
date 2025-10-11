<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { blocks } from './constant'
import { mdiArrowUp, mdiChevronDown, mdiChevronUp } from '@mdi/js'

import { useDisplay } from 'vuetify'
const { smAndDown } = useDisplay()

const currentIndex = ref(0)
let isScrolling = false
let handleWheel = null

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
  container.style.height = blocks.length * 100 + 'vh'

  handleWheel = e => {
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
  }

  window.addEventListener('wheel', handleWheel, { passive: false })

  let startY = 0
  let endY = 0

  const handleTouchStart = e => {
    startY = e.touches[0].clientY
  }

  const handleTouchEnd = e => {
    endY = e.changedTouches[0].clientY
    const diff = startY - endY
    if (Math.abs(diff) < 50 || isScrolling) return // защита от ложных срабатываний

    isScrolling = true
    if (diff > 0 && currentIndex.value < blocks.length - 1) currentIndex.value++
    else if (diff < 0 && currentIndex.value > 0) currentIndex.value--

    container.style.transform = `translateY(-${currentIndex.value * 100}vh)`
    container.style.transition = 'transform 0.8s ease'

    setTimeout(() => (isScrolling = false), 800)
  }

  container.addEventListener('touchstart', handleTouchStart, { passive: true })
  container.addEventListener('touchend', handleTouchEnd, { passive: true })

  container._handleTouchStart = handleTouchStart
  container._handleTouchEnd = handleTouchEnd
})

onUnmounted(() => {
  if (handleWheel) window.removeEventListener('wheel', handleWheel)

  const container = document.querySelector('.scroll-wrapper')
  if (container && container._handleTouchStart && container._handleTouchEnd) {
    container.removeEventListener('touchstart', container._handleTouchStart)
    container.removeEventListener('touchend', container._handleTouchEnd)
  }
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
        class="pa-2 pa-md-6 rounded d-flex flex-column align-center"
        style="background-color: rgba(0, 0, 0, 0.6); overflow-y: auto"
        :style="smAndDown ? 'max-height: 80%' : 'max-height: 50%'"
      >
        <div class="text-center flex-grow-1 d-flex flex-column justify-center">
          <p class="text-white mb-4 text-h6 text-sm-h4">{{ block.title }}</p>
          <p class="text-white">{{ block.text }}</p>
        </div>

        <VBtn v-if="block.link" :to="block.link" color="black" class="align-self-end mt-6"> Перейти </VBtn>
      </VCol>
    </VSheet>
  </div>
  <VBtn
    color="black"
    :size="smAndDown ? 'default' : 'x-large'"
    class="position-fixed right-0 bottom-0 mr-2 mb-2 mr-md-10 mb-md-10"
    @click="scrollToTop"
    :icon="mdiArrowUp"
  />

  <div
    class="position-fixed d-flex flex-md-column align-center"
    :class="smAndDown && 'left-0 bottom-0 ml-2 mb-2'"
    :style="!smAndDown && 'top: 50%; left: 20px; transform: translateY(-50%); z-index: 10'"
  >
    <VBtn
      color="black"
      :size="smAndDown ? 'default' : 'x-large'"
      @click="scrollToPrev"
      :icon="mdiChevronUp"
      class="mr-2 mr-md-0 mb-md-6"
    />

    <VBtn color="black" :size="smAndDown ? 'default' : 'x-large'" @click="scrollToNext" :icon="mdiChevronDown" />
  </div>
</template>

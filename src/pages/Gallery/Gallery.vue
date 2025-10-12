<script setup>
import { ref } from 'vue'
import { mdiClose } from '@mdi/js'
import { slides } from './constant'

const dialog = ref(false)
const currentImg = ref('')

function openModal(src) {
  currentImg.value = src
  dialog.value = true
}
</script>

<template>
  <VContainer fluid class="pa-6 bg-grey-lighten-4">
    <VRow justify="center" class="mb-8">
      <VCol cols="12" md="8">
        <VCard elevation="3" class="pa-6">
          <h1 class="text-h4 font-weight-bold mb-3 text-center">Галерея — Dying Light</h1>
          <p class="text-body-1">Откройте для себя атмосферу Харрана через наши кадры.</p>
        </VCard>
      </VCol>
    </VRow>

    <VRow justify="center" class="mb-10">
      <VCol cols="12" md="8">
        <VCarousel hide-delimiters show-arrows-on-hover height="600">
          <VCarouselItem v-for="(item, index) in slides" :key="index">
            <VImg
              :src="item"
              height="600"
              cover
              class="rounded-lg"
              style="cursor: pointer"
              @click="openModal(item)"
              eager
            />
          </VCarouselItem>
        </VCarousel>
      </VCol>
    </VRow>

    <VDialog v-model="dialog" max-width="90vw">
      <VCard flat class="d-inline-flex position-relative">
        <VImg :src="currentImg" max-width="90vw" max-height="90vh" cover class="rounded-lg" />
        <VBtn
          :icon="mdiClose"
          size="small"
          elevation="2"
          class="position-absolute"
          color="white"
          style="top: 8px; right: 8px; background: rgba(0, 0, 0, 0.6)"
          @click="dialog = false"
        />
      </VCard>
    </VDialog>
  </VContainer>
</template>

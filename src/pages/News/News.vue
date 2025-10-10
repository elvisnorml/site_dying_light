<script setup>
import { news } from './constant'
</script>

<template>
  <VContainer fluid class="pa-6 bg-grey-lighten-4">
    <VRow justify="center" class="mb-8">
      <VCol cols="12" md="8">
        <VCard elevation="3" class="pa-6">
          <h1 class="text-h4 font-weight-bold mb-3 text-center">Новости — Dying Light</h1>
          <p class="text-body-1">
            Здесь вы найдете последние новости о нашем проекте, обновления сайта и полезные материалы по Dying Light. Мы
            будем делиться всеми важными событиями и новыми гайдами.
          </p>
        </VCard>
      </VCol>
    </VRow>

    <VRow justify="center" class="mb-10" dense>
      <VCol cols="12" md="8" v-for="(item, index) in news" :key="index" class="mb-4">
        <VCard elevation="2" class="pa-4">
          <h2 class="text-h6 font-weight-medium mb-2">{{ item.title }}</h2>
          <p v-if="item.date" class="text-caption mb-2">{{ item.date }}</p>
          <p class="text-body-1">{{ item.text }}</p>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

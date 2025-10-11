<script setup>
import { blocks } from './constant'
</script>

<template>
  <VContainer fluid class="pa-6 bg-grey-lighten-4">
    <VRow justify="center" class="mb-8">
      <VCol cols="12" md="8">
        <VCard elevation="3" class="pa-6" id="weapons1">
          <h1 class="text-h4 font-weight-bold mb-3 text-center">Оружие и инвентарь — Dying Light</h1>
          <p class="text-body-1">
            В Харране каждый предмет имеет значение. От оружия до инструментов выжившие используют всё, что может помочь
            остаться в живых. Эта страница рассказывает о ключевых видах снаряжения, необходимых для исследования, боя и
            выживания.
          </p>
        </VCard>
      </VCol>
    </VRow>

    <VRow justify="center" class="mb-10" dense id="weapons2">
      <VCol cols="12" md="8" v-for="(item, index) in blocks" :key="index" class="mb-4">
        <VCard elevation="2" class="pa-4">
          <h2 class="text-h6 font-weight-medium mb-2">{{ item.title }}</h2>
          <p class="text-body-1">{{ item.text }}</p>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

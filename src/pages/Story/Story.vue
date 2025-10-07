<template>
  <VContainer fluid class="pa-6 bg-grey-lighten-4">
    <!-- Header -->
    <VRow justify="center" class="mb-8">
      <VCol cols="12" md="8">
        <VCard elevation="3" class="pa-6 text-center">
          <h1 class="text-h4 font-weight-bold mb-3">Сюжет — Dying Light</h1>
          <p class="text-body-1">
            История про выживание в Харране: агент Кайл Крейн попадает в город и сталкивается с моральным выбором.
          </p>
        </VCard>
      </VCol>
    </VRow>

    <!-- Блок с картинками -->
    <VRow justify="center" class="mb-10" dense>
      <VCol cols="12" md="4" v-for="(item, index) in images" :key="index">
        <VCard elevation="2" class="pa-4">
          <VImg :src="item.src" height="250" cover class="rounded-lg mb-3" />
          <h3 class="text-h6 font-weight-medium mb-2">{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </VCard>
      </VCol>
    </VRow>

    <!-- Фракции — табы/чипы -->
    <VRow justify="center" class="mb-10">
      <VCol cols="12" md="8">
        <VCard elevation="2" class="pa-4">
          <h2 class="text-h6 font-weight-medium mb-3">Фракции выживших</h2>
          <VChipGroup v-model="selectedFaction" column>
            <VChip value="tower">Башня</VChip>
            <VChip value="rais">Банда Раиса</VChip>
            <VChip value="loner">Одиночки</VChip>
          </VChipGroup>
          <div class="mt-4">
            <p v-if="selectedFaction === 'tower'"><strong>Башня</strong> — центр сопротивления.</p>
            <p v-else-if="selectedFaction === 'rais'"><strong>Банда Раиса</strong> — криминальная власть.</p>
            <p v-else><strong>Одиночки</strong> — независимые выжившие.</p>
          </div>
        </VCard>
      </VCol>
    </VRow>

    <!-- Timeline — разноцветные кружки -->
    <VRow justify="center" class="mb-10">
      <VCol cols="12" md="8">
        <h2 class="text-h6 font-weight-medium mb-4 text-center">Ключевые события</h2>
        <VTimeline side="end">
          <VTimelineItem dot-color="red">Прибытие Крейна</VTimelineItem>
          <VTimelineItem dot-color="orange">Конфликт с Раисом</VTimelineItem>
          <VTimelineItem dot-color="blue">Предательство и выбор</VTimelineItem>
          <VTimelineItem dot-color="green">Финал — судьба города</VTimelineItem>
        </VTimeline>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { ref } from 'vue'

import demolisher from './assets/demolisher.jpg'
import kusaka from './assets/kusaka.jpg'
import kylecrane from './assets/kylecrane.png'
import oldtown from './assets/old_town.png'
import parkur from './assets/parkur.jpg'
import screamer from './assets/screamer.png'
import volatileImg from './assets/volatile.jpg'
import weapons from './assets/weapons.jpg'

const selectedFaction = ref('tower')

const images = [
  { src: kylecrane, title: 'Кайл Крейн', text: 'Главный герой, агент GRE.' },
  { src: parkur, title: 'Паркур', text: 'Свобода перемещения по крышам Харрана.' },
  { src: weapons, title: 'Крафт и оружие', text: 'Создание уникальных видов оружия.' },
  { src: oldtown, title: 'Старый город', text: 'Опасные узкие улицы и высотные здания.' },
  { src: kusaka, title: 'Кусака', text: 'Обычный заражённый.' },
  { src: volatileImg, title: 'Волатил', text: 'Сильный ночной мутант.' },
  { src: demolisher, title: 'Демолишер', text: 'Большой и сильный заражённый.' },
  { src: screamer, title: 'Кричащий', text: 'Вызывает других заражённых.' }
]
</script>

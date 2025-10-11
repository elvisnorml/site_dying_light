<script setup>
const maps = [
  {
    title: 'Старый город',
    description: 'Карта Старого города Харрана, включая безопасные зоны, задания и тайники.',
    src: 'https://mapgenie.io/dying-light/maps/old-town?embed=light',
    id: 'map2'
  },
  {
    title: 'Слумы',
    description: 'Карта Слумов с отмеченными локациями для сбора ресурсов и выполнения заданий.',
    src: 'https://mapgenie.io/dying-light/maps/slums?embed=light',
    id: 'map3'
  },
  {
    title: 'Антенна',
    description: 'Карта района Антенна с ключевыми точками и опасными зонами.',
    src: 'https://mapgenie.io/dying-light/maps/antenna?embed=light',
    id: 'map4'
  },
  {
    title: 'Пригород',
    description: 'Карта Пригорода, включая новые районы и дополнительные ресурсы.',
    src: 'https://mapgenie.io/dying-light/maps/countryside?embed=light',
    id: 'map5'
  }
]
</script>

<template>
  <VContainer fluid class="pa-6 bg-grey-lighten-4">
    <VRow justify="center" class="mb-8">
      <VCol cols="12" md="8">
        <VCard elevation="3" class="pa-6" id="map1">
          <h1 class="text-h4 font-weight-bold mb-3 text-center">Интерактивные карты Харрана</h1>
          <p class="text-body-1">
            Изучите ключевые районы города Харран с помощью интерактивных карт. Каждая карта содержит информацию о
            безопасных зонах, заданиях, тайниках с ресурсами и других важных локациях.
          </p>
        </VCard>
      </VCol>
    </VRow>

    <VRow justify="center" class="mb-10">
      <VCol cols="12" md="8" v-for="(map, index) in maps" :key="index">
        <VCard elevation="2" class="pa-4 mb-6" :id="map.id">
          <h2 class="text-h6 font-weight-medium mb-3">{{ map.title }}</h2>
          <p class="text-body-1 mb-4">{{ map.description }}</p>
          <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden">
            <iframe
              :src="map.src"
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0"
              loading="lazy"
            ></iframe>
          </div>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

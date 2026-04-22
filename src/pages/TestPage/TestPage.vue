<script setup lang="ts">
// Добавили watch
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import { security } from './constant/security.js'
import { management } from './constant/management.js'
import { javascript } from './constant/javascript.js'
import { web } from './constant/web.js'
import { business } from './constant/business.js'
import { global } from './constant/global.js'

const route = useRoute()
const savedScores = ref<Record<string, string | null>>({})

const dataMap = {
  security,
  management,
  javascript,
  web,
  business,
  global,
  global30: global
}

const currentData = computed(() => {
  const id = route.query.id
  if (!id || typeof id !== 'string') return null
  return dataMap[id as keyof typeof dataMap] || null
})

const updateScores = () => {
  const ids = ['security', 'management', 'javascript', 'web', 'business']
  const results: Record<string, string | null> = {}

  ids.forEach(id => {
    const formattedId = id.charAt(0).toUpperCase() + id.slice(1)
    const storageKey = `testResulte${formattedId}`
    const score = localStorage.getItem(storageKey)
    results[id] = score
  })

  // Перезаписываем объект полностью новым экземпляром
  savedScores.value = { ...results }
}

// Следим за маршрутом: если мы вышли из теста (currentData стал null),
// обновляем баллы немедленно.
watch(
  () => route.query.id,
  () => {
    updateScores()
  },
  { immediate: true } // Это сработает и при первой загрузке вместо onMounted
)
</script>

<template>
  <VContainer v-if="!currentData">
    <VCard elevation="4" class="rounded-lg overflow-hidden pa-4">
      <div
        v-for="test in [
          { id: 'security', text: 'Безопасность операционных систем и баз данных' },
          { id: 'management', text: 'Информационный менеджмент' },
          { id: 'javascript', text: 'Разработка web-приложений на языке JavaScript' },
          { id: 'web', text: 'Разработка серверных приложений для WEB' },
          { id: 'business', text: 'Реинжиниринг бизнес-процессов' },
          { id: 'global', text: 'Все предметы в 1 тесте' },
          { id: 'global30', text: '30 вопросов' }
        ]"
        :key="test.id"
        class="d-flex align-center mb-4"
      >
        <VBtn
          color="primary"
          class="flex-grow-1 text-none"
          style="justify-content: start; min-width: 0"
          :to="{ path: '/test', query: { id: test.id } }"
        >
          <span class="text-truncate">
            {{ test.text }}
          </span>
        </VBtn>

        <div style="min-width: 80px; flex-shrink: 0" class="text-right ml-4">
          <VChip
            v-if="savedScores[test.id] !== null"
            :color="Number(savedScores[test.id]) > 49 ? 'success' : 'error'"
            variant="tonal"
            class="font-weight-bold"
          >
            Баллы {{ savedScores[test.id] }}
          </VChip>
        </div>
      </div>
    </VCard>
  </VContainer>

  <Test v-else :datatest="currentData" />
</template>

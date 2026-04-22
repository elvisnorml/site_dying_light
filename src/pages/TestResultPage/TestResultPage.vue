<script setup lang="ts">
import { computed } from 'vue'
import { global } from '../TestPage/constant/global.js'

const allowedTypes = ['single', 'multiple', 'matching', 'sequence']

const statistics = computed(() => {
  // 1. Хранилище для подсчета. Для single добавим вложенный объект с деталями
  const counts: Record<string, Record<string, any>> = {
    single: {},
    multiple: {},
    matching: {},
    sequence: {}
  }

  if (global?.questions) {
    global.questions.forEach((q: any) => {
      if (!allowedTypes.includes(q.type)) return

      let answerKey = ''
      const ans = q.correctAnswer

      // Логика формирования ключа (без изменений)
      if (q.type === 'sequence' && Array.isArray(ans)) {
        answerKey = ans.join(' → ')
      } else if (q.type === 'multiple' && Array.isArray(ans)) {
        answerKey = [...ans].sort().join(', ')
      } else if (q.type === 'matching' && typeof ans === 'object' && ans !== null) {
        answerKey = Object.entries(ans)
          .map(([k, v]) => `${k}-${v}`)
          .join('; ')
      } else if (q.type === 'single') {
        answerKey = String(ans)
      }

      // Инициализация записи, если её еще нет
      if (!counts[q.type][answerKey]) {
        counts[q.type][answerKey] = { count: 0, longer: 0, shorter: 0 }
      }

      counts[q.type][answerKey].count++

      // ДОПОЛНИТЕЛЬНАЯ ЛОГИКА ДЛЯ SINGLE
      if (q.type === 'single' && q.options) {
        const correctOption = q.options.find((o: any) => o.id === ans)
        if (correctOption) {
          const correctLen = correctOption.text.length
          const allLengths = q.options.map((o: any) => o.text.length)

          const maxLen = Math.max(...allLengths)
          const minLen = Math.min(...allLengths)

          // Если правильный ответ — самый длинный в этом вопросе
          if (correctLen === maxLen) counts[q.type][answerKey].longer++
          // Если правильный ответ — самый короткий в этом вопросе
          if (correctLen === minLen) counts[q.type][answerKey].shorter++
        }
      }
    })
  }

  // 2. Превращаем в отсортированные массивы
  const sortedStats: Record<string, any[]> = {}

  Object.keys(counts).forEach(type => {
    sortedStats[type] = Object.entries(counts[type])
      .map(([answer, data]: [string, any]) => ({
        answer,
        count: data.count,
        longer: data.longer,
        shorter: data.shorter
      }))
      .sort((a, b) => b.count - a.count)
  })

  return sortedStats
})
</script>

<template>
  <VContainer>
    <h1 class="text-h4 mb-2">Статистика по вопросам</h1>
    <p class="text-subtitle-1 mb-6 text-grey-darken-1">Тест: {{ global.title }}</p>

    <div v-for="(answerList, type) in statistics" :key="type">
      <VCard v-if="answerList.length > 0" variant="outlined" class="mb-6 rounded-lg">
        <VCardItem class="bg-indigo-lighten-5">
          <VCardTitle class="text-uppercase text-caption font-weight-bold"> Тип вопроса: {{ type }} </VCardTitle>
        </VCardItem>

        <VDivider />

        <VCardText class="pa-0">
          <VList lines="one">
            <VListItem
              v-for="(item, index) in answerList"
              :key="item.answer"
              :class="{ 'border-bottom': index !== answerList.length - 1 }"
            >
              <div class="d-flex justify-space-between align-center py-2">
                <div class="d-flex align-center">
                  <span class="text-caption text-grey mr-3">#{{ index + 1 }}</span>
                  <span class="text-body-1">
                    {{ item.answer }}

                    <span v-if="type === 'single'" class="text-caption text-grey-darken-1 ml-2">
                      (длиннее - <strong>{{ item.longer }}</strong
                      >, короче - <strong>{{ item.shorter }}</strong
                      >)
                    </span>
                  </span>
                </div>

                <VChip
                  size="small"
                  :color="index === 0 ? 'success' : 'primary'"
                  variant="flat"
                  class="font-weight-bold"
                >
                  {{ item.count }} совпадений
                </VChip>
              </div>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </div>
  </VContainer>
</template>

<style scoped>
.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
}
</style>

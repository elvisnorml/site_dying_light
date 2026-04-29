<script setup lang="ts">
import { ref, computed } from 'vue'
import { global } from '@/pages/TestPage/constant/global.js'
import {
  mdiMagnify,
  mdiFormatListBulleted,
  mdiTextAccount,
  mdiLinkVariant,
  mdiSortNumericAscending,
  mdiHelpCircleOutline
} from '@mdi/js'

const search = ref('')

const formatFullAnswer = (q: any) => {
  const ans = q.correctAnswer
  if (!ans) return ''

  // 1. Одиночный выбор
  if (q.type === 'single') {
    const option = q.options?.find((o: any) => o.id === ans)
    return option ? `${option.id}. ${option.text}` : ans
  }

  // 2. Множественный выбор — каждый ответ с новой строки
  if (q.type === 'multiple' && Array.isArray(ans)) {
    return q.options
      ?.filter((o: any) => ans.includes(o.id))
      .map((o: any) => `${o.id}. ${o.text}`)
      .join('\n') // Перенос строки
  }

  // 3. Последовательность — каждый шаг с новой строки
  if (q.type === 'sequence' && Array.isArray(ans)) {
    return ans
      .map((id: string, index: number) => {
        const option = q.options?.find((o: any) => o.id === id)
        // Добавляем стрелочку в начале для наглядности (кроме первого элемента)
        const prefix = index > 0 ? '↳ ' : ''
        return option ? `${prefix}${id}. ${option.text}` : `${prefix}${id}`
      })
      .join('\n')
  }

  // 4. Сопоставление (matching) — каждая пара с новой строки
  if (q.type === 'matching' && typeof ans === 'object') {
    return Object.entries(ans)
      .map(([key, val]) => {
        const item = q.matchItems?.find((i: any) => i.id === key)
        const target = q.matchTargets?.find((t: any) => t.id === val)

        const itemPart = item ? `${item.id}. ${item.text}` : key
        const targetPart = target ? `${target.id}. ${target.text}` : val
        return `${itemPart} — ${targetPart}`
      })
      .join('\n')
  }

  // 5. Открытый ответ
  return ans
}

// Иконки для разных типов вопросов
const getTypeInfo = (type: string) => {
  switch (type) {
    case 'single':
      return { icon: mdiHelpCircleOutline, color: 'blue', label: 'Одиночный выбор' }
    case 'multiple':
      return { icon: mdiFormatListBulleted, color: 'purple', label: 'Множественный выбор' }
    case 'matching':
      return { icon: mdiLinkVariant, color: 'orange', label: 'Сопоставление' }
    case 'sequence':
      return { icon: mdiSortNumericAscending, color: 'teal', label: 'Последовательность' }
    case 'open':
      return { icon: mdiTextAccount, color: 'green', label: 'Открытый ответ' }
    default:
      return { icon: mdiHelpCircleOutline, color: 'grey', label: type }
  }
}

// Логика поиска по всему тексту
const filteredQuestions = computed(() => {
  const query = search.value.toLowerCase().trim()
  const allQuestions = global.questions || []

  if (!query) return allQuestions

  return allQuestions.filter(q => {
    const questionText = q.text.toLowerCase()
    // Теперь вызываем новую функцию, которая вернет полный текст ответа
    const fullAnswer = formatFullAnswer(q).toLowerCase()

    return questionText.includes(query) || fullAnswer.includes(query)
  })
})
</script>

<template>
  <VContainer max-width="1000" class="py-8">
    <div class="d-flex align-center mb-6">
      <h1 class="text-h4 font-weight-bold">База вопросов</h1>
      <VSpacer />
      <VChip color="primary" variant="flat">{{ filteredQuestions.length }} шт.</VChip>
    </div>

    <VTextField
      v-model="search"
      :prepend-inner-icon="mdiMagnify"
      label="Поиск по вопросу или ответу..."
      variant="solo"
      hide-details
      class="mb-8"
      clearable
      @click:clear="search = ''"
    ></VTextField>

    <div v-if="filteredQuestions.length > 0">
      <VCard
        v-for="(q, idx) in filteredQuestions"
        :key="q.id"
        variant="outlined"
        class="mb-4 border-opacity-25 rounded-lg bg-card"
      >
        <VCardItem>
          <template v-slot:prepend>
            <VAvatar :color="getTypeInfo(q.type).color" size="small">
              <VIcon :icon="getTypeInfo(q.type).icon" color="white" size="small" />
            </VAvatar>
          </template>

          <VCardTitle class="text-body-1 text-wrap ml-2">
            {{ q.text }}
          </VCardTitle>

          <template v-slot:append>
            <div class="text-caption text-grey">{{ getTypeInfo(q.type).label }}</div>
          </template>
        </VCardItem>

        <VDivider />

        <VCardText class="bg-grey-lighten-5">
          <div class="d-flex align-start">
            <VChip size="small" color="success" variant="flat" class="mr-3 mt-1 flex-shrink-0"> Ответ </VChip>

            <div class="text-body-1 font-weight-medium text-success text-pre-wrap">
              {{ formatFullAnswer(q) }}
            </div>
          </div>
        </VCardText>
      </VCard>
    </div>

    <VEmptyState v-else icon="mdi-magnify-close" title="Ничего не найдено" text="Попробуйте изменить запрос" />
  </VContainer>
</template>

<style scoped>
.bg-card {
  transition: transform 0.2s;
}
.bg-card:hover {
  transform: translateY(-2px);
  border-color: rgb(var(--v-theme-primary)) !important;
}
</style>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'

import { mdiCheckCircle, mdiAlertCircle, mdiEyeOutline, mdiCheck, mdiAlert } from '@mdi/js'

const props = defineProps({
  datatest: {
    type: Object,
    required: true
  }
})
const route = useRoute()
const { mobile } = useDisplay()

const feedbackStatus = ref<'correct' | 'error' | null>(null)
let feedbackTimer: any = null

const checkCurrentQuestion = () => {
  // Сбрасываем старый таймер, если он был
  if (feedbackTimer) clearTimeout(feedbackTimer)

  const currentQuestion = questions.value[currentStep.value]
  const isCorrect = isQuestionCorrect(currentQuestion)

  if (isCorrect) nextStep()
  else {
    feedbackStatus.value = isCorrect ? 'correct' : 'error'
  }

  // Убираем фон через 5 секунд
  feedbackTimer = setTimeout(() => {
    feedbackStatus.value = null
  }, 2500)
}
const clearFeedback = () => {
  feedbackStatus.value = null
  if (feedbackTimer) clearTimeout(feedbackTimer)
}

// Состояние
const testTitle = ref('')
const questions = ref<any[]>([])
const currentStep = ref(0)
const answers = ref<Record<string, any>>({})
const isFinished = ref(false)
const showHint = ref(false)

// Расчеты
const progress = computed(() => (questions.value.length ? ((currentStep.value + 1) / questions.value.length) * 100 : 0))

// Логика проверки (сравнение ответов)
const isQuestionCorrect = (q: any) => {
  const userAns = answers.value[q.id]
  const correctAns = q.correctAnswer

  if (q.type === 'single') return userAns === correctAns
  if (q.type === 'multiple') {
    if (!userAns || userAns.length !== correctAns.length) return false
    return userAns.every((v: string) => correctAns.includes(v))
  }
  if (q.type === 'matching') {
    return JSON.stringify(userAns) === JSON.stringify(correctAns)
  }
  if (q.type === 'sequence') {
    const userOrder = Object.entries(answers.value[q.id] || {})
      .filter(([_, pos]) => pos !== null)
      .sort((a, b) => (a[1] as number) - (b[1] as number))
      .map(([id]) => id)

    return JSON.stringify(userOrder) === JSON.stringify(correctAns)
  }
  if (q.type === 'open') {
    return userAns?.trim().toLowerCase() === correctAns.toLowerCase()
  }
  return false
}

const correctCount = computed(() => {
  return questions.value.filter(q => isQuestionCorrect(q)).length
})

const finalScore = computed(() => {
  if (!questions.value.length) return 0
  return Math.round((correctCount.value / questions.value.length) * 100)
})

// Хелпер для красивого вывода ответа в итогах и подсказках
const formatAnswer = (ans: any) => {
  if (!ans) return ''
  if (typeof ans === 'string') return ans
  if (Array.isArray(ans)) return [...ans].join(' → ')

  if (typeof ans === 'object' && ans !== null) {
    // Если это последовательность (значения являются числами)
    const isSequence = Object.values(ans).some(v => typeof v === 'number')
    if (isSequence) {
      const sorted = Object.entries(ans)
        .filter(([_, pos]) => pos !== null)
        .sort((a, b) => (a[1] as number) - (b[1] as number))
        .map(([id]) => id)
      return sorted.length > 0 ? sorted.join(' → ') : ''
    }
    // Если это сопоставление (matching)
    return Object.entries(ans)
      .map(([key, val]) => `${key}-${val}`)
      .join('; ')
  }
  return ans
}

// Навигация
const nextStep = () => {
  showHint.value = false
  currentStep.value++
}
const prevStep = () => {
  showHint.value = false
  currentStep.value--
}
const finishTest = () => {
  isFinished.value = true

  // Формируем ключ: берем id (например, security) и делаем первую букву заглавной
  const formattedId = testId.value.charAt(0).toUpperCase() + testId.value.slice(1)
  const storageKey = `testResulte${formattedId}`

  // Сохраняем итоговый балл
  localStorage.setItem(storageKey, finalScore.value.toString())

  console.log(`Результат сохранен в ${storageKey}: ${finalScore.value}`)
}
const restartTest = () => {
  currentStep.value = 0
  isFinished.value = false
  showHint.value = false
  questions.value = [...props.datatest.questions].sort(() => Math.random() - 0.5)
  initAnswers()
}

const initAnswers = () => {
  questions.value.forEach(q => {
    if (q.type === 'multiple') answers.value[q.id] = []
    else if (q.type === 'matching') {
      answers.value[q.id] = {}
      q.matchItems?.forEach((i: any) => (answers.value[q.id][i.id] = null))
    } else if (q.type === 'sequence') {
      answers.value[q.id] = {}
      q.matchItems?.forEach((i: any) => (answers.value[q.id][i.id] = null))
    } else if (q.type === 'open') answers.value[q.id] = ''
    else answers.value[q.id] = null
  })
}

const getSequenceNumbers = (length: number) => {
  return Array.from({ length }, (_, i) => i + 1)
}

const handleSequenceChange = (qId: string | number, optionId: string, newValue: number | null) => {
  const currentAnswers = answers.value[qId]
  if (!currentAnswers) return

  Object.keys(currentAnswers).forEach(key => {
    if (key !== optionId && currentAnswers[key] === newValue) {
      currentAnswers[key] = null
    }
  })
}

const testId = computed(() => {
  // Безопасное получение ID
  const queryId = route?.query?.id || new URLSearchParams(window.location.search).get('id')
  return queryId ? String(queryId) : 'default'
})

// 1. Считаем процент успеха для уже пройденных вопросов
const liveScore = computed(() => {
  // Берем вопросы от 0 до текущего (не включая текущий, так как на него еще не ответили)
  const pastQuestions = questions.value.slice(0, currentStep.value)

  if (pastQuestions.length === 0) return 0

  const correctSoFar = pastQuestions.filter(q => isQuestionCorrect(q)).length
  return Math.round((correctSoFar / pastQuestions.length) * 100)
})

// 2. Определяем цвет в зависимости от процента
const liveColor = computed(() => {
  const score = liveScore.value
  if (score < 50) return 'error' // Красный
  if (score < 90) return 'warning' // Желтый/Оранжевый
  return 'success' // Зеленый
})

// 3. Выбираем иконку
const liveIcon = computed(() => {
  return liveScore.value < 50 ? mdiAlertCircle : mdiCheckCircle
})

onMounted(() => {
  if (props.datatest) {
    testTitle.value = props.datatest.title
    questions.value = [...props.datatest.questions].sort(() => Math.random() - 0.5)
    initAnswers()
  }
})
</script>

<template>
  <VContainer max-width="900" class="py-8">
    <VCard elevation="4" class="rounded-lg overflow-hidden">
      <template v-if="isFinished">
        <VCardItem class="text-white py-6 text-center" :class="finalScore > 49 ? 'bg-success' : 'bg-error'">
          <VCardTitle class="text-h4">Результаты теста</VCardTitle>
          <div class="text-h2 mt-2 font-weight-bold">{{ finalScore }} / 100</div>
          <div class="text-h6 mt-1 opacity-90">Верно: {{ correctCount }} из {{ questions.length }}</div>
        </VCardItem>

        <VCardText class="pa-6">
          <v-list lines="three">
            <VListItem
              v-for="(q, idx) in questions"
              :key="q.id"
              :prepend-icon="isQuestionCorrect(q) ? mdiCheckCircle : mdiAlertCircle"
              :title="`${idx + 1}. ${q.text}`"
              :base-color="isQuestionCorrect(q) ? 'success' : 'error'"
              class="mb-4 border rounded-lg"
            >
              <VListItemSubtitle class="mt-2 text-body-2">
                <strong>Ваш ответ:</strong> {{ formatAnswer(answers[q.id]) || 'Нет ответа' }}
                <br />
                <strong v-if="!isQuestionCorrect(q)">Правильный ответ:</strong>
                <span v-if="!isQuestionCorrect(q)" class="text-success">{{ formatAnswer(q.correctAnswer) }}</span>
              </VListItemSubtitle>
            </VListItem>
          </v-list>

          <VBtn block color="primary" size="large" variant="tonal" class="mt-6" @click="restartTest">
            Пройти еще раз
          </VBtn>

          <VBtn block color="primary" size="large" variant="tonal" class="mt-6" :to="{ path: '/test' }">
            Вернуться к выбору теста
          </VBtn>
        </VCardText>
      </template>

      <template v-else>
        <VCardItem class="bg-primary text-white py-4">
          <VCardTitle class="text-h5 text-wrap">{{ testTitle }}</VCardTitle>
          <!-- <div class="d-flex align-center justify-space-between mb-6" :class="mobile && 'flex-column'">
            <VCardTitle class="text-h5 text-wrap">{{ testTitle }}</VCardTitle>
            <VBtn color="green" :icon="mdiCheckCircle" class="ml-4" @click="checkCurrentQuestion" />
          </div> -->
          <VCardSubtitle class="text-white opacity-80 mt-1">
            Вопрос {{ currentStep + 1 }} из {{ questions.length }}
          </VCardSubtitle>
        </VCardItem>

        <VProgressLinear :model-value="progress" :color="liveColor" height="30" striped>
          <template v-slot:default="{ value }">
            <div
              class="d-flex align-center text-white font-weight-bold"
              style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 1)"
            >
              <span class="mr-2">Прогресс: {{ Math.floor(value) }}%</span>

              <VDivider vertical class="mx-2" color="white" />

              <span class="ml-2">Точность: {{ liveScore }}%</span>
              <VIcon :icon="liveIcon" size="small" :color="liveColor" class="ml-1" />
            </div>
          </template>
        </VProgressLinear>

        <VCardText
          class="pa-6"
          :class="{
            'bg-pink-lighten-4': feedbackStatus === 'error',
            'bg-lime-lighten-4': feedbackStatus === 'correct'
          }"
        >
          <VWindow v-model="currentStep" :touch="false">
            <VWindowItem v-for="(question, index) in questions" :key="question.id" :value="index">
              <div class="text-h6 mb-6 font-weight-medium">{{ question.text }}</div>

              <VRadioGroup v-if="question.type === 'single'" v-model="answers[question.id]" color="primary">
                <VRadio
                  v-for="option in question.options"
                  :key="option.id"
                  :label="`${option.id + '. ' + option.text}`"
                  :value="option.id"
                  class="mb-2"
                ></VRadio>
              </VRadioGroup>

              <template v-if="question.type === 'multiple'">
                <v-checkbox
                  v-for="option in question.options"
                  :key="option.id"
                  v-model="answers[question.id]"
                  :label="`${option.id + '. ' + option.text}`"
                  :value="option.id"
                  color="primary"
                  hide-details
                  class="mb-2"
                ></v-checkbox>
              </template>

              <template v-if="question.type === 'matching'">
                <VCard variant="outlined" class="pa-4 mb-4 bg-grey-lighten-4">
                  <VRow v-for="item in question.matchItems" :key="item.id" align="center" class="mb-2">
                    <VCol cols="12" sm="6" class="text-body-1 font-weight-medium">
                      {{ item.id }}. {{ item.text }}
                    </VCol>
                    <VCol cols="12" sm="6">
                      <VSelect
                        v-model="answers[question.id][item.id]"
                        :items="question.matchTargets"
                        item-title="text"
                        item-value="id"
                        label="Выберите соответствие"
                        density="comfortable"
                        variant="outlined"
                        bg-color="white"
                        hide-details
                      >
                        <template v-slot:selection="{ item }">
                          <span class="font-weight-bold mr-2">{{ item.value }}.</span> {{ item.title }}
                        </template>
                        <template v-slot:item="{ props, item }">
                          <VListItem v-bind="props">
                            <template v-slot:title>
                              <span class="font-weight-bold mr-2">{{ item.value }}.</span> {{ item.title }}
                            </template>
                          </VListItem>
                        </template>
                      </VSelect>
                    </VCol>
                  </VRow>
                </VCard>
              </template>

              <template v-if="question.type === 'sequence'">
                <VCard variant="outlined" class="pa-4 mb-4 bg-grey-lighten-4">
                  <div class="text-caption mb-3 text-grey-darken-1">
                    Укажите порядковый номер. Цифры не должны повторяться.
                  </div>
                  <VRow v-for="option in question.options" :key="option.id" align="center" class="mb-2">
                    <VCol cols="8" class="text-body-1"> {{ option.id }}. {{ option.text }} </VCol>
                    <VCol cols="4">
                      <VSelect
                        v-model="answers[question.id][option.id]"
                        :items="getSequenceNumbers(question.options.length)"
                        label="Позиция"
                        density="compact"
                        variant="solo"
                        hide-details
                        @update:model-value="val => handleSequenceChange(question.id, option.id, val)"
                      ></VSelect>
                    </VCol>
                  </VRow>
                  <div class="mt-3 text-body-2 text-primary">
                    Ваша последовательность: <strong>{{ formatAnswer(answers[question.id]) }}</strong>
                  </div>
                </VCard>
              </template>

              <template v-if="question.type === 'open'">
                <VTextarea
                  v-model="answers[question.id]"
                  label="Введите ваш ответ"
                  variant="outlined"
                  color="primary"
                  auto-grow
                  rows="4"
                ></VTextarea>
              </template>

              <VExpandTransition>
                <VAlert v-if="showHint" type="info" variant="tonal" class="mt-4" title="Подсказка (Правильный ответ):">
                  {{ formatAnswer(question.correctAnswer) }}
                </VAlert>
              </VExpandTransition>
            </VWindowItem>
          </VWindow>
        </VCardText>

        <VDivider />

        <VCardActions class="pa-4 flex-wrap gap-2 justify-space-between">
          <VBtn
            variant="outlined"
            class="order-3 order-md-1"
            :class="mobile && 'w-100'"
            @click="prevStep"
            :disabled="currentStep === 0"
            >Назад</VBtn
          >

          <VBtn
            color="orange-darken-2"
            variant="text"
            class="order-1 order-md-2"
            :class="mobile && 'w-100'"
            :prepend-icon="mdiEyeOutline"
            @click="showHint = !showHint"
          >
            {{ showHint ? 'Скрыть ответ' : 'Показать ответ' }}
          </VBtn>

          <VBtn
            v-if="currentStep < questions.length - 1"
            class="order-3"
            :class="mobile && 'w-100'"
            color="primary"
            variant="flat"
            @click="nextStep"
          >
            Пропустить
          </VBtn>

          <VBtn
            v-if="currentStep < questions.length - 1"
            class="order-4"
            :class="mobile && 'w-100'"
            color="primary"
            variant="flat"
            @click="checkCurrentQuestion"
          >
            Далее
          </VBtn>

          <VBtn v-else color="success" variant="flat" @click="finishTest">Завершить</VBtn>
        </VCardActions>
      </template>
    </VCard>
  </VContainer>
</template>

<style scoped>
.gap-2 {
  gap: 8px;
}
</style>

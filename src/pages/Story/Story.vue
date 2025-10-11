<script setup>
import { mdiClose } from '@mdi/js'

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
        <VCard elevation="3" class="pa-6" id="story1">
          <h1 class="text-h4 font-weight-bold mb-3 text-center">Сюжет — Dying Light</h1>
          <p class="text-body-1">
            После внезапной вспышки неизвестного вируса город Харран оказался полностью изолирован от внешнего мира.
            Большинство жителей превратилось в заражённых — безжалостных существ, охотящихся на всё живое. Немногие
            выжившие укрываются в башнях и заброшенных зданиях, пытаясь наладить хоть подобие нормальной жизни.
          </p>
          <p class="text-body-1 mt-3">
            Игрок берёт на себя роль <strong>Кайла Крейна</strong> — агента Глобального Рельефного Эффекта (ГРЕ),
            направленного в карантинную зону с тайным заданием: найти бывшего сотрудника организации, укравшего важный
            файл. Однако, оказавшись внутри города, Крейн быстро понимает, что его миссия — лишь малая часть гораздо
            более масштабной и мрачной истории.
          </p>
          <p class="text-body-1 mt-3">
            Вступив в контакт с выжившими из <strong>Башни</strong>, он начинает помогать им, спасая людей, добывая
            лекарства и борясь с заражёнными. Постепенно он узнаёт, что ГРЕ скрывает правду, а его действия могут
            привести к гибели невинных. Между тем город контролирует <strong>Раис</strong> — безжалостный лидер банды,
            торгующий лекарством и держащий в страхе всех выживших.
          </p>
          <p class="text-body-1 mt-3">
            С каждым днём Харран всё глубже погружается в хаос. Днём — борьба за ресурсы и безопасность, ночью —
            господство мутировавших охотников, от которых невозможно спастись. Постепенно Крейн начинает понимать, что
            его настоящая задача — не выполнение приказов, а спасение людей, с которыми он подружился.
          </p>
          <p class="text-body-1 mt-3">
            В финале истории он принимает трудное решение: либо подчиниться ГРЕ и уничтожить доказательства, либо пойти
            против приказов, чтобы дать выжившим шанс. Этот выбор определяет судьбу Крейна и всего Харрана, став точкой
            невозврата для героя, прошедшего путь от наёмника до символа надежды.
          </p>
        </VCard>
      </VCol>
    </VRow>

    <VRow justify="center" class="mb-10" dense id="story2">
      <VCol cols="12" md="4" v-for="(item, index) in images" :key="index">
        <VCard elevation="2" class="pa-4">
          <VImg
            :src="item.src"
            height="250"
            cover
            class="rounded-lg mb-3"
            @click="openModal(item.src)"
            style="cursor: pointer"
          />
          <h3 class="text-h6 font-weight-medium mb-2">{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </VCard>
      </VCol>
    </VRow>

    <VRow justify="center" class="mb-10" id="story3">
      <VCol cols="12" md="8">
        <VCard elevation="2" class="pa-4">
          <h2 class="text-h6 font-weight-medium mb-3">Фракции выживших</h2>
          <VChipGroup v-model="selectedFaction" column>
            <VChip value="tower">Башня</VChip>
            <VChip value="rais">Банда Раиса</VChip>
            <VChip value="loner">Одиночки</VChip>
          </VChipGroup>
          <div class="mt-4">
            <template v-if="selectedFaction === 'tower'">
              <p>
                <strong>Башня</strong> — главный оплот выживших, расположенный в одном из самых высоких зданий Харрана.
                Здесь собрались люди, стремящиеся сохранить человечность и порядок в разрушенном мире.
              </p>
              <p>
                Внутри Башни поддерживается строгая дисциплина, есть распределение ресурсов и система заданий для
                разведчиков. Это место служит безопасным убежищем и центром помощи для всех, кто сумел добраться сюда
                живым.
              </p>
            </template>

            <template v-else-if="selectedFaction === 'rais'">
              <p>
                <strong>Банда Раиса</strong> — жестокая группировка, контролирующая часть города с помощью силы и
                страха. Её лидер, Раис, бывший военный, не гнушается насилием и диктует свои правила остальным выжившим.
              </p>
              <p>
                Члены банды занимаются вымогательством, торговлей и охотой на выживших. У них есть доступ к оружию и
                припасам, но за это приходится платить кровью и подчинением.
              </p>
            </template>

            <template v-else>
              <p>
                <strong>Одиночки</strong> — это выжившие, которые отказались присоединяться к Башне или подчиняться
                Раису. Они полагаются только на себя и действуют скрытно, избегая как заражённых, так и других людей.
              </p>
              <p>
                Среди них встречаются бывшие военные, инженеры и обычные жители, сумевшие адаптироваться к новым
                условиям. Одиночки часто обладают уникальными знаниями и снаряжением, но живут на грани выживания.
              </p>
            </template>
          </div>
        </VCard>
      </VCol>
    </VRow>

    <VRow justify="center" class="mb-10" id="story4">
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

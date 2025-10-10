<script setup>
import { ref } from 'vue'

const selectedAspect = ref('daynight')
</script>

<template>
  <VContainer fluid class="pa-6 bg-grey-lighten-4">
    <VRow justify="center" class="mb-8">
      <VCol cols="12" md="8">
        <VCard elevation="3" class="pa-6">
          <h1 class="text-h4 font-weight-bold mb-3 text-center">Геймплей — Dying Light</h1>
          <p class="text-body-1">
            Геймплей Dying Light сочетает элементы паркура, выживания и боя с заражёнными в открытом мире. Игроку
            предстоит исследовать разрушенный город Харран, выполняя задания, спасая выживших и сражаясь с ордами
            мутировавших противников.
          </p>
          <p class="text-body-1 mt-3">
            Центральной особенностью игры является система смены дня и ночи, которая радикально меняет стиль
            прохождения. Днём игрок собирает ресурсы, крафтит оружие и исследует территорию, а ночью превращается в
            охотника, скрывающегося от смертоносных тварей.
          </p>
          <p class="text-body-1 mt-3">
            Система паркура — ключевая часть игрового процесса. Крейн может лазить по зданиям, прыгать между крышами и
            использовать окружение для спасения или атаки. Свобода перемещения делает каждый забег уникальным и
            позволяет строить собственные тактики выживания.
          </p>
        </VCard>
      </VCol>
    </VRow>

    <VRow justify="center" class="mb-10">
      <VCol cols="12" md="8">
        <VCard elevation="2" class="pa-4">
          <h2 class="text-h6 font-weight-medium mb-3">Основные механики</h2>
          <VChipGroup v-model="selectedAspect" column>
            <VChip value="daynight">День и ночь</VChip>
            <VChip value="parkour">Паркур</VChip>
            <VChip value="combat">Система боя</VChip>
            <VChip value="craft">Крафт и оружие</VChip>
            <VChip value="coop">Кооператив</VChip>
          </VChipGroup>

          <div class="mt-4">
            <template v-if="selectedAspect === 'daynight'">
              <p>
                Смена дня и ночи — основа атмосферы Dying Light. Днём игроки чувствуют относительную безопасность,
                исследуют город и сражаются с медленными заражёнными. Но с заходом солнца появляются волатилы — быстрые
                и смертоносные мутанты, превращающие игру в настоящий кошмар.
              </p>
            </template>

            <template v-else-if="selectedAspect === 'parkour'">
              <p>
                Паркур делает передвижение по Харрану динамичным и захватывающим. Игрок может цепляться за уступы,
                перелезать через препятствия, карабкаться на здания и использовать импровизированные маршруты для
                спасения или нападения.
              </p>
            </template>

            <template v-else-if="selectedAspect === 'combat'">
              <p>
                Боевая система строится на ближнем бое и реалистичной физике ударов. Оружие ломается, поэтому приходится
                постоянно искать или крафтить новое. Комбинация ударов, уклонений и добиваний позволяет побеждать даже в
                неравных схватках.
              </p>
            </template>

            <template v-else-if="selectedAspect === 'craft'">
              <p>
                Крафт — важная часть выживания. Игрок может создавать ножи, дубинки, взрывчатку, аптечки и многое
                другое, используя найденные материалы. Оружие можно модифицировать, добавляя электрические, огненные и
                токсичные эффекты.
              </p>
            </template>

            <template v-else>
              <p>
                Dying Light поддерживает кооперативный режим до четырёх игроков. Совместные вылазки делают игру ещё
                более увлекательной — можно делиться ресурсами, выполнять миссии вместе и спасать друг друга из сложных
                ситуаций.
              </p>
            </template>
          </div>
        </VCard>
      </VCol>
    </VRow>

    <VRow justify="center" class="mb-10">
      <VCol cols="12" md="8">
        <h2 class="text-h6 font-weight-medium mb-4 text-center">Развитие персонажа</h2>
        <VCard elevation="2" class="pa-4">
          <p class="text-body-1">
            По мере прохождения Крейн получает опыт за выполнение заданий, убийство врагов и акробатические трюки. Очки
            опыта распределяются между тремя ветками: <strong>Выживание</strong>, <strong>Ловкость</strong> и
            <strong>Сила</strong>.
          </p>
          <p class="text-body-1 mt-3">
            Выживание отвечает за создание предметов и развитие выносливости, Ловкость — за паркур и скорость, а Сила —
            за владение оружием и боевые способности. Такая система прокачки позволяет адаптировать стиль игры под себя.
          </p>
        </VCard>
      </VCol>
    </VRow>

    <VRow justify="center" class="mb-10">
      <VCol cols="12" md="8">
        <h2 class="text-h6 font-weight-medium mb-4 text-center">Этапы выживания</h2>
        <VTimeline side="end">
          <VTimelineItem dot-color="orange">Начало — первые вылазки и обучение паркуру</VTimelineItem>
          <VTimelineItem dot-color="blue">Освоение города и открытие крафта</VTimelineItem>
          <VTimelineItem dot-color="purple">Борьба с заражёнными ночью</VTimelineItem>
          <VTimelineItem dot-color="green">Становление опытным выжившим</VTimelineItem>
        </VTimeline>
      </VCol>
    </VRow>
  </VContainer>
</template>

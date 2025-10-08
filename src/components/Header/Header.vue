<script setup>
import { ref } from 'vue'
import { menuItems as originalMenuItems } from './constant'
import { RouterLink } from 'vue-router'
import logo from './assets/logo.png'

const drawer = ref(false)

// создаём локальную копию menuItems, чтобы можно было добавлять реактивные состояния
const menuItems = ref(
  originalMenuItems.map(item => ({
    ...item,
    open: false
  }))
)

// переключает раскрытие конкретного меню
const toggleGroup = clickedItem => {
  menuItems.value.forEach(item => {
    if (item === clickedItem) {
      item.open = !item.open
    } else {
      item.open = false
    }
  })
}
</script>

<template>
  <VAppBar fixed color="rgba(0,0,0,0.8)" elevate-on-scroll>
    <VToolbarTitle>
      <VImg :src="logo" max-width="120" contain />
    </VToolbarTitle>

    <VSpacer />

    <VAppBarNavIcon class="d-md-none" color="orange" @click="drawer = !drawer" />

    <div class="d-none d-md-flex align-center pr-10">
      <template v-for="(item, index) in menuItems">
        <div v-if="index !== 0" class="mx-2" style="width: 1px; background-color: #d9c9b1; height: 24px"></div>

        <VMenu
          v-if="item.subItems && item.subItems.length"
          open-on-hover
          offset-y
          :close-on-content-click="false"
          :nudge-width="200"
        >
          <template v-slot:activator="{ props, on }">
            <RouterLink :to="item.link">
              <VBtn v-bind="props" v-on="on" text class="text-white">
                {{ item.name }}
              </VBtn>
            </RouterLink>
          </template>

          <VList class="bg-black">
            <VListItem
              v-for="subItem in item.subItems"
              :key="subItem.name"
              :to="{ path: item.link, query: { scroll: subItem.link } }"
              router
              class="text-warning-lighten2"
            >
              {{ subItem.name }}
            </VListItem>
          </VList>
        </VMenu>

        <RouterLink v-else :to="item.link">
          <VBtn text class="text-white">{{ item.name }}</VBtn>
        </RouterLink>
      </template>
    </div>
  </VAppBar>

  <VNavigationDrawer v-model="drawer" temporary location="end" color="black" class="d-md-none" height="100%">
    <VList dense nav style="max-height: 100vh; overflow-y: auto">
      <template v-for="item in menuItems" :key="item.name">
        <VListGroup v-if="item.subItems && item.subItems.length" v-model="item.open" no-action>
          <template #activator="{ props }">
            <VListItem v-bind="props" @click="toggleGroup(item)">
              <VListItemTitle class="text-white">{{ item.name }}</VListItemTitle>
            </VListItem>
          </template>

          <!-- Первый подпункт — основная ссылка -->
          <VListItem :to="item.link" router dense @click="drawer = false">
            <VListItemTitle class="text-warning-lighten2">{{ item.name }}</VListItemTitle>
          </VListItem>

          <!-- Остальные подпункты -->
          <VListItem
            v-for="subItem in item.subItems"
            :key="subItem.name"
            :to="{ path: item.link, query: { scroll: subItem.link } }"
            router
            dense
            @click="drawer = false"
          >
            <VListItemTitle class="text-warning-lighten2">{{ subItem.name }}</VListItemTitle>
          </VListItem>
        </VListGroup>

        <!-- Простые пункты -->
        <VListItem v-else :to="item.link" router dense @click="drawer = false">
          <VListItemTitle class="text-white">{{ item.name }}</VListItemTitle>
        </VListItem>
      </template>
    </VList>
  </VNavigationDrawer>
</template>

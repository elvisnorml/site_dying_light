<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, watch, nextTick } from 'vue'
import { menuItems as originalMenuItems } from './constant'
import logo from './assets/logo.png'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
const drawer = ref(false)
const openedGroups = ref([])

const menuItems = ref(
  originalMenuItems.map(item => ({
    ...item,
    open: false
  }))
)

const toggleGroup = clickedItem => {
  menuItems.value.forEach(item => {
    item.open = item === clickedItem
  })
}

const route = useRoute()

const scrollToSection = async id => {
  if (!id) return
  await nextTick()
  const el = document.getElementById(id)
  if (!el) return

  const elementPosition = el.getBoundingClientRect().top + window.scrollY
  const offsetPosition = elementPosition - 80

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

const openGroup = hoveredItem => {
  menuItems.value.forEach(item => {
    item.open = item === hoveredItem
  })
}

const closeAll = () => {
  menuItems.value.forEach(item => {
    item.open = false
  })
}

onMounted(() => scrollToSection(route.query.scroll))

watch(
  () => route.query.scroll,
  id => scrollToSection(id)
)

watch(drawer, val => {
  if (!val) openedGroups.value = []
})
</script>

<template>
  <VAppBar fixed color="rgba(0,0,0,0.8)" elevate-on-scroll>
    <VToolbarTitle>
      <RouterLink :to="'/'">
        <VImg :src="logo" max-width="120" contain />
      </RouterLink>
    </VToolbarTitle>

    <VSpacer />

    <VAppBarNavIcon class="d-md-none" color="orange" @click="drawer = !drawer" />

    <div v-if="mdAndUp" class="d-none d-md-flex align-center pr-10">
      <template v-for="(item, index) in menuItems">
        <div v-if="index !== 0" class="mx-2" style="width: 1px; background-color: #d9c9b1; height: 24px"></div>

        <VMenu v-if="item.subItems && item.subItems.length" v-model="item.open" offset-y :nudge-width="200">
          <template #activator="{ props }">
            <VBtn
              v-bind="props"
              text
              class="text-white"
              @click.prevent="$router.push(item.link)"
              @mouseenter="openGroup(item)"
            >
              {{ item.name }}
            </VBtn>
          </template>

          <VList class="bg-black" @mouseleave="item.open = false">
            <VListItem
              v-for="subItem in item.subItems"
              :key="subItem.name"
              @click="($router.push({ path: item.link, query: { scroll: subItem.link } }), (item.open = false))"
              class="text-warning-lighten2"
            >
              {{ subItem.name }}
            </VListItem>
          </VList>
        </VMenu>

        <VBtn v-else text class="text-white" @click.prevent="$router.push(item.link)" @mouseenter="closeAll">
          {{ item.name }}
        </VBtn>
      </template>
    </div>
  </VAppBar>

  <VNavigationDrawer v-model="drawer" temporary location="end" color="black" class="d-md-none" height="100%">
    <VList dense nav style="max-height: 100vh; overflow-y: auto" v-model:opened="openedGroups">
      <template v-for="item in menuItems" :key="item.name">
        <VListGroup v-if="item.subItems && item.subItems.length" v-model="item.open" no-action>
          <template #activator="{ props }">
            <VListItem v-bind="props" @click="toggleGroup(item)">
              <VListItemTitle class="text-white">{{ item.name }}</VListItemTitle>
            </VListItem>
          </template>

          <VListItem
            v-for="subItem in item.subItems"
            :key="subItem.name"
            @click="($router.push({ path: item.link, query: { scroll: subItem.link } }), (drawer = false))"
            router
            dense
          >
            <VListItemTitle class="text-warning-lighten2">{{ subItem.name }}</VListItemTitle>
          </VListItem>
        </VListGroup>

        <VListItem v-else @click.prevent="($router.push(item.link), (drawer = false))" router dense>
          <VListItemTitle class="text-white">{{ item.name }}</VListItemTitle>
        </VListItem>
      </template>
    </VList>
  </VNavigationDrawer>
</template>

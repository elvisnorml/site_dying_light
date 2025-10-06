<script setup>
import { menuItems } from './constant'
import { RouterLink } from 'vue-router'
import logo from './assets/logo.png'
</script>

<template>
  <VAppBar fixed color="rgba(0,0,0,0.8)" elevate-on-scroll>
    <VToolbarTitle>
      <VImg :src="logo" max-width="120" contain />
    </VToolbarTitle>

    <VSpacer />

    <div class="d-flex align-center pr-10">
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
              :to="subItem.link"
              router
              class="text-warning-lighten2"
            >
              {{ subItem.name }}
            </VListItem>
          </VList>
        </VMenu>

        <RouterLink v-else :to="item.link">
          <VBtn v-bind="props" text class="text-white">
            {{ item.name }}
          </VBtn>
        </RouterLink>
      </template>
    </div>
  </VAppBar>
</template>

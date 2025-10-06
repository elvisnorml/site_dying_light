<script setup>
import { menuItems } from './constant'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <VMenu open-on-hover v-for="item in menuItems" :key="item.name">
      <template v-slot:activator="{ props }">
        <VBtn color="primary" v-bind="props" :to="item.link"> {{ item.name }} </VBtn>
      </template>
      <VList>
        <VListItem v-for="subItem in item.subItems" :key="subItem.name" :value="index">
          <RouterLink :to="subItem.link">{{ subItem.name }}</RouterLink>
        </VListItem>
      </VList>
    </VMenu>
  </header>
</template>

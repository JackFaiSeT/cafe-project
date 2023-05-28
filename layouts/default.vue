<template>
  <v-layout>
    <template #page-header>
      <BlockHeader />
    </template>
    <template #page-content>
      <layout-blocks />
      <NuxtPage />
    </template>
    <template #page-footer>
      <!-- <BlockFooter /> -->
    </template>
  </v-layout>
</template>

<script setup>
import BlockHeader from '@/components/BlockHeader.vue'
// import BlockFooter from '@/components/BlockFooter.vue'
import LayoutBlocks from '@/components/LayoutBlocks.vue'
</script>

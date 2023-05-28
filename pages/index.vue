<template>
  <div>
    <section-banner-carousel v-bind="bannersData" />
    <section-products v-bind="productsСoldSnacksData" />
    <section-products v-bind="productsHotSnacksData" />
    <section-products v-bind="productsMeetData" />
  </div>
</template>

<script setup>
import SectionBannerCarousel from '@/views/SectionBannerCarousel.vue'
import SectionProducts from '@/views/SectionProducts.vue'

const root = useNuxtApp()
const { products: productsEnum, banners: bannersEnum } = root.$configs.enums

const bannersData = ref({
  dataSettings: {
    needSlider: true,
    bannersArea: bannersEnum.main.code
  }
})

const productsСoldSnacksData = ref({
  sectionSettings: {
    title: 'Холодные закуски'
  },
  dataSettings: {
    needSlider: true,
    productsCode: productsEnum.cold.code
  }
})

const productsHotSnacksData = ref({
  sectionSettings: {
    title: 'Горячие закуски'
  },
  dataSettings: {
    needSlider: true,
    productsCode: productsEnum.hot.code
  }
})

const productsMeetData = ref({
  sectionSettings: {
    title: 'Мясные блюда'
  },
  dataSettings: {
    needSlider: true,
    productsCode: productsEnum.meet.code
  }
})
</script>

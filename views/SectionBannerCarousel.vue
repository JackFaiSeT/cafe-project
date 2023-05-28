<template>
  <section :is-full="true" class="section-banner-carousel">
    <block-banner-carousel-list :list="banners" :loading="pending" />
  </section>
</template>

<script setup>
import BlockBannerCarouselList from '@/components/BannerCarousel/BlockBannerCarouselList.vue'

const props = defineProps({
  dataSettings: {
    type: Object,
    default: () => ({})
  }
})

const root = useNuxtApp()
const { banner: bannerService } = root.$services

const bannersArea = ref(props.dataSettings.bannersArea)

const { data: banners, pending } = useAsyncData(`banners-${bannersArea.value}`, () => {
  return bannerService.getBanners({ area: bannersArea.value })
})
</script>

<style lang="scss" scoped>
.section-banner-carousel {
  position: relative;
  overflow-x: hidden;
}
</style>

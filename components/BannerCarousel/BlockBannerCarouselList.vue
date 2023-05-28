<template>
  <div class="slider-wrapper">
    <component
      :is="needSlider && !loading ? 'v-slider' : 'div'"
      class="circle-slider"
      :slider-settings="sliderSettings"
      :need-slider="needSlider"
      :active-index="activeIndex"
      @slide-change="(newIndex) => (activeIndex = newIndex)"
    >
      <div :is-wrap="false" :class="{ 'slider swiper-wrapper': needSlider }">
        <template v-if="loading">
          <div v-for="(item, index) in 4" :key="index" :class="{ 'swiper-slide': needSlider }">
            <div class="image-skeleton" />
          </div>
        </template>
        <template v-else>
          <div v-for="item in list" :key="item.id" :class="{ 'swiper-slide': needSlider }">
            <block-banner-carousel-item v-bind="item" />
          </div>
        </template>
      </div>
    </component>
    <div v-if="!loading" class="pagination-list">
      <button
        v-for="(item, index) in 4"
        :key="item"
        type="button"
        class="pagination-list__item"
        :class="{ active: activeIndex === index }"
        @click="activeIndex = index"
      />
    </div>
  </div>
</template>

<script setup>
import BlockBannerCarouselItem from '@/components/BannerCarousel/BlockBannerCarouselItem.vue'

defineProps({
  sliderSettings: {
    type: Object,
    default: () => ({
      slidesPerView: 'auto',
      loop: false,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      }
    })
  },
  needSlider: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  list: { type: Array, default: () => [] }
})

const activeIndex = ref(0)
</script>

<style lang="scss" scoped>
$white: $WHITE;

.slider-wrapper {
  position: relative;
}

.pagination-list {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  display: flex;
  column-gap: 1rem;
  transform: translateX(-50%);

  &__item {
    width: 2rem;
    height: 2rem;
    border: 0.1rem solid $white;
    border-radius: 50%;
    cursor: pointer;

    &:not(.active) {
      background-color: transparent;
    }

    @include hover {
      transition: background-color 0.3s ease;

      &:hover {
        background-color: rgba($white, 50%);
      }
    }

    &.active {
      background-color: $white;
    }
  }
}
</style>

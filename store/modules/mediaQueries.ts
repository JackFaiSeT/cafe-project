import { defineStore } from 'pinia'
import { ref, computed, onMounted, onUnmounted } from 'vue'

// eslint-disable-next-line import/prefer-default-export
export const useMediaQueriesStore = defineStore('mediaQueries', () => {
  const isDesktopData = ref(false)
  const isTabletData = ref(false)
  const isTabletDesktopData = ref(false)
  const isMobileData = ref(false)
  const isMobileTabletData = ref(false)

  const checkQueries = () => {
    const width = window.innerWidth
    isDesktopData.value = width >= 1024
    isTabletData.value = width >= 768 && width <= 1023
    isTabletDesktopData.value = width >= 768
    isMobileData.value = width <= 767
    isMobileTabletData.value = width <= 1023
  }

  onMounted(() => {
    checkQueries()
    window.addEventListener('resize', checkQueries)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkQueries)
  })

  const isDesktop = computed(() => isDesktopData.value)
  const isTablet = computed(() => isTabletData.value)
  const isTabletDesktop = computed(() => isTabletDesktopData.value)
  const isMobile = computed(() => isMobileData.value)
  const isMobileTablet = computed(() => isMobileTabletData.value)

  return {
    isDesktop,
    isTablet,
    isTabletDesktop,
    isMobile,
    isMobileTablet
  }
})

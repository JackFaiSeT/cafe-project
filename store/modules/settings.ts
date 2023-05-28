import { defineStore } from 'pinia'
import { ref } from 'vue'

// eslint-disable-next-line import/prefer-default-export
export const useSettingsStore = defineStore('settings', () => {
  const freeDeliveryPrice = ref(5000)
  const minimalDeliveryPrice = ref(1000)

  return {
    freeDeliveryPrice,
    minimalDeliveryPrice
  }
})

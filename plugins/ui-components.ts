import VIcon from '@/components/UI/VIcon.vue'
import VSlider from '@/components/UI/VSlider.vue'

export default defineNuxtPlugin((context) => {
  context.vueApp.component('VSlider', VSlider)
  context.vueApp.component('VIcon', VIcon)
})

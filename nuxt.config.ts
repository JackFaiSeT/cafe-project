export default defineNuxtConfig({
  target: 'server',
  store: true,
  ssr: true,
  app: {
    pageTransition: { name: 'page' },
    layoutTransition: { name: 'layout' }
  },
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.API_BASE_URL,
      nodeEnv: process.env.NODE_ENV
    }
  },
  head: {
    title: 'cafe-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'robots',
        content: process.env.NODE_ENV === 'development' ? 'noindex, nofollow' : 'all'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/global/colors.scss";
            @import "@/assets/styles/global/vars.scss";
            @import "@/assets/styles/global/mixins.scss";
          `
        }
      }
    }
  },
  css: [{ src: '~/assets/styles/index.scss', lang: 'scss' }],
  modules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/eslint-module',
    'nuxt-icons',
    ['@pinia/nuxt', { disableVuex: false }],
    'nuxt-lazy-load'
  ],
  lazyLoad: {
    loadingClass: 'isImageLoading',
    directiveOnly: true
  }
})

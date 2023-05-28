export default defineNuxtPlugin((nuxtApp: any) => {
  // eslint-disable-next-line no-param-reassign
  nuxtApp.$router.options.scrollBehavior = async (to: any, from: any, savedPosition: any) => {
    if (savedPosition) {
      return savedPosition
    }

    const findEl = async (hash: any, x: any) => {
      const element = document.querySelector(hash)

      return (
        element ||
        // eslint-disable-next-line consistent-return
        new Promise<void>((resolve) => {
          if (x > 50) {
            // eslint-disable-next-line no-promise-executor-return
            return resolve()
          }
          setTimeout(() => {
            // eslint-disable-next-line no-plusplus, no-param-reassign
            resolve(findEl(hash, ++x || 1))
          }, 100)
        })
      )
    }

    if (to.hash) {
      const element = await findEl(to.hash, 1)
      return window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
    }

    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

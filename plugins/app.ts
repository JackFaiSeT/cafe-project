import setAdapters from '@/adapters/index.ts'
import setConfigs from '@/config/index.ts'
import setApi from '@/api/index.ts'
import setServices from '@/services/index.ts'

export default defineNuxtPlugin(async (context: Context) => {
  setAdapters(context)
  setConfigs(context)
  setApi(context)
  setServices(context)

  // await context.$services.auth.checkAuth()
})

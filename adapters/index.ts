import BannerAdapter from '@/adapters/modules/BannerAdapter.ts'
import ProductAdapter from '@/adapters/modules/ProductAdapter.ts'

const adaptersList = [BannerAdapter, ProductAdapter]

export default (context: any) => {
  class AdaptersLocator {}
  context.$adapters = new AdaptersLocator()
  adaptersList.forEach((fn) => fn(context))
}

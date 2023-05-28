import ProductMethods from '@/api/modules/ProductMethods.ts'
import BannerMethods from '@/api/modules/BannerMethods.ts'

const apiList = [ProductMethods, BannerMethods]

export default (context: any) => {
  class ApiLocator {}
  context.$api = new ApiLocator()
  apiList.forEach((fn) => fn(context))
}

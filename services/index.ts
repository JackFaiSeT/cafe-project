import ApiClientService from '@/services/modules/ApiClientService.ts'
import CartService from '@/services/modules/CartService.ts'
import ProductService from '@/services/modules/ProductService.ts'
import BannerService from '@/services/modules/BannerService.ts'

const servicesList = [ApiClientService, ProductService, BannerService, CartService]

export default (context: any) => {
  class ServicesLocator {}
  context.$services = new ServicesLocator()
  servicesList.forEach((fn) => fn(context))
}

import { filename } from 'pathe/utils'
import { ProductFromServer } from '@/types/Products.ts'

const imagesGlobal = import.meta.glob('@/assets/images/products/fake/*', { eager: true })
const images = Object.fromEntries(Object.entries(imagesGlobal).map(([key, value]) => [filename(key), value.default]))

export default (context: any = {}) => {
  class ProductAdapter {
    getProduct(product: ProductFromServer) {
      const { id, title, weight, description, image, price } = product

      return {
        id,
        title,
        weight,
        description,
        price,
        image: {
          src: images[image],
          alt: title
        }
      }
    }

    getProducts(products: Array<ProductFromServer>) {
      return products.map(this.getProduct)
    }
  }
  context.$adapters.product = new ProductAdapter()
}

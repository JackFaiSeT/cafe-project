import { Product } from '@/types/Products.ts'

export default (context: any) => {
  class ProductService {
    private static productMethods = context.$api.product

    private static productAdapter = context.$adapters.product

    // TODO: refactor by normal store
    private static products: any = {}

    setProducts(code: string, products: Product[]) {
      if (!ProductService.products[code]) {
        ProductService.products[code] = products
      }
    }

    async getProductsForPreview(params: any = {}) {
      const result =
        (await ProductService.productMethods.getProducts({
          ...params,
          _limit: 10
        })) || []

      if (!result.length) return []

      const mappedResult = ProductService.productAdapter.getProducts(result)

      this.setProducts(params.code, mappedResult)

      return mappedResult
    }

    async getProductById(id = -1) {
      let products: Array<Product> = []
      const productsInStorage: Array<Product> = JSON.parse(localStorage.getItem('cart')) || []

      if (productsInStorage.length) {
        const product = productsInStorage.find((productInStorage: Product) => productInStorage.id === id)

        if (product?.id) {
          return product
        }
      }

      const existProducts: Array<Array<Product>> = Object.values(ProductService.products)

      existProducts.forEach((item) => {
        products = products.concat(item)
      })

      return products.find((product) => product.id === id) || {}
    }
  }

  context.$services.product = new ProductService()
}

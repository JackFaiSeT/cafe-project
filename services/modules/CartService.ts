import { useCartStore } from '@/store/modules/cart.ts'

export default (context: any) => {
  const cartStore = useCartStore()
  class CartService {
    private static cartMethods = context.$api.cart

    private static productService = context.$services.product

    async addToCart(id = -1) {
      const { setCartItem } = cartStore

      const product = await CartService.productService.getProductById(id)

      if (product?.id !== -1) {
        setCartItem(product)
      }
    }

    async removeFromCart(id = -1) {
      const { deleteCartItem } = cartStore
      const product = await CartService.productService.getProductById(id)

      if (product.id) {
        deleteCartItem(product)
      }
    }

    async clearAllOfProduct(id = -1) {
      const { deleteCartItem } = cartStore

      const product = await CartService.productService.getProductById(id)

      deleteCartItem(product, true)
    }
  }

  context.$services.cart = new CartService()
}

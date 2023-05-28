import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { Product } from '@/types/Products.ts'

// TODO: Take it out to helpers
const findItem = (array = [], item: any = {}, prop = '') => {
  return array.find((cartItem: any) => cartItem[prop] === item[prop])
}

const findItemIndex = (array = [], item: any = {}, prop = '') => {
  return array.findIndex((cartItem: any) => cartItem[prop] === item[prop])
}

const emptyProduct: Product = {
  id: -1,
  title: '',
  weight: 0,
  description: '',
  price: 0,
  code: '',
  count: 0,
  image: {
    src: '',
    alt: ''
  }
}

// eslint-disable-next-line import/prefer-default-export
export const useCartStore = defineStore('cart', () => {
  const cartState = ref(process.client ? JSON.parse(localStorage.getItem('cart')) || [] : [])

  const cart = computed(() => cartState.value)

  const finalPrice = computed(() => {
    return cartState.value.reduce((a: number, b: Product) => a + b.count * b.price, 0) || 0
  })

  const cartItemsCount = computed(() => {
    return cartState.value.reduce((a: number, b: Product) => a + b.count, 0) || 0
  })

  const setCartItem = (item: Product) => {
    const cartItem: Product = findItem(cartState.value, item, 'id') || emptyProduct
    const cartStorage = JSON.parse(localStorage.getItem('cart')) || []

    const cartStorageItem: Product = findItem(cartStorage, item, 'id') || emptyProduct

    if (cartItem?.id !== -1) {
      cartItem.count = cartItem.count || 0
      cartItem.count += 1
    } else {
      cartState.value.push({ ...item, count: 1 })
    }

    if (cartStorageItem?.id !== -1) {
      cartStorageItem.count = cartStorageItem.count || 0
      cartStorageItem.count += 1
    } else {
      cartStorage.push({ ...item, count: 1 })
    }

    localStorage.setItem('cart', JSON.stringify(cartStorage))
  }

  const deleteCartItem = (item = {}, isAll = false) => {
    const cartItem: Product = findItem(cartState.value, item, 'id') || emptyProduct
    const cartStorage = JSON.parse(localStorage.getItem('cart')) || []
    const cartStorageItem: Product = findItem(cartStorage, item, 'id') || emptyProduct

    if (isAll) {
      const cartItemIndex = findItemIndex(cartState.value, item, 'id')
      const cartItemStorageIndex = findItemIndex(cartStorage, cartStorageItem, 'id')

      if (cartItemIndex !== -1) {
        cartState.value.splice(cartItemIndex, 1)
      }

      if (cartItemStorageIndex !== -1) {
        cartStorage.splice(cartItemStorageIndex, 1)
      }

      localStorage.setItem('cart', JSON.stringify(cartStorage))
      return
    }

    if (cartItem?.id !== -1 && cartItem.count > 1) {
      cartItem.count = cartItem.count || 0
      cartItem.count -= 1
    } else {
      const cartItemIndex = findItemIndex(cartState.value, cartItem, 'id')

      if (cartItemIndex !== -1) {
        cartState.value.splice(cartItemIndex, 1)
      }
    }

    if (cartStorageItem?.id !== -1 && cartStorageItem.count > 1) {
      cartStorageItem.count = cartStorageItem.count || 0
      cartStorageItem.count -= 1
    } else {
      const cartItemIndex = findItemIndex(cartStorage, cartStorageItem, 'id')

      if (cartItemIndex !== -1) {
        cartStorage.splice(cartItemIndex, 1)
      }
    }

    localStorage.setItem('cart', JSON.stringify(cartStorage))
  }

  return {
    cart,
    cartItemsCount,
    finalPrice,
    setCartItem,
    deleteCartItem
  }
})

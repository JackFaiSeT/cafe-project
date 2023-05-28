export interface ProductFromServer {
  id: number
  title: string
  weight: number
  description: string
  price: number
  image: string
}

// TODO: Check why dont work with nuxt

// export interface Product extends Omit<ProductFromServer, 'image'> {
//   image: {
//     src: string
//     alt: string
//   }
// }

export interface Product {
  id: number
  title: string
  weight: number
  description: string
  price: number
  code: string
  count: number
  image: {
    src: string
    alt: string
  }
}

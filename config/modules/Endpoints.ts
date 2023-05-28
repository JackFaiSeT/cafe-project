export default (ctx: any) => {
  const endpoints = {
    product: {
      getProducts: (params = {}) => ({ url: '/products', method: 'GET', params })
    },
    banner: {
      getBanners: (params = {}) => ({ url: '/banners', method: 'GET', params })
    }
  }

  ctx.$configs.endpoints = endpoints
}

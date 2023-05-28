export default (ctx: any) => {
  const enums = {
    products: {
      cold: {
        code: 'cold'
      },
      hot: {
        code: 'hot'
      },
      meet: {
        code: 'meet'
      }
    },
    banners: {
      main: {
        code: 'main'
      }
    }
  } as const

  ctx.$configs.enums = enums
}

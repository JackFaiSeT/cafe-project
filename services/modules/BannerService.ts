export default (context: any) => {
  class BannerService {
    private static bannerMethods = context.$api.banner

    private static bannerAdapters = context.$adapters.banner

    async getBanners(params = {}) {
      const result = await BannerService.bannerMethods.getBanners(params)
      return BannerService.bannerAdapters.getBanners(result)
    }
  }

  context.$services.banner = new BannerService()
}

import { filename } from 'pathe/utils'
import { BannerFromServer } from '@/types/Banners.ts'

const imagesGlobal = import.meta.glob('@/assets/images/banners/fake/*', { eager: true })
const images = Object.fromEntries(Object.entries(imagesGlobal).map(([key, value]) => [filename(key), value.default]))

export default (context: any = {}) => {
  class BannerAdapter {
    getBanner(banner: BannerFromServer) {
      const { id, image } = banner

      return {
        id,
        image: {
          src: images[image],
          alt: ''
        }
      }
    }

    getBanners(banners: Array<BannerFromServer>) {
      return banners.map(this.getBanner)
    }
  }
  context.$adapters.banner = new BannerAdapter()
}

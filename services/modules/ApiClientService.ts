/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import AxiosService from '@/services/modules/apiServices/UseFetchService'

class APIClient {
  client: any

  context: any

  constructor(client: any, context: any) {
    this.client = client
    this.context = context
  }

  async request(data = {}) {
    return this.client.request(data)
  }

  setAuthorizationToken(token = '') {
    this.client.setAuthorizationToken(token)
  }
}

export default (context: any) => {
  context.$services.useAPI = new APIClient(AxiosService(context), context)
}

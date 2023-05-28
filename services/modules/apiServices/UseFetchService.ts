export default ({ $config }: any) => {
  class UseFetchService {
    private static token = ''

    async request({ config = {}, body = {} }) {
      try {
        const { url, options } = { ...UseFetchService.prepareRequest({ config, body }) }
        return await $fetch(url, options)
      } catch (error: any) {
        console.log(error)
        // throw error
      }
      return {}
    }

    private static prepareRequest({
      config = {
        url: '',
        method: '',
        params: {},
        headers: {}
      },
      body = {
        _token: ''
      }
    }: {
      config: any
      body: any
    }) {
      const { url = '', method = '', params = {}, headers = {}, customServer = '' } = config
      const result = {
        method,
        params,
        headers: {
          'Content-Type': 'application/vnd.api+json',
          accept: 'application/vnd.api+json'
        },
        processData: false,
        contentType: false
      }
      if (Object.values(body).length) {
        result.body = body
      }

      if (UseFetchService.token) {
        result.headers.authorization = `Bearer ${UseFetchService.token}`
      }

      const headersResult = Object.values(headers).length ? Object.assign(headers, result.headers) : result.headers
      result.headers = headersResult

      return {
        url: customServer || `${$config.public.baseApiUrl}${url}`,
        options: result
      }
    }

    setAuthorizationToken(token = '') {
      UseFetchService.token = token
    }
  }
  return new UseFetchService()
}

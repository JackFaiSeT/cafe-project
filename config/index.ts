import Endpoints from '@/config/modules/Endpoints.ts'
import ErrorsPage from '@/config/modules/ErrorsPage.ts'
import Enums from '@/config/modules/Enums.ts'

const configsList = [Endpoints, ErrorsPage, Enums]

export default (context: any) => {
  class ConfigsLocator {}
  context.$configs = new ConfigsLocator()
  configsList.forEach((fn) => fn(context))
}

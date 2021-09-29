import { kit, registerComponents } from './index'

export default {
  install (Vue) {
    registerComponents(Vue)
    Vue.$kit = kit
    Vue.prototype.$kit = kit
  }
}

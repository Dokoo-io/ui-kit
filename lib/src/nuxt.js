import { kit, registerComponents } from './index'
import Vue from 'vue'

export default (_, inject) => {
  registerComponents(Vue)
  inject('kit', kit)
}

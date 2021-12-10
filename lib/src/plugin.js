import { kit, registerComponents } from './index';
import './highlight-themes/github-dark-dimmed.css'
import hljs from "highlight.js/lib/core";
import vuePlugin from "@highlightjs/vue-plugin";
import javascript from 'highlight.js/lib/languages/javascript';


export default {
  install (Vue) {
    hljs.registerLanguage('javascript', javascript)
    Vue.use(vuePlugin)
    registerComponents(Vue)
    Vue.$kit = kit
    Vue.prototype.$kit = kit
  }
}

import { kit, registerComponents } from './index'
import Vue from 'vue'
import './highlight-themes/github-dark-dimmed.css'
import hljs from "highlight.js/lib/core";
import vuePlugin from "@highlightjs/vue-plugin";
import javascript from 'highlight.js/lib/languages/javascript';

export default (_, inject) => {
  hljs.registerLanguage('javascript', javascript)
  Vue.use(vuePlugin)
  registerComponents(Vue)
  inject('kit', kit)
}

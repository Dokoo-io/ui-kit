import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import UiKit from '@dokoo/ui-kit'

Vue.use(UiKit)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

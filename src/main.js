import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request'
import messageVue from './components/message/index'

import '@/styles/markdown'
import '@/styles/base'

Vue.config.productionTip = false

Vue.prototype.$axios = request
Vue.use(messageVue)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import request from './config/request'
import messageVue from './components/message/index'
import directives from './directives/directive'

Vue.config.productionTip = false
Vue.prototype.$axios = request
Vue.use(messageVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

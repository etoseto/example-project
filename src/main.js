// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)
// Vue.config.errorHandler = function (err, vm, info) {
//   console.log(`Error: ${err.toString()}\nInfo: ${info}`)
// }
// Vue.config.warnHandler = function (msg, vm, trace) {
//   console.log(`Warn: ${msg}\nTrace: ${trace}`)
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

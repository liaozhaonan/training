// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import http from './utils/api.js'
import common from './utils/common.js'
import Cube from 'cube-ui'
import echarts from 'echarts'
import App from './App'
import router from './router'
import store from './store/store'
import 'lib-flexible/flexible'
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Cube)
Vue.prototype.$common = common
Vue.prototype.$http = http
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

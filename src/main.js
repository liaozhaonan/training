// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Cube from 'cube-ui'
import App from './App'
import router from './router'
import echarts from 'echarts'
import 'lib-flexible/flexible'
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.config.productionTip = false

Vue.use(Cube)
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

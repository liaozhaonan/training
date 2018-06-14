import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../views/chat'
import Attendance from '../views/attendance'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'chat',
      component: Chat
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: Attendance
    }
  ]
})

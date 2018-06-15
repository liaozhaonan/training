import Vue from 'vue'
import Router from 'vue-router'
import Timetable from '../views/timetable/index'
import Attendance from '../views/attendance'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'timetable',
      component: Timetable
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: Attendance
    }
  ]
})

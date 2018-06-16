import Vue from 'vue'
import Router from 'vue-router'
import timetable from '../stViews/timetable/index'
import sign from '../stViews/timetable/sign'
import signed from '../stViews/timetable/signed'
import signRecord from '../stViews/timetable/sign-record'
import examine from '../stViews/timetable/examine'
import homework from '../stViews/homework/index'
import select from '../stViews/select/index'
import chat from '../stViews/chat/index'
import setting from '../stViews/setting/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'timetable',
      component: timetable
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path: 'signed',
      name: 'signed',
      component: signed
    },
    {
      path: '/sign-record',
      name: 'sign-record',
      component: signRecord
    },
    {
      path: '/examine',
      name: 'examine',
      component: examine
    },
    {
      path: '/homework',
      name: 'homework',
      component: homework
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    }
  ]
})

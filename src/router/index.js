import Vue from 'vue'
import Router from 'vue-router'
import timetable from '../stViews/timetable/index'
import sign from '../stViews/timetable/sign'
import signed from '../stViews/timetable/signed'
import signRecord from '../stViews/timetable/sign-record'
import lessonDetail from '../stViews/timetable/lesson-detail'
import lessonProgress from '../stViews/timetable/lesson-progress'
import examineType from '../stViews/timetable/examine-type'
import examineDetail from '../stViews/timetable/examine-detail'
import examineCompare from '../stViews/timetable/examine-compare'
import homework from '../stViews/homework/index'
import homeworkDetail from '../stViews/homework/detail'
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
      path: '/examine-type',
      name: 'examine-type',
      component: examineType
    },
    {
      path: '/examine-detail',
      name: 'examine-detail',
      component: examineDetail
    },
    {
      path: '/examine-compare',
      name: 'examine-compare',
      component: examineCompare
    },
    {
      path: '/lesson-detail',
      name: 'lesson-detail',
      component: lessonDetail
    },
    {
      path: '/lesson-progress',
      name: 'lesson-progress',
      component: lessonProgress
    },
    {
      path: '/homework',
      name: 'homework',
      component: homework
    },
    {
      path: '/homework-detail',
      name: 'homework-detail',
      component: homeworkDetail
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

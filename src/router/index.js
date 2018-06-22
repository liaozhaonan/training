import Vue from 'vue'
import Router from 'vue-router'
/* 学生 */
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
import selectIndex from '../stViews/select/index'
import selectSubject from '../stViews/select/subject'
import selectDetail from '../stViews/select/detail'
import chat from '../stViews/chat/index'
import setting from '../stViews/setting/index'
/* 老师 */
import teTimetable from '../teViews/timetable/index'
import teLessonDetail from '../teViews/timetable/lesson-detail'
import teLessonPlan from '../teViews/timetable/lesson-plan'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    /* 学生 */
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
      name: 'select-index',
      component: selectIndex
    },
    {
      path: '/select-subject',
      name: 'select-subject',
      component: selectSubject
    },
    {
      path: '/select-detail',
      name: 'select-detail',
      component: selectDetail
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
    },
    /* 老师 */
    {
      path: '/teacher',
      name: 'te-timetable',
      component: teTimetable
    },
    {
      path: '/te-lesson-detail',
      name: 'te-lesson-detail',
      component: teLessonDetail
    },
    {
      path: '/te-lesson-plan',
      name: 'te-lesson-plan',
      component: teLessonPlan
    }
  ]
})

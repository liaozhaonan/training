import Vue from 'vue'
import Router from 'vue-router'

import login from '../stViews/login/login'

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
import teHomework from '../teViews/homework/index'
import teHomeworkDetail from '../teViews/homework/detail'
import teHomeworkPublish from '../teViews/homework/publish'
import teClass from '../teViews/class/index'
import teClassSetting from '../teViews/class/lesson-setting'
import teClassRoll from '../teViews/class/student-roll'
import teClassAttendance from '../teViews/class/attendance'
import teClassAttendanceDetail from '../teViews/class/attendance-detail'
import teClassMark1 from '../teViews/class/mark-step-1'
import teClassMark2 from '../teViews/class/mark-step-2'
import teClassMark3 from '../teViews/class/mark-step-3'
import teClassRecruit from '../teViews/class/recruit'
import teClassSign from '../teViews/class/sign'
import teClassSignCode from '../teViews/class/sign-code'
import teClassSignDetail from '../teViews/class/sign-detail'
import teClassSignAdd from '../teViews/class/sign-add'
import teChat from '../teViews/chat/index'
import teChatForum from '../teViews/chat/forum'
import teChatForumPostCreating from '../teViews/chat/post-creating'
import teChatForumPostDetail from '../teViews/chat/post-detail'
import teSettings from '../teViews/settings/index'
import teSettingsChange from '../teViews/settings/change'

Vue.use(Router)

/* 登录 */
const loginRouters = [
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

/* 学生 */
const stRouters = [
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
    path: '/sign/record',
    name: 'sign-record',
    component: signRecord
  },
  {
    path: '/examine/type',
    name: 'examine-type',
    component: examineType
  },
  {
    path: '/examine/detail',
    name: 'examine-detail',
    component: examineDetail
  },
  {
    path: '/examine/compare',
    name: 'examine-compare',
    component: examineCompare
  },
  {
    path: '/lesson/:id/detail/:date',
    name: 'lesson-detail',
    component: lessonDetail
  },
  {
    path: '/lesson/progress',
    name: 'lesson-progress',
    component: lessonProgress
  },
  {
    path: '/homework',
    name: 'homework',
    component: homework
  },
  {
    path: '/homework/detail',
    name: 'homework-detail',
    component: homeworkDetail
  },
  {
    path: '/select',
    name: 'select-index',
    component: selectIndex
  },
  {
    path: '/select/subject',
    name: 'select-subject',
    component: selectSubject
  },
  {
    path: '/select/detail',
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
  }
]

const teRouters = [
  /* 老师 */
  {
    path: '/teacher',
    name: 'te-timetable',
    component: teTimetable
  },
  {
    path: '/te-lesson/:id/detail/:date',
    name: 'te-lesson-detail',
    component: teLessonDetail
  },
  {
    path: '/te-lesson/plan/:id',
    name: 'te-lesson-plan',
    component: teLessonPlan
  },
  {
    path: '/te-homework',
    name: 'te-homework',
    component: teHomework
  },
  {
    path: '/te-homework/detail/:type/:id',
    name: 'te-homework-detail',
    component: teHomeworkDetail
  },
  {
    path: '/te-homework/publish/:type/:id/:lessonId/:classId/:date',
    name: 'te-homework-publish',
    component: teHomeworkPublish
  },
  {
    path: '/te-class',
    name: 'te-class',
    component: teClass
  },
  {
    path: '/te-class/setting',
    name: 'te-class-setting',
    component: teClassSetting
  },
  {
    path: '/te-class/roll',
    name: 'te-class-roll',
    component: teClassRoll
  },
  {
    path: '/te-class/attendance',
    name: 'te-class-attendance',
    component: teClassAttendance
  },
  {
    path: '/te-class/attendance/detail',
    name: 'te-class-attendance-detail',
    component: teClassAttendanceDetail
  },
  {
    path: '/te-class/mark/step-1',
    name: 'te-class-mark-step-1',
    component: teClassMark1
  },
  {
    path: '/te-class/mark/step-2',
    name: 'te-class-mark-step-2',
    component: teClassMark2
  },
  {
    path: '/te-class/mark/step-3',
    name: 'te-class-mark-step-3',
    component: teClassMark3
  },
  {
    path: '/te-class/recruit',
    name: 'te-class-recruit',
    component: teClassRecruit
  },
  {
    path: '/te-class/sign',
    name: 'te-class-sign',
    component: teClassSign
  },
  {
    path: '/te-class/sign/code',
    name: 'te-class-sign-code',
    component: teClassSignCode
  },
  {
    path: '/te-class/sign/detail',
    name: 'te-class-sign-detail',
    component: teClassSignDetail
  },
  {
    path: '/te-class/sign/add',
    name: 'te-class-sign-add',
    component: teClassSignAdd
  },
  {
    path: '/te-chat',
    name: 'te-chat',
    component: teChat
  },
  {
    path: '/te-chat/forum/:id',
    name: 'te-chat-forum',
    component: teChatForum
  },
  {
    path: '/te-chat/forum/:id/post/creating',
    name: 'te-chat-forum-post-creating',
    component: teChatForumPostCreating
  },
  {
    path: '/te-chat/forum/post/:id/detail',
    name: 'te-chat-forum-post-detail',
    component: teChatForumPostDetail
  },
  {
    path: '/te-settings',
    name: 'te-settings',
    component: teSettings
  },
  {
    path: '/te-settings/change',
    name: 'te-settings-change',
    component: teSettingsChange
  }
]

export default new Router({
  mode: 'history',
  routes: [
    ...loginRouters,
    ...stRouters,
    ...teRouters
  ]
})

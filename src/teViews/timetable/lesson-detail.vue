<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'te-timetable' }"><i></i></router-link>
      </div>
      <div class="title"><p>课程详情</p></div>
    </top-nav>
    <div class="info">
      <p><i class="lesson"></i>课名<span class="right">{{ lesson
 }}</span></p>
      <router-link :to="{ name: 'te-lesson-plan', params: {id: $route.params.id} }">
        <p>
          <i class="time"></i><span>上课时间</span><i class="go"></i><span class="right">{{ lesson_time }}</span>
        </p>
      </router-link>
      <p><i class="class"></i><span>任课班级</span><span class="right">{{ class_name }}</span></p>
      <!-- <p><i class="point"></i><span>学分</span><span class="right">4.0</span></p> -->
    </div>
    <div class="btn">
      <span>
        <router-link :to="{ name: 'te-lesson-code', params: {id: $route.params.id, classId: class_id} }">
          <cube-button>考勤</cube-button>
        </router-link>
      </span>
      <span>
        <router-link :to="{ name: 'te-homework-publish', params: {date: $route.params.date, type: 1, lessonId: lesson_id, classId: class_id} }">
          <cube-button>发布通知</cube-button>
        </router-link>
      </span>
      <span>
        <router-link :to="{ name: 'te-homework-publish', params: {date: $route.params.date, type: 2, lessonId: lesson_id, classId: class_id} }">
          <cube-button>发布作业</cube-button>
        </router-link>
      </span>
    </div>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="errPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import '@/assets/styl/header-plus.styl'
export default{
  data () {
    return {
      id: '',
      lesson: '',
      lesson_id: '',
      lesson_time: '',
      class_name: '',
      class_id: '',
      errorTip: ''
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$http.post('/api/mobile/index.php?act=member_index&op=taecher_class_detail', {
        key: vm.$store.state.user.key,
        id: to.params.id
      }).then((res) => {
        if (res.error) {
          vm.errorTip = res.error
          vm.$common.showPopup(vm.$refs.errPopup)
          return
        }
        vm.id = res.id
        vm.lesson = res.goods_name
        vm.lesson_id = res.goods_id
        vm.lesson_time = `${res.week}/${res.start_time}~${res.end_time}`
        vm.class_name = res.class_name
        vm.class_id = res.class_id
      })
    })
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .info
    margin-bottom: .21rem /* 16/75 */
    background: #ffffff
    p
      box-sizing: border-box
      width: 100%
      height: 1.44rem /* 108/75 */
      line-height: 1.44rem /* 108/75 */
      padding: 0 .4rem /* 30/75 */
      border-top: 1px solid #f8f8f8
      font-size: .45rem /* 34/75 */
      text-align: left
      color: #454545
      .right
        float: right
        color: #A9A9A9
      i
        display: inline-block
        width: .4rem /* 30/75 */
        height: .4rem /* 30/75 */
        margin: .45rem /* 34/75 */ .13rem /* 10/75 */ .59rem /* 44/75 */  0
        vertical-align: middle
      .lesson
        background: url(../../assets/img/icon/lesson.png) no-repeat
        background-size: contain
      .time
        background: url(../../assets/img/icon/clock.png) no-repeat
        background-size: contain
      .class
        background: url(../../assets/img/icon/class.png) no-repeat
        background-size: contain
      .point
        background: url(../../assets/img/icon/point.png) no-repeat
        background-size: contain
      .go
        float: right
        margin: .48rem /* 36/75 */ 0 .56rem /* 42/75 */
        background: url(../../assets/img/timetable/header-l.png) no-repeat
        background-size: contain
        transform: rotate(180deg)
  .btn
    width: 80%
    margin: 1.5rem auto
    display: flex
    justify-content: space-around
    align-items: center
    span
      flex: 0 0 auto
      width: 30%
      border-radius: .16rem /* 12/75 */
      overflow: hidden
      .cube-btn
        background: #0076ff
        &:active
          background: #004eff
</style>

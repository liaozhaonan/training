<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'timetable' }"><i></i></router-link>
      </div>
      <div class="title"><p>课程详情</p></div>
    </top-nav>
    <h5>{{ lesson.goods_name }}</h5>
    <div class="info">
      <p><i class="person"></i><span>任课老师</span><span class="right">{{ lesson.store_name }}</span></p>
      <p><i class="note"></i><span>通知</span><span class="right">一条最新消息</span></p>
      <p><i class="homework"></i><span>作业</span><span class="right">一项未完成</span></p>
      <p class="time"><i class="clock"></i>上课时间<span class="right">{{ lesson.week }}/{{ lesson.start_time }}-{{ lesson.end_time }} <i class="right"></i></span></p>
    </div>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="errPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
export default{
  data () {
    return {
      lesson: {},
      errorTip: ''
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$http.post('/api/mobile/index.php?act=student_index&op=student_class_detail', {
        key: vm.$store.state.user.key,
        id: to.params.id
      }).then((res) => {
        if (res.error) {
          vm.errorTip = res.error
          vm.$common.showPopup(vm.$refs.errPopup)
          return
        }
        vm.lesson = res
      })
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  h5
    width: 95%
    height: 1.17rem /* 88/75 */
    padding-left: 5%
    line-height: 1.17rem /* 88/75 */
    font-size: .48rem /* 36/75 */
    color: #030303
    background: #ffffff
  .info
    margin: .21rem /* 16/75 */ 0
    p
      box-sizing: border-box
      height: 1.17rem /* 88/75 */
      padding: 0 5%
      line-height: 1.17rem /* 88/75 */
      font-size: .43rem /* 32/75 */
      text-align: left
      background: #ffffff
      border-bottom: 1px solid #f5f5f5
      span
        vertical-align: middle
      span.right
        float: right
        color: #8F8E94
      i
        display: inline-block
        width: .59rem /* 44/75 */
        height: .59rem /* 44/75 */
        margin-right: .24rem /* 18/75 */
        vertical-align: middle
      i.person
        background: url(../../assets/img/timetable/person.png) no-repeat
        background-size: contain
      i.note
        margin-bottom: 4px
        background: url(../../assets/img/timetable/ring.png) no-repeat
        background-size: contain
      i.homework
        margin-bottom: 4px
        background: url(../../assets/img/timetable/list.png) no-repeat
        background-size: contain
      i.clock
        margin-bottom: 6px
        background: url(../../assets/img/timetable/clock.png) no-repeat
        background-size: contain
      i.right
        width: 0.23rem
        height: 0.5rem
        margin: 0 0 0 .24rem /* 18/75 */
        background: url(../../assets/img/timetable/r-black.png) no-repeat
        background-size: contain
    p.time
      margin-top: .21rem /* 16/75 */

</style>

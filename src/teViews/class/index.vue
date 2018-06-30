<template>
  <div>
    <top-nav>
      <div class="title"><p>班级管理</p></div>
      <div class="sign-in"><router-link :to="{ name: 'te-class-sign', params: {} }">现场签到</router-link></div>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
        <div class="list">
          <router-link class="item" :to="{ name: 'te-class-setting' }">
            <i class="lesson-setting"></i>
            <p>课外课程</p>
          </router-link>
          <router-link  class="item" :to="{ name: 'te-class-roll' }">
            <i class="student-roll"></i>
            <p>学生名册&nbsp;&nbsp;</p>
          </router-link>
          <router-link  class="item" :to="{ name: 'te-class-attendance', params: {} }">
            <i class="attendance"></i>
            <p>考勤情况</p>
          </router-link>
          <router-link  class="item" :to="{ name: 'te-class-mark-step-1', params: {} }">
            <i class="mark"></i>
            <p>考核成绩</p>
          </router-link>
          <!-- <router-link  class="item" :to="{ name: 'te-class-recruit', params: {} }">
            <i class="recruit"></i>
            <p>招生管理&nbsp;</p>
          </router-link> -->
        </div>
      </cube-scroll>
    </div>
    <te-foot-nav :footItem="footItem"></te-foot-nav>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import teFootNav from '@/components/te/footNav/footNav'
import '@/assets/styl/header-plus.styl'
export default{
  data () {
    return {
      footItem: 3
    }
  },
  components: {
    topNav,
    teFootNav
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .sign-in
    display: inline-block
    position: absolute
    right: .4rem /* 30/75 */
    line-height: 1.38rem
    font-size: .43rem /* 32/75 */
    & > a
      color: #0076ff
      &:active
        color: #0050ff
  .common-scroll-wrapper
    background: #f2f2f2
    .list
      margin-top: .13rem /* 10/75 */
      width: 100%
      display: flex
      flex-wrap: wrap
      .item
        flex: 0 0 auto
        box-sizing: border-box
        width: 50%
        height: 5.01rem /* 376/75 */
        border-bottom: 1px solid #f2f2f2
        background: #ffffff
        &:nth-child(2n+1)
          border-right: 1px solid #f2f2f2
        i
          display: block
          width: 1.87rem /* 140/75 */
          height: 1.87rem /* 140/75 */
          margin: 1.17rem /* 88/75 */ auto 0
          &.lesson-setting
            background: url(../../assets/img/class/lesson-setting.png) no-repeat
            background-size: contain
          &.student-roll
            background: url(../../assets/img/class/student-roll.png) no-repeat
            background-size: contain
          &.attendance
            background: url(../../assets/img/class/attendance.png) no-repeat
            background-size: contain
          &.mark
            background: url(../../assets/img/class/mark.png) no-repeat
            background-size: contain
          &.recruit
            background: url(../../assets/img/class/recruit.png) no-repeat
            background-size: contain
        p
          line-height: .8rem /* 60/75 */
          font-size: .48rem /* 36/75 */
          color: #464646
</style>

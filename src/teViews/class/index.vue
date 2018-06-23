<template>
  <div>
    <top-nav>
      <div class="title"><p>班级管理</p></div>
      <div class="sign-in"><router-link :to="{ name: '', params: {} }">现场签到</router-link></div>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
        <div class="list">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
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
    .list
      width: 100%
      display: flex
      flex-wrap: wrap
      .item
        flex: 0 0 auto
        box-sizing: border-box
        width: 50%
        height: 4.93rem /* 370/75 */
        border-top: 1px solid #f2f2f2
        background: #ffffff
        &:nth-child(2n)
          border-left: 1px solid #f2f2f2

</style>

<template>
  <div>
    <top-nav>
      <div class="left"><router-link class="back" :to="{ name: 'te-class' }"><i></i></router-link></div>
      <div class="title"><p>课程设置</p></div>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
        <div class="list">
          <span class="active">语文</span>
          <span>模型</span>
          <span>艺术</span>
          <span>社会学</span>
          <span>生物</span>
          <span>哲学</span>
          <span>化学</span>
          <span>心理学</span>
          <span>英语</span>
          <span>日语</span>
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
  header
    .left
      position: absolute!important
      i.back
        width: 1rem
        height: 1.38rem
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
    background: #f4f4f4
    .list
      display: flex
      justify-content: space-around
      align-items: center
      flex-wrap: wrap
      box-sizing: border-box
      width: 100%
      padding: .53rem /* 40/75 */ .33rem /* 25/75 */
      span
        flex: 0 0 auto
        display: inline-block
        box-sizing: border-box
        width: 29%
        height: .88rem /* 66/75 */
        margin: 3.5% 2%
        line-height: .88rem /* 66/75 */
        font-size: .43rem /* 32/75 */
        color: #0076FF
        background: #ffffff
        border-radius: .44rem /* 33/75 */
        &.active
          color: #ffffff
          background: #0076FF
</style>

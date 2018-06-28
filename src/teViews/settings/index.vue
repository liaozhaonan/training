<template>
  <div>
    <top-nav>
      <div class="title"><p>设置</p></div>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
        <div class="list">
          <p>用户名<span>王小聪</span></p>
          <p>真实姓名<span>王思聪</span></p>
          <p>手机号<span>1587654321</span></p>
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
      footItem: 5
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
    background-color: #f2f2f2
    .list
      width: 100%
      margin-top: .27rem /* 20/75 */
      background-color: #ffffff
      p
        box-sizing: border-box
        width: 100%
        height: 1.63rem /* 122/75 */
        padding: 0 .4rem /* 30/75 */
        line-height: 1.49rem /* 112/75 */
        font-size: .45rem /* 34/75 */
        text-align: left
        border-bottom: .03rem /* 2/75 */ solid #f8f8f8
        color: #444
        span
          float: right
          color: #666

</style>

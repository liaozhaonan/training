<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'te-class' }"><i></i></router-link>
      </div>
      <div class="title"><p>班级考勤</p></div>
    </top-nav>
    <p class="time">班级考勤<span>2017-08-30</span></p>
      <div class="scroll-wrapper">
        <cube-scroll>
          <p>产品1班<i></i></p>
          <p>产品2班<i></i></p>
          <p>设计1班<i></i></p>
          <p>运维1班<i></i></p>
        </cube-scroll>
    </div>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
export default{
  data () {
    return {

    }
  },
  components: {
    topNav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .time
    box-sizing: border-box
    width: 100%
    height: 1.07rem /* 80/75 */
    padding: 0 .4rem /* 30/75 */
    line-height: 1.07rem /* 80/75 */
    font-size: .37rem /* 28/75 */
    text-align: left
    color: #666666
    span
      float: right
  .scroll-wrapper
    position: absolute
    width: 100%
    top: 2.45rem
    bottom: 0
    p
      box-sizing: border-box
      width: 100%
      height: 1.6rem /* 120/75 */
      padding: 0 .48rem /* 36/75 */ 0 .4rem /* 30/75 */
      line-height: 1.6rem /* 120/75 */
      font-size: .43rem /* 32/75 */
      text-align: left
      border-bottom: 1px solid #f5f5f5
      background: #ffffff
      color: #454545
      i
        display: inline-block
        float: right
        width: .16rem /* 12/75 */
        height: .32rem /* 24/75 */
        margin-top: .64rem /* 48/75 */
        background: url(../../assets/img/timetable/r-black.png) no-repeat
        background-size: contain
</style>

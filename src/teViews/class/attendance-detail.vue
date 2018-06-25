<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'te-class-attendance' }"><i></i></router-link>
      </div>
      <div class="title"><p>班级考勤</p></div>
    </top-nav>
    <p class="time">班级考勤<span>2017-08-30</span></p>
    <p class="title">
      <span>学生名</span><span>到校</span><span>离校</span><span>异常</span>
    </p>
    <div class="scroll-wrapper">
      <cube-scroll>
        <p><span>小花</span><span></span><span></span><span>无</span></p>
        <p><span>小华</span><span></span><span></span><span>无</span></p>
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
    top: 3.78rem
    bottom: 0
    background: #ffffff
  p.title, .scroll-wrapper p
    box-sizing: border-box
    width: 100%
    height: 1.47rem /* 110/75 */
    padding: 0 .27rem /* 20/75 */
    font-size: 0
    text-align: left
    border-bottom: 1px solid #f5f5f5
    background: #ffffff
    color: #454545
    span
      display: inline-block
      width: 25%
      line-height: 1.47rem /* 110/75 */
      font-size: .43rem /* 32/75 */
      text-align: center
  p.title
    height: 1.33rem /* 100/75 */
    span
      line-height: 1.33rem /* 100/75 */
</style>

<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'timetable' }"><i></i></router-link>
      </div>
      <div class="title"><p>扫码签到</p></div>
      <div class="right"><router-link class="forward"  :to="{ name: 'sign-record' }"><i class="scan"></i></router-link></div>
    </top-nav>
    <div class="scan-wrapper">
      <router-link :to="{ name: 'signed' }">扫码框，扫完后跳到提示页</router-link>
    </div>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import '@/assets/styl/header-plus.styl'
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
  header
    i.scan
      background: url(../../assets/img/timetable/record.png) no-repeat
      background-size: contain
      width: .59rem /* 44/75 */
      height: .59rem /* 44/75 */
      transform: rotate(0deg);
  .scan-wrapper
    margin: 2rem auto
    width: 4rem /* 300/75 */
    height: 4rem /* 300/75 */
    line-height: 4rem
    border: 1px solid blue
</style>

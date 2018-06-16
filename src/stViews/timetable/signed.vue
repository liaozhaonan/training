<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'timetable' }"><i></i></router-link>
      </div>
      <div class="title"><p>消息提示</p></div>
    </top-nav>
    <div class="content">
      <div class="tip">
        <div class="icon"></div>
        <p>签到成功</p>
      </div>
      <div class="go">
        <p>如果你的浏览器没有跳转</p>
        <router-link :to="{ name: 'timetable' }">请点击此链接</router-link>
      </div>
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
body
  .content
    position: absolute
    top: 1.38rem
    bottom: 0
    width: 100%
    padding-top: 1.2rem
    background: #fff
    .tip
      padding: .4rem /* 30/75 */ 0
      .icon
        background: url(../../assets/img/timetable/ok.png) no-repeat
        background-size: contain
        width: 2.35rem /* 176/75 */
        height: 2.35rem /* 176/75 */
        margin: auto
      p
        line-height: .59rem /* 44/75 */
        font-size: .43rem /* 32/75 */
        margin: .4rem /* 30/75 */
        color: #030303
    .go
      line-height: .64rem /* 48/75 */
      font-size: .43rem /* 32/75 */
      color: #8f8e94
      & > a
        color: #469af7
</style>

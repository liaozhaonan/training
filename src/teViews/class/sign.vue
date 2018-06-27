<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'te-class' }"><i></i></router-link>
      </div>
      <div class="title"><p>现场签到</p></div>
      <router-link class="start" :to="{ name: 'te-class-sign-add', params: {} }">发起</router-link>
    </top-nav>
    <div class="info">
      <h5>签到列表</h5>
      <div>
        <p><span>活动主题:</span>设计师沙龙</p>
        <p><span>活动地点:</span>广州市中山纪念堂广州市中山纪念堂广州市中山纪念堂广州市中山纪念堂</p>
        <p><span>扫码截止时间:</span>2018-08-08 14:00</p>
      </div>
      <router-link :to="{ name: 'te-class-sign-code', params: {} }"><h5>二维码<i></i></h5></router-link>
      <router-link :to="{ name: 'te-class-sign-detail', params: {} }"><h5>扫码详情<i></i></h5></router-link>
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
      errorTip: ''
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$http.post('/api/mobile/index.php?act=member_index&op=teacher_class_list', {
        key: vm.$store.state.user.key
      }).then((res) => {
        if (res.error) {
          vm.errorTip = res.error
          vm.$common.showPopup(vm.$refs.errPopup)
          return
        }
        console.log(res)
      })
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  header
    .left
      position: absolute
      & > a
        width: 100%
        height: 1.38rem
    .start
      display: inline-block
      position: absolute
      right: .4rem /* 30/75 */
      line-height: 1.38rem
      font-size: .43rem /* 32/75 */
      color: #0076ff
      &:active
        color: #0050ff
  .info
    width: calc(100% - .8rem /* 60/75 */)
    margin: .8rem /* 60/75 */ .4rem /* 30/75 */
    text-align: left
    border-radius: .21rem /* 16/75 */
    overflow: hidden
    h5
      box-sizing: border-box
      width: 100%
      padding: 0 .4rem /* 30/75 */
      height: 1.33rem /* 100/75 */
      line-height: 1.33rem /* 100/75 */
      font-size: .45rem /* 34/75 */
      background: #ffffff
      &:not(last-child)
        border-bottom: 1px solid #f5f5f5
      i
        display: inline-block
        float: right
        width: .16rem /* 12/75 */
        height: .29rem /* 22/75 */
        margin-top: .52rem /* 39/75 */
        background: url(../../assets/img/timetable/r-black.png) no-repeat
        background-size: contain
    div
      padding: 0.2rem 0
      background: #ffffff
      border-bottom: 1px solid #f5f5f5
      p
        box-sizing: border-box
        width: 100%
        padding: 0.15rem .4rem /* 30/75 */
        line-height: 0.8rem /* 80/75 */
        font-size: .43rem /* 32/75 */
        word-wrap: break-word
        span
          margin-right: .4rem /* 30/75 */
          color: #777
</style>

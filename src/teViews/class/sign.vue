<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'te-class' }"><i></i></router-link>
      </div>
      <div class="title"><p>现场签到</p></div>
      <router-link class="start" :to="{ name: 'te-class-sign-add', params: {} }">发起</router-link>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
        <div class="list">
          <h5 class="top">签到列表</h5>
          <div class="item" v-for="item in signList" :key="item.id">
            <div>
              <p><span>活动主题:</span>{{ item.name }}</p>
              <p><span>活动地点:</span>{{ item.address }}</p>
              <p><span>扫码截止时间:</span>{{ $common.getFullDate(item.add_time * 1000 + item.vld * 1000) }}&nbsp;{{ $common.getFullTime(item.add_time * 1000 + item.vld * 1000) }}</p>
            </div>
            <router-link :to="{ name: 'te-class-sign-code', query: {name: item.name, img: item.img} }"><h5>二维码<i></i></h5></router-link>
            <router-link :to="{ name: 'te-class-sign-detail', params: {id: item.id} }"><h5>扫码详情<i></i></h5></router-link>
          </div>
        </div>
      </cube-scroll>
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
      signList: [],
      errorTip: ''
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getSignList()
    })
  },
  methods: {
    getSignList () {
      this.$http.post('/api/mobile/index.php?act=qrcode&op=scene_sign_list', {
        key: this.$store.state.user.key,
        type: 2
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        this.signList = res
      })
    }
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
  .common-scroll-wrapper
    background: #f2f2f2
  .list
    width: calc(100% - .8rem /* 60/75 */)
    padding: .4rem /* 30/75 */ .4rem /* 30/75 */ .8rem /* 60/75 */
    text-align: left
    h5
      box-sizing: border-box
      width: 100%
      padding: 0 .4rem /* 30/75 */
      height: 1.33rem /* 100/75 */
      line-height: 1.33rem /* 100/75 */
      font-size: .45rem /* 34/75 */
      background: #ffffff
      &.top
        border-radius: .21rem /* 16/75 */
        overflow: hidden
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
    .item
      margin-top: .27rem /* 20/75 */
      border-radius: .21rem /* 16/75 */
      overflow: hidden
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

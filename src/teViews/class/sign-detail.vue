<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'te-class-sign' }"><i></i></router-link>
      </div>
      <div class="title"><p>扫码详情</p></div>
    </top-nav>
    <div class="detail">
      <p>班级: <span>{{ info.class_name || 0 }}</span></p>
      <p>应到: <span>{{ info.total_member || 0}}人</span></p>
      <p>实到: <span>{{ info.actual_member || 0}}人</span></p>
    </div>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import '@/assets/styl/header-plus.styl'

export default{
  data () {
    return {
      info: {}
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getSignInfo()
    })
  },
  methods: {
    getSignInfo () {
      this.$http.post('/api/mobile/index.php?act=qrcode&op=scene_sign_detail', {
        key: this.$store.state.user.key,
        id: this.$route.params.id
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        this.info = res
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  body
    background: #ffffff
  header
    .left
      position: absolute!important
      & > a
        width: 100%
        height: 1.38rem
  .detail
    position: absolute
    top: 1.38rem
    bottom: 0
    width: 100%
    padding-top: 2rem
    background: #ffffff
    p
      padding-left: 35%
      font-size: .53rem /* 40/75 */
      line-height: 1.33rem /* 100/75 */
      text-align: left
</style>

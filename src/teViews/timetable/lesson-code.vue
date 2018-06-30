<template>
  <div>
    <top-nav>
      <div class="left">
        <a class="back" @click="$router.go(-1)"><i></i></a>
      </div>
      <div class="title"><p>考勤</p></div>
    </top-nav>
    <div class="code"><img :src="imgSrc" alt=""></div>
    <p>截屏分享出去即可</p>
    <p>有效期至: {{ validTime }}(10分钟内)</p>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="errPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import '@/assets/styl/header-plus.styl'

export default{
  data () {
    return {
      imgSrc: '',
      validTime: 0,
      errorTip: ''
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getLessonCode()
    })
  },
  methods: {
    getLessonCode () {
      this.$http.post('/api/mobile/index.php?act=qrcode&op=scene_sign_add', {
        key: this.$store.state.user.key,
        type: 1,
        vld: 600,
        time_id: this.$route.params.id,
        class_id: this.$route.params.class_id
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        this.imgSrc = res
        let validTime = (new Date()).getTime() + 600 * 1000
        this.validTime = this.$common.getFullTime(validTime)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  header
    .left
      position: absolute!important
      & > a
        width: 100%
        height: 1.38rem
    .title
      p
        white-space: nowrap
        text-align: left
        text-overflow: ellipsis
        overflow: hidden
  .code
    width: 4rem /* 300/75 */
    height: 4rem /* 300/75 */
    margin: 1.6rem /* 120/75 */ auto .13rem /* 10/75 */
    background: #ffffff
    overflow: hidden
    img
      width: 4rem
      height: 4rem
  p
    font-size: .43rem /* 32/75 */
    line-height: 1.07rem /* 80/75 */
</style>

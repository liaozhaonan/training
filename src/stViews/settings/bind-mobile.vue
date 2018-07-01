<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'settings' }"><i></i>绑定手机号</router-link>
      </div>
    </top-nav>
    <div class="input-wrapper">
      <cube-input v-model="content" :placeholder=" $route.query.content" :type="$route.query.type" :maxlength="maxLength" :autofocus="autofocus" :clearable="clearable"></cube-input>
      <span class="getcode" @click="getCode()">获取验证码</span>
    </div>
    <div class="input-wrapper">
      <cube-input v-model="code" placeholder="请输入验证码" :type="$route.query.type" :maxlength="maxLength" :autofocus="autofocus" :clearable="clearable"></cube-input>
    </div>
    <div class="btn">
      <cube-button :disabled="btnDisable" @click="submit()">确定</cube-button>
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
      content: '',
      code: '',
      autofocus: true,
      clearable: true,
      maxLength: 15,
      errorTip: ''
    }
  },
  computed: {
    btnDisable () {
      return !(this.content && this.code)
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('beforeRouteEnter')
    })
  },
  methods: {
    getCode () {
      this.$http.post('/api/mobile/index.php?act=member_account&op=bind_mobile_step1', {
        key: this.$store.state.user.key,
        mobile: this.content
      }).then((res) => {
        this.errorTip = res.error ? res.error : '发送成功,请注意查收'
        this.$common.showPopup(this.$refs.errPopup)
      })
    },
    submit () {
      this.$http.post('/api/mobile/index.php?act=member_account&op=bind_mobile_step2', {
        key: this.$store.state.user.key,
        phone: this.content,
        auth_code: this.code

      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        setTimeout(() => {
          this.$router.go(-1)
        }, 1500)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cube-btn
    background: #0076ff
    &:active
      background: #004eff
    &.cube-btn_disabled
      background: #cccccc
  header
    .left
      position: absolute
      width: 30%!important
      & > a
        width: 90%
        height: 1.38rem
        padding-left: 15%
        font-size: .37rem /* 28/75 */
        i
          left: .4rem /* 30/75 */
    .start
      display: inline-block
      position: absolute
      right: .4rem /* 30/75 */
      line-height: 1.38rem
      font-size: .43rem /* 32/75 */
      color: #0076ff
      &:active
        color: #0050ff
  .input-wrapper
    position: relative
    box-sizing: border-box
    width: 100%
    padding: .27rem /* 20/75 */
    margin-top: .27rem /* 20/75 */
    background: #ffffff
    .cube-input
      width: 100%
    span
      position: absolute
      top: .07rem /* 5/75 */
      right: .07rem /* 5/75 */
      width: 30%
      height: 1.2rem /* 90/75 */
      line-height: 1.2rem /* 90/75 */
      font-size: .43rem /* 32/75 */
      color: #ffffff
      background: #0076ff
      border-radius: .16rem /* 12/75 */
  .btn
    width: 6.4rem /* 480/75 */
    margin: 1rem auto
    border-radius: .4rem /* 30/75 */
    overflow: hidden
</style>

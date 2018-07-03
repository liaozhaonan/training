<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'settings' }"><i></i>修改密码</router-link>
      </div>
      <a class="start" @click="submit()">确定</a>
    </top-nav>
    <div class="input-wrapper">
      <cube-input v-model="oldPassword" placeholder="请输入原有密码" type="password" :maxlength="maxLength" :autofocus="autofocus" :clearable="clearable"></cube-input>
    </div>
    <div class="input-wrapper">
      <cube-input v-model="password1" placeholder="请输入新密码" type="password" :maxlength="maxLength" :autofocus="autofocus" :clearable="clearable"></cube-input>
    </div>
    <div class="input-wrapper">
      <cube-input v-model="password2" placeholder="请再次输入新密码" type="password" :maxlength="maxLength" :autofocus="autofocus" :clearable="clearable"></cube-input>
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
      oldPassword: '',
      password1: '',
      password2: '',
      autofocus: true,
      clearable: true,
      maxLength: 15,
      errorTip: ''
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
    submit () {
      if (!this.password1 === this.password2) {
        this.errorTip = '两次输入密码不一致'
        this.$common.showPopup(this.$refs.errPopup)
        return
      }
      this.$http.post('/api/mobile/index.php?act=member_account&op=edit_password', {
        key: this.$store.state.user.key,
        password: this.password1,
        old_password: this.oldPassword
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
    box-sizing: border-box
    width: 100%
    padding: .27rem /* 20/75 */
    margin-top: .27rem /* 20/75 */
    background: #ffffff
</style>

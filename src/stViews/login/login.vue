<template>
  <div>
    <top-nav>
      <div class="title"><p>登录</p></div>
    </top-nav>
    <cube-input v-model="username" placeholder="请输入用户名" type="text" :maxlength="maxlength" :autocomplete="autocomplete" :clearable="clearable"></cube-input>
    <cube-input v-model="password" placeholder="请输入密码" type="password" :maxlength="maxlength" :autocomplete="autocomplete" :clearable="clearable" :eye="eye"></cube-input>
    <div class="btn">
      <cube-button :disabled="btnDisable" @click="login">登录</cube-button>
    </div>
    <cube-popup :mask="false" :content="errorTip" ref="errPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import '@/assets/styl/header-plus.styl'

export default{
  data () {
    return {
      username: '',
      password: '',
      maxlength: 20,
      autocomplete: true,
      clearable: true,
      errorTip: '',
      eye: {
        open: false,
        reverse: false
      }
    }
  },
  computed: {
    btnDisable () {
      return !(this.username && this.password)
    }
  },
  components: {
    topNav
  },
  methods: {
    login () {
      let client
      navigator.userAgent.includes('iPhone') ? client = 'ios' : client = 'android'
      this.$http.post('/api/mobile/index.php?act=login', {
        username: this.username,
        password: this.password,
        client: client
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        this.$store.commit('setUser', res)
        res.is_teacher
          ? this.$router.push({ name: 'te-timetable' })
          : this.$router.push({ name: 'timetable' })
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  header
    margin-bottom: 3rem
  .cube-input
    width: 75%
    height: 1rem
    margin: 1rem auto
    border-radius: .16rem /* 12/75 */
    overflow: hidden
  .btn
    width: 6.4rem /* 480/75 */
    margin: 1rem auto
    border-radius: .4rem /* 30/75 */
    overflow: hidden
</style>

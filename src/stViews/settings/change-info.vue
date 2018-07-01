<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'settings' }"><i></i>更改名字</router-link>
      </div>
      <a class="start" @click="submit()">保存</a>
    </top-nav>
    <div class="input-wrapper">
      <cube-input v-model="content" :placeholder=" $route.query.content" :type="$route.query.type" :maxlength="maxLength" :autofocus="autofocus" :clearable="clearable"></cube-input>
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
      if (this.content === this.$route.query.content) {
        this.$router.go(-1)
      }
      this.$http.post('/api/mobile/index.php?act=member_account&op=member_info_update', {
        key: this.$store.state.user.key,
        member_truename: this.$route.query.type === 'member_truename' ? this.content : '',
        genearch_name: this.$route.query.type === 'genearch_name' ? this.content : ''
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        setTimeout(() => {
          this.$router.push({name: 'settings'})
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
    border-bottom: .03rem /* 2/75 */ solid #bbb
</style>

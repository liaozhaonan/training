<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'te-settings' }"><i></i>更改名字</router-link>
      </div>
      <a class="start">保存</a>
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
      this.$http.post('/api/mobile/index.php?act=member_index&op=teacher_class_list', {
        key: this.$store.state.user.key
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        console.log(res)
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

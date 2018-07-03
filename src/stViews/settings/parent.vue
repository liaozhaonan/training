<template>
  <div>
    <top-nav>
      <div class="left">
        <a class="back" @click="$router.go(-1)"><i></i></a>
      </div>
      <div class="title"><p>监护人信息</p></div>
      <a class="submit" @click="submit()">保存</a>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
        <div class="list">
          <p>家长姓名<span><cube-input v-model="name" :placeholder="info.genearch_name" autofocus="autofocus" ></cube-input></span></p>
          <p>联系电话<span class="phone"><cube-input v-model="phone" :placeholder="info.genearch_mobile"></cube-input></span></p>
        </div>
      </cube-scroll>
    </div>
    <st-foot-nav :footItem="footItem"></st-foot-nav>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="errPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import stFootNav from '@/components/st/footNav/footNav'
import '@/assets/styl/header-plus.styl'
export default{
  data () {
    return {
      name: '',
      phone: '',
      info: {},
      footItem: 5,
      errorTip: ''
    }
  },
  components: {
    topNav,
    stFootNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getMemberInfo()
    })
  },
  methods: {
    getMemberInfo () {
      this.$http.post('/api/mobile/index.php?act=member_index&op=get_member_info', {
        key: this.$store.state.user.key
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        if (!res.username) { res.username = '未提供' }
        if (!res.member_truename) { res.member_truename = '未提供' }
        if (!res.member_mobile) { res.member_mobile = '未提供' }
        if (!res.genearch_name) { res.genearch_name = '未提供' }
        if (!res.genearch_mobile) { res.genearch_mobile = '未提供' }
        this.info = res
      })
    },
    submit () {
      if (!(this.name || this.phone)) {
        this.$router.go(-1)
      }
      this.$http.post('/api/mobile/index.php?act=member_account&op=member_info_update', {
        key: this.$store.state.user.key,
        genearch_name: this.name,
        genearch_mobile: this.phone
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
  .submit
    display: inline-block
    position: absolute
    right: .4rem /* 30/75 */
    line-height: 1.38rem
    font-size: .43rem /* 32/75 */
    color: #0076ff
    &:active
      color: #0050ff
  .common-scroll-wrapper
    background-color: #f2f2f2
    .list
      width: 100%
      margin-top: .27rem /* 20/75 */
      background-color: #ffffff
      p
        box-sizing: border-box
        width: 100%
        height: 1.63rem /* 122/75 */
        padding: 0 .4rem /* 30/75 */
        line-height: 1.49rem /* 112/75 */
        font-size: .45rem /* 34/75 */
        text-align: left
        border-bottom: .03rem /* 2/75 */ solid #f8f8f8
        color: #444
        span
          float: right
          width: 3.2rem
          height: 1.63rem
          color: #666
          .cube-input
            height: 1.63rem
            .cube-input-field
              text-align: right

</style>

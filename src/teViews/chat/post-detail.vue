<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <a class="back" @click="$router.go(-1)"><i></i></a>
      </div>
      <div class="title"><p>{{ $route.query.forum }}</p></div>
    </top-nav>
    <div class="scroll-wrapper">
      <cube-scroll>
        <div class="posting">
          <h5>{{ posting.title }}</h5>
          <p class="tag">
            {{ posting.member_name }}
            <span>{{ $common.getFullDate(posting.add_time * 1000) }}</span>
            <span>回帖数: {{ posting.reply_num  }}</span>
          </p>
          <p class="content">{{ posting.content }}</p>
          <img v-for="(p, index) in posting.pic" :src="p" alt="" :key="index">
        </div>
        <div class="comment-list">
          <label>回帖列表({{ posting.reply_num }})</label>
        </div>
        <div class="reply">
          <cube-textarea v-model="content" name="content" placeholder="请输入内容" :maxlength="maxLength"></cube-textarea>
          <span><cube-button @click="reply()">我要回帖</cube-button></span>
        </div>
      </cube-scroll>
    </div>
    <cube-popup class="tip" :mask="false" :content="popTip" ref="tipPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
export default{
  data () {
    return {
      posting: {},
      content: '',
      maxLength: 500,
      popTip: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$http.post('/api/mobile/index.php?act=forum&op=dynamic_detail', {
        key: vm.$store.state.user.key,
        id: vm.$route.params.id
      }).then((res) => {
        if (res.error) {
          vm.errorTip = res.error
          vm.$common.showPopup(vm.$refs.errPopup)
          return
        }
        vm.posting = res
      })
    })
  },
  components: {
    topNav
  },
  methods: {
    reply () {
      this.$http.post('/api/mobile/index.php?act=forum&op=dynamic_reply_add', {
        key: this.$store.state.user.key,
        id: this.$route.params.id,
        content: this.content
      }).then((res) => {
        this.popTip = res
        this.$common.showPopup(this.$refs.tipPopup)
        this.content = ''
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
  header .left
    position: absolute
  .scroll-wrapper
    position: fixed
    top: 1.38rem
    bottom: 0
    width: 100%
    background-color: #ffffff
    .posting
      padding: .27rem /* 20/75 */ .4rem /* 30/75 */ .53rem /* 40/75 */
      & > h5
        font-size: .48rem /* 36/75 */
        line-height: 1.07rem /* 80/75 */
        text-align: center
        color: #303030
      .tag
        width: 100%
        font-size: .37rem /* 28/75 */
        line-height: .43rem /* 32/75 */
        color: #9f9f9f
        span
          display: inline-block
          margin-left: .27rem /* 20/75 */
      .content
        width: 100%
        margin: .27rem /* 20/75 */ 0
        line-height: .73rem /* 55/75 */
        font-size: .43rem /* 32/75 */
        text-align: left
        text-indent: .88rem /* 66/75 */
        text-overflow: ellipsis
        color: #2a2a2a
      img
        width: 95%
        margin-top: .27rem /* 20/75 */
  .comment-list
    position: relative
    margin: 0.5rem 0
    label
      display: block
      width: 100%
      line-height: .43rem /* 32/75 */
      font-size: .37rem /* 28/75 */
      &:before
        content: ''
        position: absolute
        top: 49%
        left: 28%
        background: #888888
        width: 8%
        height: .03rem /* 2/75 */
      &:after
        content: ''
        position: absolute
        top: 49%
        right: 28%
        background: #888888
        width: 8%
        height: .03rem /* 2/75 */
  .reply
    padding: 1rem 1rem 3rem
    .cube-textarea-wrapper
      height: .8rem /* 60/75 */
      margin: .2rem /* 15/75 */ 0 .8rem /* 60/75 */
      border-radius: .08rem /* 6/75 */
      overflow: hidden
    .cube-textarea_expanded
      height: 2.67rem /* 200/75 */
    span
      display: inline-block
      width: 6.4rem /* 480/75 */
      margin: auto
      border-radius: .4rem /* 30/75 */
      overflow: hidden
</style>

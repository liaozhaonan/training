<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <a class="back" @click="$router.go(-1)"><i></i></a>
      </div>
      <div class="title"><p>{{ headText }}</p></div>
    </top-nav>
    <div class="scroll-wrapper">
      <cube-scroll>
        <div>
          <div class="top">
            <h2>{{ info.title }}</h2>
            <p>
              <span class="left">发布者: {{ info.store_name }}</span>&nbsp;
              <span class="right">发布时间: {{ $common.getFullDate(info.date * 1000) }}</span>
            </p>
          </div>
          <div class="detail">
            <p>{{ info.content }}</p>
            <img v-for="(p, index) in info.pic" :src="p" alt="" :key="index">
          </div>
        </div>
      </cube-scroll>
    </div>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="errPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
export default{
  data () {
    return {
      headText: '',
      info: {},
      errorTip: ''
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getDetail()
    })
  },
  methods: {
    getDetail () {
      Number.parseInt(this.$route.params.type) === 1 ? this.headText = '通知详情' : this.headText = '作业详情'
      this.$http.post('/api/mobile/index.php?act=student_index&op=notice_homework_detail', {
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
  header
    .left
      position: absolute
  .scroll-wrapper
    position: absolute
    top: 1.38rem
    bottom: 0
    width: 100%
    .top
      padding: .27rem /* 20/75 */ .4rem /* 30/75 */ .53rem /* 40/75 */
      border-bottom: 1px solid #f0f0f0
      background-color: #ffffff
      h2
        line-height: 1.07rem /* 80/75 */
        font-size: .59rem /* 44/75 */p
        padding: .05rem /* 4/75 */ 0
        line-height: .64rem /* 48/75 */
        font-size: .43rem /* 32/75 */
        text-align: left
        color: #333333
        text-align: left
      p
        width: 100%
        font-size: .37rem /* 28/75 */
        color: #8F8E94
        .left
          float: left
        .right
          float: right
    .detail
      background-color: #ffffff
      padding: .27rem /* 20/75 */ .4rem /* 30/75 */ .53rem /* 40/75 */
      p
        padding: .05rem /* 4/75 */ 0
        line-height: .64rem /* 48/75 */
        font-size: .43rem /* 32/75 */
        text-align: left
        text-indent: .85rem /* 64/75 */
        color: #333333
      img
        width: 95%
        margin-top: .27rem /* 20/75 */

</style>

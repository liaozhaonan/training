<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'te-chat-forum', params: {id: $route.params.id} }"><i></i></router-link>
      </div>
      <div class="title"><p>发帖</p></div>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
        <div class="text">
          <cube-input v-model="title" placeholder="请输入标题"></cube-input>
          <div id="content-box">
            <cube-textarea v-model="content" name="content" placeholder="请输入内容" :maxlength="maxLength"></cube-textarea>
          </div>
          <label>上传图片(可选)</label>
          <cube-upload ref="upload" action="/api/mobile/index.php?act=upload&op=image" :simultaneous-uploads="1" @files-added="filesAdded" />
          <div class="btn">
            <cube-button :disabled="btnDisable" @click="publish()">马上发布</cube-button>
          </div>
        </div>
      </cube-scroll>
    </div>
    <cube-popup class="tip" :mask="false" :content="popTip" ref="tipPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import '@/assets/styl/header-plus.styl'

export default{
  data () {
    return {
      title: '',
      content: '',
      maxLength: 500,
      popTip: ''
    }
  },
  computed: {
    btnDisable () {
      return !(this.title && this.content)
    }
  },
  components: {
    topNav
  },
  methods: {
    filesAdded (files) {
      let hasIgnore = false
      const maxSize = 1 * 1024 * 1024 // 1M
      for (let k in files) {
        const file = files[k]
        if (file.size > maxSize) {
          file.ignore = true
          hasIgnore = true
        }
      }
      hasIgnore && this.$createToast({
        type: 'warn',
        time: 1000,
        txt: '你选择了大于1M的图片'
      }).show()
    },
    publish () {
      let files = this.$refs.upload.files
      let fileStr = ''
      for (let i = 0; i < files.length; i++) {
        fileStr += files[i].response.datas
        if (i < files.length - 1) {
          fileStr += ','
        }
      }
      this.$http.post('/api/mobile/index.php?act=forum&op=dynamic_add', {
        key: this.$store.state.user.key,
        id: this.$route.params.id,
        title: this.title,
        content: this.content,
        pic: fileStr
      }).then((res) => {
        this.popTip = res
        this.$common.showPopup(this.$refs.tipPopup)
        setTimeout(() => {
          this.$router.go(-1)
        }, 2000)
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
  .left
    position: absolute!important
  .select
    background: #ffffff
    p
      box-sizing: border-box
      width: 100%
      height: 1.44rem /* 108/75 */
      line-height: 1.44rem /* 108/75 */
      padding: 0 .4rem /* 30/75 */
      border-bottom: 1px solid #f8f8f8
      font-size: .45rem /* 34/75 */
      text-align: left
      color: #454545
      .right
        float: right
        color: #A9A9A9
      .go
        display: inline-block
        width: .2rem /* 15/75 */
        height: .4rem /* 30/75 */
        float: right
        margin: .53rem /* 40/75 */ 0 .48rem /* 36/75 */ .27rem /* 20/75 */
        background: url(../../assets/img/timetable/r-black.png) no-repeat
        background-size: contain
  .text
    box-sizing: border-box
    width: 100%
    padding: .4rem /* 30/75 */
    text-align: left
    background: #ffffff
    p
      line-height: .64rem /* 48/75 */
      font-size: .45rem /* 34/75 */
    label
      line-height: .53rem /* 40/75 */
      font-size: .32rem /* 24/75 */
      margin-left: .13rem /* 10/75 */
      color: #888
    #content-box
      padding-bottom: .27rem /* 20/75 */
      .cube-textarea-wrapper
        height: .8rem /* 60/75 */
        margin: .2rem /* 15/75 */ 0
        border-radius: .08rem /* 6/75 */
        overflow: hidden
      .cube-textarea_expanded
        height: 2.67rem /* 200/75 */
    .cube-input
      margin: .13rem /* 10/75 */ 0 .53rem /* 40/75 */
      background-color: #F1F2F6
      border-radius: .08rem /* 6/75 */
      overflow: hidden
    .cube-upload
      padding: .2rem /* 15/75 */ 0 .27rem /* 20/75 */
      border-bottom: 1px solid #f0f0f0
    .btn
      width: 6.4rem /* 480/75 */
      margin: 1rem auto
      border-radius: .4rem /* 30/75 */
      overflow: hidden

</style>

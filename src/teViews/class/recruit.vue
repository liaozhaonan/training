<template>
  <div>
    <top-nav>
      <div class="left">
        <a class="back" @click="$router.go(-1)"><i></i></a>
      </div>
      <div class="title"><p>添加课外课程</p></div>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
          <p class="chose">课程分类<span @click="showTypePicker">{{ selectedType.text }}<i></i></span></p>
          <p>课程</p>
          <cube-input v-model="name" placeholder="请输入课程名称"></cube-input>
          <p>课程介绍</p>
          <div class="content-box">
            <cube-textarea v-model="introduce" name="content" placeholder="请输入介绍内容" :maxlength="textMaxLength"></cube-textarea>
          </div>
          <label>上传图片(第1张为封面图,第2张为背景图)</label>
          <cube-upload ref="upload" action="/api/mobile/index.php?act=upload&op=image" :simultaneous-uploads="1" @files-added="filesAdded" />
          <p>课程评分(1-5分)</p>
          <cube-input v-model="score" placeholder="如: 4.5"></cube-input>
          <p>联系电话</p>
          <cube-input v-model="mobile" placeholder="请输入手机号"></cube-input>
          <p>所在省份</p>
          <cube-input v-model="province" placeholder="如: 广东省"></cube-input>
          <p>所在城市</p>
          <cube-input v-model="city" placeholder="如: 广州市"></cube-input>
          <p>所在区县</p>
          <cube-input v-model="area" placeholder="如: 越秀区"></cube-input>
          <!-- <p>招生要求</p>
          <div class="content-box">
            <cube-textarea v-model="studentRequire" name="content" placeholder="请输入介绍内容" :maxlength="textMaxLength"></cube-textarea>
          </div>
          <p class="option">开放在线缴费报名: <span><cube-radio-group v-model="onlinePay" :options="payOptions" :horizontal="true" /></span></p> -->
          <div class="btn">
            <cube-button :disabled="btnDisable" @click="publish()">马上发布</cube-button>
          </div>
          <div style="height: 1rem"></div>
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
      name: '',
      introduce: '',
      textMaxLength: 500,
      mobile: '',
      province: '',
      city: '',
      area: '',
      score: '',
      typeData: [],
      selectedType: {
        text: '请选择',
        value: ''
      },
      popTip: ''
      // onlinePay: 2,
      // payOptions: [
      //   {
      //     label: '是',
      //     value: 1
      //   },
      //   {
      //     label: '否',
      //     value: 2
      //   }
      // ]
    }
  },
  computed: {
    btnDisable () {
      if (this.name && this.introduce && this.mobile && this.province && this.city && this.area && this.score && this.selectedType.value) {
        return false
      }
      return true
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getTypeData()
    })
  },
  methods: {
    getTypeData () {
      this.$http.post('/api/mobile/index.php?act=index&op=extracurricular_class_list', {}).then((res) => {
        if (res.error) {
          this.popTip = res.error
          this.$common.showPopup(this.$refs.tipPopup)
          return
        }
        let typeData = []
        for (let i = 0; i < res.length; i++) {
          let type = { text: res[i].name, value: res[i].id }
          typeData.push(type)
        }
        this.typeData = typeData
      })
    },
    showTypePicker () {
      if (!this.typePicker) {
        this.typePicker = this.$createPicker({
          title: '选择班别',
          data: [this.typeData],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.selectedType.text = selectedText[0]
            this.selectedType.value = selectedVal[0]
          }
        })
      }
      this.typePicker.show()
    },
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
      let image
      let backgroundImage
      let files = this.$refs.upload.files
      for (let i = 0; i < files.length; i++) {
        image = files[0]
        backgroundImage = files[1]
      }
      this.$http.post('/api/mobile/index.php?act=extracurricular&op=extracurricular_add', {
        name: this.name,
        image: image,
        background_image: backgroundImage,
        introduce: this.introduce,
        mobile: this.mobile,
        province: this.province,
        city: this.city,
        area: this.area,
        score: this.score,
        class_id: this.selectedType.value
      }).then((res) => {
        if (res.error) {
          this.popTip = res.error
          this.$common.showPopup(this.$refs.tipPopup)
          return
        }
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
  .cube-scroll-wrapper
    box-sizing: border-box
    width: 100%
    padding: .4rem /* 30/75 */
    text-align: left
    background: #ffffff
    p
      line-height: .64rem /* 48/75 */
      font-size: .45rem /* 34/75 */
    .content-box
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
    .option
      position: relative
      margin-top: .27rem /* 20/75 */
      span
        display: inline-block
        position: absolute
        top: -.11rem /* -8/75 */
        right: -1px
        width: 3rem
    label
      line-height: .53rem /* 40/75 */
      font-size: .32rem /* 24/75 */
      margin-left: .13rem /* 10/75 */
      color: #888
    .chose
      box-sizing: border-box
      width: 100%
      height: 1.6rem /* 120/75 */
      padding-right: .48rem /* 36/75 */
      line-height: 1.6rem /* 120/75 */
      font-size: .45rem /* 34/75 */
      text-align: left
      background: #ffffff
      color: #454545
      span
        float: right
        font-size: .45rem /* 34/75 */
        color: #C4C4C4
        i
          display: inline-block
          width: .16rem /* 12/75 */
          height: .29rem /* 22/75 */
          margin-left: .13rem /* 10/75 */
          background: url(../../assets/img/timetable/r-black.png) no-repeat
          background-size: contain
    .btn
      width: 6.4rem /* 480/75 */
      margin: 1rem auto 1rem
      border-radius: .4rem /* 30/75 */
      overflow: hidden

</style>

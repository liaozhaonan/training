<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'te-class-sign' }"><i></i></router-link>
      </div>
      <div class="title"><p>添加签到活动</p></div>
    </top-nav>
    <p class="chose">年级<span @click="showGradePicker">{{ selectedGrade.text }}<i></i></span></p>
    <p class="chose">班别<span @click="showClassPicker">{{ selectedClass.text }}<i></i></span></p>
    <p class="chose">扫码有效时间<span @click="showTimePicker">{{ selectedValidTime.text }}<i></i></span></p>
    <div class="text">
      <p>活动名称</p>
      <cube-input v-model="activity" placeholder="请输入活动名称"></cube-input>
      <p>活动地址</p>
      <div class="content-box">
        <cube-textarea v-model="address" name="address" placeholder="请输入详细活动地址" :maxlength="maxLength"></cube-textarea>
      </div>
    </div>
    <div class="btn">
      <cube-button :disabled="btnDisable" @click="submit()">马上发布</cube-button>
    </div>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="errPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'

const timeData = [
  {
    text: '5分钟', value: '300'
  },
  {
    text: '10分钟', value: '600'
  },
  {
    text: '20分钟', value: '1200'
  }
]

export default{
  data () {
    return {
      classData: [],
      selectedGrade: {
        text: '请选择',
        value: ''
      },
      selectedClass: {
        text: '请选择',
        value: ''
      },
      selectedValidTime: {
        text: '请选择',
        value: ''
      },
      activity: '',
      address: '',
      maxLength: 100,
      errorTip: ''
    }
  },
  computed: {
    btnDisable () {
      return !(this.selectedClass.value && this.selectedValidTime.value && this.activity && this.address)
    },
    key () {
      return this.$store.state.key
    }
  },
  components: {
    topNav
  },
  methods: {
    showGradePicker () {
      if (!this.gradePicker) {
        this.gradePicker = this.$createPicker({
          title: '选择年级',
          data: [this.$store.state.gradeData],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.selectedGrade.text = selectedText[0]
            this.selectedGrade.value = selectedVal[0]
            this.getClassData(this.selectedGrade.value)
          }
        })
      }
      this.gradePicker.show()
    },
    showClassPicker () {
      if (!this.classPicker) {
        this.classPicker = this.$createPicker({
          title: '选择班别',
          data: [this.classData],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.selectedClass.text = selectedText[0]
            this.selectedClass.value = selectedVal[0]
          }
        })
      }
      this.classPicker.show()
    },
    showTimePicker () {
      if (!this.timePicker) {
        this.timePicker = this.$createPicker({
          title: '选择扫码有效时间',
          data: [timeData],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.selectedValidTime.text = selectedText[0]
            this.selectedValidTime.value = selectedVal[0]
          }
        })
      }
      this.timePicker.show()
    },
    getClassData (gradeId) {
      this.$http.post('/api/mobile/index.php?act=member_index&op=teacher_class_list', {
        key: this.$store.state.user.key,
        id: gradeId
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        let classData = []
        for (let i = 0; i < res.length; i++) {
          let cls = { text: res[i].name, value: res[i].id }
          classData.push(cls)
        }
        this.classData = classData
      })
    },
    submit () {
      this.$http.post('/api/mobile/index.php?act=qrcode&op=scene_sign_add', {
        key: this.$store.state.user.key,
        type: 2,
        vld: this.selectedValidTime.value,
        class_id: this.selectedClass.value,
        name: this.activity,
        address: this.address
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        this.errorTip = '发布成功'
        this.$common.showPopup(this.$refs.errPopup)
        setTimeout(() => {
          this.$router.replace({ name: 'te-class-sign-code', query: {img: res, name: this.activity} })
        }, 2000)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .chose
    box-sizing: border-box
    width: 100%
    height: 1.6rem /* 120/75 */
    padding: 0 .48rem /* 36/75 */ 0 .4rem /* 30/75 */
    line-height: 1.6rem /* 120/75 */
    font-size: .45rem /* 34/75 */
    text-align: left
    border-bottom: 1px solid #f5f5f5
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
  .text
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
  .btn
    width: 6.4rem /* 480/75 */
    margin: 1rem auto
    border-radius: .4rem /* 30/75 */
    overflow: hidden
</style>

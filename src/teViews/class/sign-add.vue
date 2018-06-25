<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'te-class-mark-step-1' }"><i></i></router-link>
      </div>
      <div class="title"><p>添加签到活动</p></div>
    </top-nav>
    <p class="chose">班级<span @click="showClassPicker">{{ selectedClass.text }}<i></i></span></p>
    <p class="chose">扫码有效时间<span @click="showTimePicker">{{ selectedTime.text }}<i></i></span></p>
    <div class="text">
      <p>活动名称</p>
      <cube-input v-model="activity" placeholder="请输入活动名称"></cube-input>
      <p>活动地址</p>
      <div class="content-box">
        <cube-textarea v-model="address" name="content" placeholder="请输入详细活动地址" :maxlength="maxLength"></cube-textarea>
      </div>
    </div>
    <div class="btn">
      <cube-button :disabled="btnDisable">马上发布</cube-button>
    </div>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'

const classData = [
  {
    text: '产品1班', value: '1'
  },
  {
    text: '设计1班', value: '2'
  },
  {
    text: '美术1班', value: '3'
  }
]

const timeData = [
  {
    text: '5分钟', value: '1'
  },
  {
    text: '10分钟', value: '2'
  },
  {
    text: '20分钟', value: '3'
  }
]

export default{
  data () {
    return {
      selectedClass: {
        text: '请选择',
        value: 0
      },
      selectedTime: {
        text: '请选择',
        value: 0
      },
      activity: '',
      address: '',
      maxLength: 100
    }
  },
  computed: {
    btnDisable () {
      if (this.selectedClass.value && this.selectedTime.value && this.activity && this.address) {
        return false
      }
      return true
    }
  },
  components: {
    topNav
  },
  methods: {
    showClassPicker () {
      if (!this.classPicker) {
        this.classPicker = this.$createPicker({
          title: '选择班级',
          data: [classData],
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
          title: '选择班级',
          data: [timeData],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.selectedTime.text = selectedText[0]
            this.selectedTime.value = selectedVal[0]
          }
        })
      }
      this.timePicker.show()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tip
    box-sizing: border-box
    width: 100%
    height: 1.07rem /* 80/75 */
    padding: 0 .4rem /* 30/75 */
    line-height: 1.07rem /* 80/75 */
    font-size: .37rem /* 28/75 */
    text-align: left
    color: #666666
    span
      float: right
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

<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'te-lesson-detail' }"><i></i></router-link>
      </div>
      <div class="title"><p>课程进度计划</p></div>
    </top-nav>
    <div class="select">
      <p>日期<i class="go"></i><span class="right" @click="showDatePicker">{{ selectedDate }}</span></p>
      <!-- <p>状态<span class="right">待上课</span></p> -->
    </div>
    <div class="text">
      <p>当堂内容</p>
      <div id="content-box">
        <cube-textarea v-model="content" name="content" placeholder="请输入内容" :maxlength="maxLength"></cube-textarea>
      </div>
      <p>出勤记录</p>
      <cube-input v-model="attendance" placeholder="请输入出勤记录"></cube-input>
      <p>课本页数</p>
      <cube-input v-model="pages" placeholder="请输入课本页数"></cube-input>
      <div class="btn">
        <cube-button :disabled="btnDisable" @click="submitPlan">确定</cube-button>
      </div>
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
      selectedDate: '请选择',
      content: '',
      attendance: '',
      pages: '',
      maxLength: 500,
      popTip: ''
    }
  },
  computed: {
    btnDisable () {
      return !((this.selectedDate !== '请选择') && this.content && this.attendance && this.pages)
    }
  },
  components: {
    topNav
  },
  methods: {
    showDatePicker () {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: '选择日期',
          min: new Date(2008, 0, 1),
          max: new Date(2030, 11, 31),
          value: new Date(),
          onSelect: this.selectHandle
        })
      }
      this.datePicker.show()
    },
    selectHandle (date, selectedVal, selectedText) {
      for (let i = 0; i < selectedText.length; i++) {
        if (parseInt(selectedText[i]) < 10) {
          selectedText[i] = '0' + selectedText[i]
        }
      }
      this.selectedDate = `${selectedText.join('-')}`
    },
    submitPlan () {
      this.$http.post('/api/mobile/index.php?act=member_index&op=class_schedule', {
        key: this.$store.state.user.key,
        id: this.$route.params.id,
        content: this.content,
        attendance_log: this.attendance,
        pagination: this.pages
      }).then((res) => {
        this.popTip = res
        this.$common.showPopup(this.$refs.tipPopup)
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
  .select
    margin-bottom: .21rem /* 16/75 */
    background: #ffffff
    p
      box-sizing: border-box
      width: 100%
      height: 1.44rem /* 108/75 */
      line-height: 1.44rem /* 108/75 */
      padding: 0 .4rem /* 30/75 */
      border-top: 1px solid #f8f8f8
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
    position: absolute
    top: 3.04rem /* 228/75 */  /* 上方增加"状态"后的top: 4.48rem */
    bottom: 0
    box-sizing: border-box
    width: 100%
    padding: .4rem /* 30/75 */
    text-align: left
    background: #ffffff
    p
      line-height: .64rem /* 48/75 */
      font-size: .45rem /* 34/75 */
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
    .btn
      width: 6.4rem /* 480/75 */
      margin: 2rem auto
      border-radius: .4rem /* 30/75 */
      overflow: hidden

</style>

<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'te-class-attendance' }"><i></i></router-link>
      </div>
      <div class="title"><p>考核成绩</p></div>
    </top-nav>
    <p class="tip">发布成绩</p>
    <p class="chose">班级<span @click="showClassPicker">{{ selectedClass.text }}<i></i></span></p>
    <router-link :to="{ name: 'te-class-mark-step-2', params: { } }">
      <div class="btn">
        <cube-button :disabled="btnDisable">下一步</cube-button>
      </div>
    </router-link>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'

const classData = [
  {
    text: '产品1班', value: '1'
  },
  {
    text: '产品2班', value: '2'
  },
  {
    text: '产品3班', value: '3'
  }
]

export default{
  data () {
    return {
      selectedClass: {
        text: '请选择',
        value: 0
      },
      btnDisable: true
    }
  },
  computed: {

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
            this.btnDisable = false
          }
        })
      }
      this.classPicker.show()
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
  .btn
    width: 6.4rem /* 480/75 */
    margin: 1rem auto
    border-radius: .4rem /* 30/75 */
    overflow: hidden
</style>

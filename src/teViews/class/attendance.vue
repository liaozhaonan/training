<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'te-class' }"><i></i></router-link>
      </div>
      <div class="title"><p>考勤情况</p></div>
    </top-nav>
    <p class="time">班级考勤<span>{{ $common.getFullDate() }}</span></p>
    <p class="chose">年级<span @click="showGradePicker">{{ selectedGrade.text }}<i></i></span></p>
    <p class="chose">班别<span @click="showClassPicker">{{ selectedClass.text }}<i></i></span></p>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
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
      errorTip: ''
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
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .time
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
</style>

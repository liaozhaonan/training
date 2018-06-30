<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'te-class-mark-step-1' }"><i></i></router-link>
      </div>
      <div class="title"><p>考核成绩</p></div>
    </top-nav>
    <p class="tip">第2步: 选择课程,考试类型</p>
    <p class="chose">选择课程<span @click="showLessonPicker">{{ selectedCourse.text }}<i></i></span></p>
    <p class="chose">选择考试类型<span @click="showRecordPicker">{{ selectedRecord.text }}<i></i></span></p>
    <router-link :to="{ name: 'te-class-mark-step-3', params: {classId: $route.params.classId, type: selectedRecord.value } }">
    </router-link>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="tipPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'

const recordData = [
  {
    text: '期中考', value: '1'
  },
  {
    text: '期末考', value: '2'
  }
]

export default{
  data () {
    return {
      courseData: [],
      selectedCourse: {
        text: '请选择',
        value: 0
      },
      selectedRecord: {
        text: '请选择',
        value: 0
      },
      errorTip: ''
    }
  },
  computed: {

  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getCourseData()
    })
  },
  methods: {
    showLessonPicker () {
      if (!this.lessonPicker) {
        this.lessonPicker = this.$createPicker({
          title: '选择课程',
          data: [this.courseData],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.selectedCourse.text = selectedText[0]
            this.selectedCourse.value = selectedVal[0]
          }
        })
      }
      this.lessonPicker.show()
    },
    showRecordPicker () {
      if (!this.recordPicker) {
        this.recordPicker = this.$createPicker({
          title: '选择考试类型',
          data: [recordData],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.selectedRecord.text = selectedText[0]
            this.selectedRecord.value = selectedVal[0]
            if (this.selectedCourse.value && this.selectedRecord.value) {
              setTimeout(() => {
                this.$router.push({
                  name: 'te-class-mark-step-3',
                  params: {classId: this.$route.params.classId, type: this.selectedRecord.value},
                  query: {course: this.selectedCourse.text}
                })
              }, 1500)
            }
          }
        })
      }
      this.recordPicker.show()
    },
    getCourseData (gradeId) {
      this.$http.post('/api/mobile/index.php?act=member_index&op=course_list', {
        key: this.$store.state.user.key,
        class_id: this.$route.params.classId
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        let courseData = []
        for (let i = 0; i < res.length; i++) {
          let cls = { text: res[i].goods_name, value: `${i}` }
          courseData.push(cls)
        }
        this.courseData = courseData
      })
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

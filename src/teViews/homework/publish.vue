<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'te-lesson-detail' }"><i></i></router-link>
      </div>
      <div class="title"><p>{{ headText }}</p></div>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
        <!-- <div class="select">
          <p>班级<i class="go"></i><span class="right" @click="showClassPicker">{{ selectedClass.text }}</span></p>
          <p>课程<i class="go"></i><span class="right" @click="showLessonPicker">{{ selectedLesson.text }}</span></p>
        </div> -->
        <div class="text">
          <p>标题</p>
          <cube-input v-model="title" placeholder="请输入标题"></cube-input>
          <p>内容</p>
          <div id="content-box">
            <cube-textarea v-model="content" name="content" placeholder="请输入内容" :maxlength="maxLength"></cube-textarea>
          </div>
          <p>添加图片</p>
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

const lessonData = [
  {
    text: '语文', value: '1'
  },
  {
    text: '数学', value: '2'
  },
  {
    text: '计算机', value: '3'
  }
]

export default{
  data () {
    return {
      selectedClass: {
        text: '请选择',
        value: 0
      },
      selectedLesson: {
        text: '请选择',
        value: 0
      },
      title: '',
      content: '',
      maxLength: 500,
      popTip: ''
    }
  },
  computed: {
    btnDisable () {
      return !(this.title && this.content)
    },
    headText () {
      return Number.parseInt(this.$route.params.type) === 1 ? '发布通知' : '发布作业'
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
    showLessonPicker () {
      if (!this.lessonPicker) {
        this.lessonPicker = this.$createPicker({
          title: '选择课程',
          data: [lessonData],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.selectedLesson.text = selectedText[0]
            this.selectedLesson.value = selectedVal[0]
          }
        })
      }
      this.lessonPicker.show()
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
      let files = this.$refs.upload.files
      let fileStr = ''
      for (let i = 0; i < files.length; i++) {
        fileStr += files[i].response.datas
        if (i < files.length - 1) {
          fileStr += ','
        }
      }
      this.$http.post('/api/mobile/index.php?act=member_index&op=notice_homework_add', {
        key: this.$store.state.user.key,
        date: (new Date(this.$route.params.date)).getTime(),
        id: this.$route.params.id,
        goods_id: this.$route.params.lessonId,
        class_id: this.$route.params.classId,
        type: this.$route.params.type,
        title: this.title,
        content: this.content,
        pic: fileStr
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

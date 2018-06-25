<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'te-class' }"><i></i></router-link>
      </div>
      <div class="title"><p>招生管理</p></div>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
          <p>课程</p>
          <cube-input v-model="lesson" placeholder="请输入课程名称"></cube-input>
          <p>课程介绍</p>
          <div class="content-box">
            <cube-textarea v-model="lessonIntro" name="content" placeholder="请输入介绍内容" :maxlength="textMaxLength"></cube-textarea>
          </div>
          <p>教师姓名</p>
          <cube-input v-model="teacherName" placeholder="请输入姓名"></cube-input>
          <p>教师职称</p>
          <cube-input v-model="teacherTitle" placeholder="请输入职称"></cube-input>
          <p>招生人数</p>
          <cube-input v-model="studentNum" placeholder="请输入计划招生数量"></cube-input>
          <p>招生要求</p>
          <div class="content-box">
            <cube-textarea v-model="studentRequire" name="content" placeholder="请输入介绍内容" :maxlength="textMaxLength"></cube-textarea>
          </div>
          <p class="option">开放在线缴费报名: <span><cube-radio-group v-model="onlinePay" :options="payOptions" :horizontal="true" /></span></p>
          <div class="btn">
            <cube-button :disabled="btnDisable">马上发布</cube-button>
          </div>
          <div style="height: 1rem"></div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import '@/assets/styl/header-plus.styl'

export default{
  data () {
    return {
      lesson: '',
      lessonIntro: '',
      textMaxLength: 500,
      teacherName: '',
      teacherTitle: '',
      studentNum: '',
      studentRequire: '',
      onlinePay: 2,
      payOptions: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 2
        }
      ]
    }
  },
  computed: {
    btnDisable () {
      if (this.lesson && this.lessonIntro && this.teacherName && this.teacherTitle && this.studentNum && this.studentRequire) {
        return false
      }
      return true
    }
  },
  components: {
    topNav
  },
  methods: {

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
    .btn
      width: 6.4rem /* 480/75 */
      margin: 1rem auto 1rem
      border-radius: .4rem /* 30/75 */
      overflow: hidden

</style>

<template>
  <div>
      <top-nav>
        <div class="left"><router-link class="back" :to="{ name: 'te-class' }"><i></i></router-link></div>
        <div class="title"><p>课程设置</p></div>
      </top-nav>
      <top-nav class="chose-student">
        <div class="title">
          <div class="search-wrapper">
            <cube-input placeholder="搜索" :clearable="clearable" v-model="searchStudent" ></cube-input>
            <span class="search-btn">搜索</span>
          </div>
        </div>
      </top-nav>
      <div class="student-list">
        <cube-index-list :data="studentData"  @select="selectItem" @title-click="clickTitle"></cube-index-list>
      </div>
      <te-foot-nav :footItem="footItem"></te-foot-nav>
    </div>
</template>
<script>
/* eslint-disable quotes */
import topNav from '@/components/topNav/topNav'
import teFootNav from '@/components/te/footNav/footNav'
/* 拼音首字母插件 https://laravel-china.org/topics/7367/indexlist-of-cube-ui-components */
const studentData = [
  {
    "name": "",
    "items": [
    ]
  },
  {
    "name": "A",
    "items": [
      {
        "name": "小明",
        "value": 3
      },
      {
        "name": "小红",
        "value": 4
      }
    ]
  },
  {
    "name": "B",
    "items": [
      {
        "name": "小强",
        "value": 5
      },
      {
        "name": "小花",
        "value": 6
      }
    ]
  }
]
export default{
  data () {
    return {
      footItem: 3,
      searchStudent: '',
      selectedStudent: null,
      clearable: true,
      studentData: studentData
    }
  },
  computed: {
  },
  components: {
    topNav,
    teFootNav
  },
  mounted () {
  },
  methods: {
    selectItem (item) {
      this.selectedStudent = item.value
      console.log(this.selectedStudent + ':' + item.name)
    },
    clickTitle (title) {
      console.log(title)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  header
    border-bottom: 1px solid #f5f5f5
  .left
    position: absolute!important
    i.back
      width: 1rem
      height: 1.38rem
  .chose-student
    .title
      width: 90%
    .search-wrapper
      position: relative
      height: 1.18rem /* 60/75 */
      padding: .1rem /* 4/75 */ .27rem /* 20/75 */
      background: #ffffff
      .cube-input
        position: absolute
        top: .1rem /* 4/75 */
        left: 0
        width: 62%
        height: 0.9rem
        padding: 0 0.3rem 0 1rem /* 75/75 */
        margin-top: 0.1rem
        border-radius: 0.16rem
        background: url(../../assets/img/select/search.png) no-repeat
        background-color: #f2f2f2
        background-size: .43rem /* 32/75 */.43rem /* 32/75 */
        background-position: .4rem /* 30/75 */ center
        overflow: hidden
        input.cube-input-field
          background-color: none!important
      .search-btn
        display: inline-block
        float: right
        width: 1.82rem /* 140/75 */
        height: 1rem
        margin-top: 0.1rem
        line-height: 1rem
        font-size: .43rem /* 32/75 */
        text-align: center
        color: #0076ff
  .student-list
    position: fixed
    top: 2.66rem
    bottom: 1.33rem
    width: 100%
    padding-bottom: 0.3rem
</style>

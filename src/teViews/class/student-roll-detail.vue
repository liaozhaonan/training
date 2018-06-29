<template>
  <div>
      <top-nav>
        <div class="left">
        <router-link class="back" :to="{ name: 'te-class-roll' }"><i></i></router-link>
      </div>
        <div class="title"><p>学生名册</p></div>
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
      <cube-popup class="tip" :mask="false" :content="errorTip" ref="errPopup" />
      <te-foot-nav :footItem="footItem"></te-foot-nav>
    </div>
</template>
<script>
/* eslint-disable quotes */
import topNav from '@/components/topNav/topNav'
import teFootNav from '@/components/te/footNav/footNav'
/* 拼音首字母插件 https://laravel-china.org/topics/7367/indexlist-of-cube-ui-components */

export default{
  data () {
    return {
      searchStudent: '',
      selectedStudent: null,
      clearable: true,
      studentData: [],
      footItem: 3,
      errorTip: ''
    }
  },
  computed: {
  },
  components: {
    topNav,
    teFootNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$http.post('/api/mobile/index.php?act=member_index&op=student_list', {
        key: vm.$store.state.user.key,
        class_id: to.params.classId
      }).then((res) => {
        if (res.error) {
          vm.errorTip = res.error
          vm.$common.showPopup(vm.$refs.errPopup)
          return
        }
        let studentList = []
        for (let i = 0; i < res.length; i++) {
          studentList.push({name: res.member_name, value: i})
        }
        vm.studentData = vm.$common.formatDocs(studentList)
        vm.studentData.unshift({name:'', items: []})
      })
    })
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
    background: #ffffff
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
    bottom: -1.6rem
    width: 100%
    padding-bottom: 0.3rem
</style>

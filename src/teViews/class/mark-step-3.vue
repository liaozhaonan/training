<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <a class="back" @click="$router.go(-1)"><i></i></a>
      </div>
      <div class="title"><p>考核成绩</p></div>
    </top-nav>
    <p class="tip">第3步: 填写成绩并发布</p>
    <div class="common-scroll-wrapper">
      <div class="list">
        <div class="item" v-for="item in showList" :key="item.value">
          <p>{{ item.name }}</p>
          <cube-input v-model="item.score" type="number" :maxlength="inputMaxLength"></cube-input>
        </div>
      </div>
      <router-link :to="{ name: 'te-class-mark-step-3', params: { } }">
        <div class="btn">
          <cube-button :disabled="btnDisable" @click="submit()">下一步</cube-button>
        </div>
      </router-link>
    </div>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="tipPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'

export default{
  data () {
    return {
      showList: [],
      inputMaxLength: 3,
      value: null,
      errorTip: ''
    }
  },
  computed: {
    btnDisable () {
      let t = false
      for (let student of this.showList) {
        if (student.score === '') {
          t = true
          break
        }
      }
      return t
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getRoll()
    })
  },
  methods: {
    getRoll () {
      this.$http.post('/api/mobile/index.php?act=member_index&op=student_list', {
        key: this.$store.state.user.key,
        class_id: this.$route.params.classId
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        let studentList = []
        for (let i = 0; i < res.length; i++) {
          if (!res[i].member_truename) {
            res[i].member_truename = '匿名' + res[i].member_id
          }
          studentList.push({name: res[i].member_truename, value: res[i].member_id})
        }
        let studentData = this.$common.formatDocs(studentList)
        // studentData.unshift({name: '', items: []})
        for (let type of studentData) {
          for (let student of type.items) {
            student.school_year_id =
            student.score = ''
            this.showList.push(student)
          }
        }
        console.log(this.showList)
      })
    },
    submit () {
      console.log(this.showList)
      // this.$http.post('/api/mobile/index.php?act=member_index&op=achievement_add', {
      //   key: this.$store.state.user.key,
      // }).then((res) => {
      //   this.errorTip = res.error ? res.error : res
      //   this.$common.showPopup(this.$refs.errPopup)
      // })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .btn
    width: 6.4rem /* 480/75 */
    margin: 1rem auto
    border-radius: .4rem /* 30/75 */
    overflow: hidden

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
  .common-scroll-wrapper
    top: 2.45rem
    .list
      display: flex
      flex-wrap: wrap
      justify-content: flex-start
      align-items: center
      box-sizing: border-box
      width: 100%
      padding: .4rem /* 30/75 */
      .item
        flex: 0 0 auto;
        width: 2.13rem /* 160/75 */
        height: 2.13rem /* 160/75 */
        margin-bottom: .4rem /* 30/75 */
        color: #888
        &.ok
          color: #0076ff
        p
          height: .8rem /* 60/75 */
          line-height: .8rem /* 60/75 */
          font-size: .43rem /* 32/75 */
        .cube-input
          width: 85%
          height: 1.07rem /* 80/75 */
          margin: auto
          background: #f2f2f2
          border-radius: .11rem /* 8/75 */
          overflow: hidden
          .cube-input-field
            text-align: center
</style>

<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <a class="back" @click="$router.go(-1)"><i></i></a>
      </div>
      <div class="title"><p>{{ headText }}</p></div>
    </top-nav>
    <div class="scroll-wrapper">
      <cube-scroll>
        <div class="summary">
          <div id="score-chart"></div>
          <p>
            <label class="left"><span class="name">总成绩</span><span class="value">{{ showData.total }}</span></label>
            <label class="right"><span class="name">班级平均分</span><span class="value">{{ showData.cls_total }}</span></label>
          </p>
        </div>
        <div class="subjects">
          <router-link v-for="(s, i) in showData.subjects" :to="{ name: 'examine-compare',  params: {year: $route.params.year, term:$route.params.term, type: $route.params.type}, query: {course: s, a:showData.scores[i]}}" :key="i">
            <p>
              <label class="left"><span class="name">{{ s }}</span><span class="value">{{ showData.scores[i] }}</span></label>
              <label class="right"><span class="name">班级平均分</span><span class="value">{{ showData.cls_scores[i] }}</span><i></i></label>
            </p>
          </router-link>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
export default{
  data () {
    return {
      headText: '',
      showData: {}
    }
  },
  conputed: {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.headText = Number.parseInt(to.params.type) === 1 ? '期中考试' : '期末考试'
      vm.getMarks(to.params.type)
      setTimeout(() => {
        vm.getChart()
      }, 1000)
    })
  },
  components: {
    topNav
  },
  methods: {
    getMarks (type) {
      this.$http.post('/api/mobile/index.php?act=student_index&op=my_achievements', {
        key: this.$store.state.user.key,
        school_year_id: this.$route.params.year,
        term: Number.parseInt(this.$route.params.term) === 1 ? '上学期' : '下学期',
        type: this.$route.params.type
      }).then((res) => {
        if (res.error) {
          this.tipTip = res.error
          this.$common.showPopup(this.$refs.tipPopup)
          return
        }
        let subjects = []
        let scores = []
        let clsScores = []
        for (let i = 0; i < res.list.length; i++) {
          subjects.push(res.list[i].goods_name)
          scores.push(res.list[i].score)
          clsScores.push(res.list[i].average)
        }
        let data = {
          total: res.total_points,
          cls_total: res.class_average,
          subjects: subjects,
          scores: scores,
          cls_scores: clsScores
        }
        this.showData = data
      })
    },
    getChart () {
      let scoreChart = this.$echarts.init(document.getElementById('score-chart'), 'light')
      // 绘制图表
      scoreChart.setOption({
        title: {
        },
        tooltip: {},
        xAxis: {
          data: this.showData.subjects
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: Number.parseInt(this.$route.params.type) === 1 ? '期中考试' : '期末考试',
          type: 'bar',
          data: this.showData.scores
        }]
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .scroll-wrapper
    position: fixed
    top: 1.381rem
    right: 0
    bottom: 0
    left: 0
    p
      width: 100%
      height: 1.17rem /* 88/75 */
      line-height: 1.17rem /* 88/75 */
      font-size: 0
      color: #030303
      border-top: 1px solid #f5f5f5
      label
        display: inline-block
        box-sizing: border-box
        width: 35%
        padding-left: .4rem /* 30/75 */
        font-size: .43rem /* 32/75 */
        text-align: left
        .name
          display: inline-block
          box-sizing: border-box
          text-align: center
          width: 55%
        .value
          color: #8F8E94
      label.right
        width: 65%
        padding: 0 0.5rem 0 0
        i
          float: right
          display: inline-block
          width: .21rem /* 16/75 */
          height: .37rem /* 28/75 */
          margin-top: .4rem /* 30/75 */
          background: url(../../assets/img/timetable/r-black.png) no-repeat
          background-size: contain
    .summary
      background: #ffffff
      margin-bottom: .21rem /* 16/75 */
      #score-chart
        box-sizing: border-box
        width: 100%
        height: 7.5rem /* 600/75 */
        padding-left: .27rem /* 20/75 */
    .subjects
      background: #ffffff
</style>

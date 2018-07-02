<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <a class="back" @click="$router.go(-1)"><i></i></a>
      </div>
      <div class="title"><p>{{ headText }}成绩进退情况</p></div>
    </top-nav>
    <div id="compare-chart"></div>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
export default{
  data () {
    return {
      headText: '单科',
      cmpScore: null,
      scoresData: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getCmpMarks()
      setTimeout(() => {
        vm.getChart()
      }, 2000)
    })
  },
  components: {
    topNav
  },
  methods: {
    getCmpMarks () {
      this.$http.post('/api/mobile/index.php?act=student_index&op=my_achievements', {
        key: this.$store.state.user.key,
        school_year_id: this.$route.params.year,
        term: Number.parseInt(this.$route.params.term) === 1 ? '上学期' : '下学期',
        type: Number.parseInt(this.$route.params.type) === 1 ? '2' : '1'
      }).then((res) => {
        if (res.error) {
          this.tipTip = res.error
          this.$common.showPopup(this.$refs.tipPopup)
          return
        }
        for (let i = 0; i < res.list.length; i++) {
          if (this.$route.query.course === res.list[i].goods_name) {
            this.cmpScore = res.list[i].score
          }
        }
        Number.parseInt(this.$route.params.type) === 1
          ? this.scoresData = [this.$route.query.a, this.cmpScore]
          : this.scoresData = [this.cmpScore, this.$route.query.a]
      })
    },
    getChart () {
      let compareChart = this.$echarts.init(document.getElementById('compare-chart'), 'light')
      // 绘制图表
      compareChart.setOption({
        xAxis: {
          type: 'category',
          data: ['期中', '期末']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.scoresData,
          type: 'line'
        }],
        tooltip: {
          data: this.scoresData
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  h5
    width: 100%
    height: 1.17rem /* 88/75 */
    line-height: 1.17rem /* 88/75 */
    font-size: .48rem /* 36/75 */
    text-align: center
    color: #030303
    background: #ffffff
  #compare-chart
    width: 70%
    height: 9.33rem /* 700/75 */
    margin-top: .27rem /* 20/75 */
    padding: 0 15%
    background: #ffffff
</style>

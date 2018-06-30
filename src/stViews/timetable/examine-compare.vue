<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <a class="back" @click="$router.go(-1)"><i></i></a>
      </div>
      <div class="title"><p>{{ headText }}考试成绩进退情况</p></div>
    </top-nav>
    <div id="compare-chart"></div>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
export default{
  data () {
    return {
      headText: '科目'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getChart()
    })
  },
  components: {
    topNav
  },
  methods: {
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
          data: [86, 94],
          type: 'line'
        }],
        tooltip: {
          data: [86, 94]
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

<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'timetable' }"><i></i></router-link>
      </div>
      <div class="title"><p>考试记录</p></div>
    </top-nav>
    <h5>数学科成绩进退情况</h5>
    <div id="compare-chart"></div>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
export default{
  data () {
    return {

    }
  },
  mounted () {
    this.getChart()
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
    height: 7.5rem /* 600/75 */
    margin-top: .21rem /* 16/75 */
    padding: 0 15%
    background: #ffffff
</style>

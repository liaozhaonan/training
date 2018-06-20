<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'timetable' }"><i></i></router-link>
      </div>
      <div class="title"><p>考试成绩</p></div>
    </top-nav>
    <div class="scroll-wrapper">
      <cube-scroll>
        <div class="summary">
          <div id="score-chart"></div>
          <p>
            <label class="left"><span class="name">总成绩</span><span class="value">460</span></label>
            <label class="right"><span class="name">班级平均分</span><span class="value">443</span></label>
          </p>
        </div>
        <div class="subjects">
          <p>
            <label class="left"><span class="name">语文</span><span class="value">78</span></label>
            <label class="right"><span class="name">班级平均分</span><span class="value">80</span><i></i></label>
          </p>
          <p>
            <label class="left"><span class="name">数学</span><span class="value">86</span></label>
            <label class="right"><span class="name">班级平均分</span><span class="value">86</span><i></i></label>
          </p>
          <p>
            <label class="left"><span class="name">英语</span><span class="value">96</span></label>
            <label class="right"><span class="name">班级平均分</span><span class="value">88</span><i></i></label>
          </p>
          <p>
            <label class="left"><span class="name">物理</span><span class="value">90</span></label>
            <label class="right"><span class="name">班级平均分</span><span class="value">83</span><i></i></label>
          </p>
          <p>
            <label class="left"><span class="name">化学</span><span class="value">92</span></label>
            <label class="right"><span class="name">班级平均分</span><span class="value">94</span><i></i></label>
          </p>
          <p>
            <label class="left"><span class="name">生物</span><span class="value">98</span></label>
            <label class="right"><span class="name">班级平均分</span><span class="value">92</span><i></i></label>
          </p>
          <p>
            <label class="left"><span class="name">地理</span><span class="value">86</span></label>
            <label class="right"><span class="name">班级平均分</span><span class="value">87</span><i></i></label>
          </p>
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
      let scoreChart = this.$echarts.init(document.getElementById('score-chart'), 'light')
      // 绘制图表
      scoreChart.setOption({
        title: {
        },
        tooltip: {},
        xAxis: {
          data: ['语文', '数学', '英语', '物理', '化学', '生物', '地理']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '期中考试',
          type: 'bar',
          data: [78, 86, 96, 90, 92, 98, 86]
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
      padding-bottom: .13rem /* 10/75 */
</style>

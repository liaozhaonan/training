<template>
  <div>
    <div class="top">
      <label>
        <span class="note">通知</span><span class="work active">作业</span>
      </label>
      <span class="right">发布</span>
    </div>
    <div class="list">
      <cube-scroll>
        <div class="item">
          <p>产品1班<span class="right">2018-06-18</span></p>
          <span>平面设计点线面三维立体</span>
        </div>
        <div class="item">
          <p>动画1班<span class="right">2018-06-18</span></p>
          <span>MG动画</span>
        </div>
        <div class="item">
          <p>产品1班<span class="right">2018-06-18</span></p>
          <span>人人都是产品经理</span>
        </div>
        <div class="item">
          <p>产品1班<span class="right">2018-06-18</span></p>
          <span>平面设计点线面三维立体</span>
        </div>
        <div class="item">
          <p>动画1班<span class="right">2018-06-18</span></p>
          <span>MG动画</span>
        </div>
        <div class="item">
          <p>产品1班<span class="right">2018-06-18</span></p>
          <span>人人都是产品经理</span>
        </div>
        <div class="item">
          <p>产品1班<span class="right">2018-06-18</span></p>
          <span>平面设计点线面三维立体</span>
        </div>
      </cube-scroll>
    </div>
    <te-foot-nav :footItem="footItem"></te-foot-nav>
  </div>
</template>

<script>
import teFootNav from '@/components/te/footNav/footNav'
export default{
  data () {
    return {
      footItem: 2
    }
  },
  components: {
    teFootNav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .top
    height: 1.15rem /* 86/75 */
    line-height: 1.17rem /* 88/75 */
    font-size: 0
    text-align: center
    background: #fafafa
    span
      display: inline-block
      box-sizing: border-box
      width: 2.03rem /* 152/75 */
      height: .8rem /* 60/75 */
      line-height: .85rem /* 60/75 */
      font-size: .43rem /* 32/75 */
      color: #0076FF
    label
      display: inline-block
      height: 0.8rem
      margin-top: 0.19rem
      // border: 1px solid #0076ff
      border-radius: .11rem /* 8/75 */
      overflow: hidden
      span
        color: #aaa
        background: #eee
        &.active
          color: #ffffff
          background: #0076FF
    .right
      position: absolute
      top: .17rem /* 13/75 */
      right: 0

  .list
    position: absolute
    top: 1.17rem
    bottom: 1.33rem
    width: 100%
    .item
      position: relative
      padding: .11rem /* 8/75 */ 0 .11rem /* 8/75 */ .4rem /* 30/75 */
      text-align: left
      border-bottom: 1px solid #f5f5f5
      background: #ffffff
      p
        height: .8rem /* 60/75 */
        line-height: .8rem /* 60/75 */
        font-size: .43rem /* 32/75 */
      span
        display: inline-block
        height: .53rem /* 40/75 */
        line-height: .53rem /* 40/75 */
        font-size: .33rem /* 25/75 */
        color: #8F8E94
        &.right
          float: right
          margin: .13rem /* 10/75 */ .53rem /* 40/75 */
</style>

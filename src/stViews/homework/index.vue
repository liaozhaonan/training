<template>
  <div>
    <div class="top">
      <label>
        <span class="left">通知</span><span class="right active">作业</span>
      </label>
    </div>
    <div class="list">
      <cube-scroll>
        <div class="item">
          <p>8月17日15时作业: UI课的作业</p>
          <span>产品1班</span>
          <i></i>
        </div>
        <div class="item">
          <p>8月17日15时作业: UI课的作业</p>
          <span>产品1班</span>
          <i></i>
        </div>
        <div class="item">
          <p>8月17日15时作业: UI课的作业</p>
          <span>产品1班</span>
          <i></i>
        </div>
        <div class="item">
          <p>8月17日15时作业: UI课的作业</p>
          <span>产品1班</span>
          <i></i>
        </div>
        <div class="item">
          <p>8月17日15时作业: UI课的作业</p>
          <span>产品1班</span>
          <i></i>
        </div>
        <div class="item">
          <p>8月17日15时作业: UI课的作业</p>
          <span>产品1班</span>
          <i></i>
        </div>
        <div class="item">
          <p>8月17日15时作业: UI课的作业</p>
          <span>产品1班</span>
          <i></i>
        </div>
        <div class="item">
          <p>8月17日15时作业: UI课的作业</p>
          <span>产品1班</span>
          <i></i>
        </div>
        <div class="item">
          <p>8月17日15时作业: UI课的作业</p>
          <span>产品1班</span>
          <i></i>
        </div>
        <div class="item">
          <p>8月17日15时作业: UI课的作业</p>
          <span>产品1班</span>
          <i></i>
        </div>
        <div class="item">
          <p>8月17日15时作业: UI课的作业</p>
          <span>产品1班</span>
          <i></i>
        </div>
        <div class="item">
          <p>8月17日15时作业: UI课的作业</p>
          <span>产品1班</span>
          <i></i>
        </div>
      </cube-scroll>
    </div>
    <st-foot-nav :footItem="footItem"></st-foot-nav>
  </div>
</template>

<script>
import stFootNav from '@/components/st/footNav/footNav'
export default{
  data () {
    return {
      footItem: 2
    }
  },
  components: {
    stFootNav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .top
    height: 1.17rem /* 88/75 */
    line-height: 1.17rem /* 88/75 */
    font-size: 0
    text-align: center
    background: #fafafa
    label
      display: inline-block
      height: 0.8rem
      margin-top: 0.19rem
      // border: 1px solid #0076ff
      border-radius: .11rem /* 8/75 */
      overflow: hidden
      span
        display: inline-block
        box-sizing: border-box
        width: 2.03rem /* 152/75 */
        height: .8rem /* 60/75 */
        line-height: .85rem /* 60/75 */
        font-size: .43rem /* 32/75 */
        color: #aaa
        background: #eee
        &.active
          color: #ffffff
          background: #0076FF
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
        display: block
        height: .53rem /* 40/75 */
        line-height: .53rem /* 40/75 */
        font-size: .33rem /* 25/75 */
        color: #8F8E94
      i
        position: absolute
        top: 0.6rem
        right: .53rem /* 40/75 */
        display: inline-block
        width: .21rem /* 16/75 */
        height: .43rem /* 32/75 */
        background: url(../../assets/img/timetable/r-black.png) no-repeat
        background-size: contain
</style>

<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'timetable' }"><i></i></router-link>
      </div>
      <div class="title"><p>课程进度计划</p></div>
    </top-nav>
    <h5>2018-07-18</h5>
    <div class="info">
      <p><span class="left">状态:</span><span style="display: inline-block"><label class="active">待上课</label><label>已上课</label></span></p>
      <p><span class="left">出勤记录:</span><span>45/50</span></p>
      <p><span class="left">课本页数:</span><span>60</span></p>
      <div class="content">
        <div class="left">
          <p>当堂内容:</p>
        </div>
        <div class="right">
          <p>1、动效动画</p>
          <p>2、区块链</p>
          <p>3、大数据</p>
          <p>4、数据结构</p>
          <p>5、机器学习</p>
        </div>
      </div>
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
  components: {
    topNav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  h5
    width: 100%
    height: 1.17rem /* 88/75 */
    padding-left: 5%
    line-height: 1.17rem /* 88/75 */
    font-size: .48rem /* 36/75 */
    text-align: left
    color: #030303
    background: #ffffff
  .info
    margin: .21rem /* 16/75 */ 0
    background: #ffffff
    padding: 5%
    p
      box-sizing: border-box
      height: 1rem /* 75/75 */
      line-height: 1rem /* 75/75 */
      font-size: .43rem /* 32/75 */
      text-align: left
      color: #8F8E94
      .left
        display: inline-block
        width: 2.35rem /* 176/75 */
        color: #030303
      label
        display: inline-block
        box-sizing: border-box
        width: 1.07rem /* 80/75 */
        height: .53rem /* 40/75 */
        padding-top: 1.5px
        margin-right: .27rem /* 20/75 */
        line-height: .53rem /* 40/75 */
        font-size: .27rem /* 20/75 */
        text-align: center
      label.active
        color: #fff
        background: #0076FF
        border-radius: .07rem /* 5/75 */
    .content
      font-size: 0
      & > div
        display: inline-block
      .left
        width: 2.35rem /* 176/75 */
        vertical-align: top
        p
          line-height: 0.6rem
          color: #030303
      .right
        width: calc(100% - 2.35rem)
        p
          height: auto
          padding-bottom: .11rem /* 8/75 */
          line-height: 0.6rem
</style>

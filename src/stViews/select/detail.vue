<template>
  <div>
    <router-link :to="{ name: 'select-index' }" class="back"><i></i></router-link>
    <div class="scroll-wrapper">
      <cube-scroll>
        <div class="poster">
          <img src="" alt="名称">
        </div>
        <div class="title">
          <h1>朗斯教育</h1>
          <p>
            <i></i><i></i><i></i><i></i><i></i>
            <span class="connect"><cube-button>联系客服</cube-button></span>
          </p>
        </div>
        <div class="info">
          <p><i class="cubeic-location"></i>广州市越秀区先烈中路80号汇华商贸大厦1910随行科技内</p>
          <p><i class="cubeic-phone"></i>15812345678</p>
        </div>
        <div class="intro">
          <h1>课程介绍</h1>
          <p>走向名牌初中语文产品专为即将升入初中的小学高年级学生打造。课程分为四期，一年完成，内 容涵盖小学阶段的重点语文知识、小升初考点题型、应试技巧、模拟考试等。 通过知识串讲、考点突破、技巧提升,模拟演练等系统学习，可以让学生扎实掌握知识点,学会使用多种应试技巧和高 分攻略。走向名牌初中语文产品专为即将升入初中的小学高年级学生打造。课程分为四期，一年完成，内 容涵盖小学阶段的重点语文知识、小升初考点题型、应试技巧、模拟考试等。 通过知识串讲、考点突破、技巧提升,模拟演练等系统学习，可以让学生扎实掌握知识点,学会使用多种应试技巧和高 分攻略。走向名牌初中语文产品专为即将升入初中的小学高年级学生打造。课程分为四期，一年完成，内 容涵盖小学阶段的重点语文知识、小升初考点题型、应试技巧、模拟考试等。 通过知识串讲、考点突破、技巧提升,模拟演练等系统学习，可以让学生扎实掌握知识点,学会使用多种应试技巧和高 分攻略。</p>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .back > i
    display: inline-block
    position: absolute
    top: .53rem /* 40/75 */
    left: .4rem /* 30/75 */
    width: .75rem /* 56/75 */
    height: .75rem /* 56/75 */
    background: url(../../assets/img/select/back-o.png) no-repeat
    background-size: contain
    z-index: 1000
  .scroll-wrapper
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .title, .info, .intro
      padding: .27rem /* 20/75 */ .4rem /* 30/75 */
      text-align: left
      background: #ffffff
    .poster
      position: relative
      width: 100%
      height: 6.93rem /* 520/75 */
      line-height: 6.93rem
      img
        display: block
        width: 100%
        height: 6.93rem /* 520/75 */
    .title
      padding-bottom: .4rem /* 30/75 */
      border-bottom: 1px solid #f8f8f8
      h1
        height: .85rem /* 64/75 */
        line-height: .85rem /* 64/75 */
        font-size: .59rem /* 44/75 */
      p
        height: .85rem /* 64/75 */
        i
          display: inline-block
          width: .59rem /* 44/75 */
          height: .59rem /* 44/75 */
          margin-top: .27rem /* 20/75 */
          background: url(../../assets/img/select/star-s.png) no-repeat
          background-size: contain
        .connect
          display: inline-block
          float: right
          border-radius: .16rem /* 12/75 */
          overflow: hidden
          .cube-btn
            font-size: .4rem /* 30/75 */
            background: #0076ff
          .cube-btn:active
            background: #136cd4
    .info
      margin-bottom: .21rem /* 16/75 */
      p
        position: relative
        line-height: .64rem /* 48/75 */
        font-size: .43rem /* 32/75 */
        padding-left: .67rem /* 50/75 */
        color: #333333
        i
          position: absolute
          left: .05rem /* 4/75 */
      p:last-child
        padding-top: .11rem /* 8/75 */
    .intro
      padding: .4rem /* 30/75 */ .4rem /* 30/75 */ .67rem /* 50/75 */
      h1
        line-height: .64rem /* 48/75 */
        font-size: .43rem /* 32/75 */
        color: #030303
      p
        line-height: .64rem /* 48/75 */
        font-size: .43rem /* 32/75 */
        color: #8F8E94
</style>

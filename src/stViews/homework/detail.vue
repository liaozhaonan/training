<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'timetable' }"><i></i></router-link>
      </div>
      <div class="title"><p>作业详情</p></div>
    </top-nav>
    <div class="top">
      <h2>产品课程作业</h2>
      <p>
        <span class="left">发布者: 张老师</span>&nbsp;
        <span class="right">发布时间: 2017-08-25</span>
      </p>
    </div>
    <div class="detail">
      <p>1 完成课本50页习题</p>
      <p>2 以荷花为原型，尽可能多的画出他的衍生结构。并在此基础上设计一套以荷花为主题的文创产品</p>
      <p>3 课后多观察周边的有趣景象，并把它记录下来。</p>
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
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .top
    padding: .27rem /* 20/75 */ .4rem /* 30/75 */
    background-color: #ffffff
    h2
      line-height: 1.07rem /* 80/75 */
      font-size: .59rem /* 44/75 */
      text-align: left
    p
      width: 100%
      font-size: .37rem /* 28/75 */
      color: #8F8E94
      .left
        float: left
      .right
        float: right
  .detail
    background-color: #ffffff
    padding: .27rem /* 20/75 */ .4rem /* 30/75 */
    margin: .21rem /* 16/75 */ 0
    p
      padding: .05rem /* 4/75 */ 0
      line-height: .64rem /* 48/75 */
      font-size: .43rem /* 32/75 */
      text-align: left
      color: #333333

</style>

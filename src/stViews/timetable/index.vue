<template>
  <div>
    <top-nav id="first">
      <div class="left">
        <router-link class="back" :to="{ name: 'examine' }"><i class="examine"></i></router-link>
      </div>
      <div class="title"><p>课表主页</p></div>
      <div class="right"><router-link class="forward"  :to="{ name: 'sign' }"><i class="scan"></i></router-link></div>
    </top-nav>
    <top-nav id="second">
      <div class="left">
        <router-link class="back" :to="{ path: '' }"><i></i></router-link>
      </div>
      <div class="title"><p>2018-06-22</p></div>
      <div class="right"><a class="forward"><i></i></a></div>
    </top-nav>
    <div class="scroll-wrapper">
      <cube-scroll>
        <div class="am">
          <lesson>
            <p slot="no" class="no">第一节</p>
            <p slot="time" class="time">8:00-8:45</p>
            <p>数学</p>
          </lesson>
          <lesson>
            <p slot="no" class="no">第二节</p>
            <p slot="time" class="time">8:55-9:40</p>
            <p>英语</p>
          </lesson>
          <lesson>
            <p slot="no" class="no">第三节</p>
            <p slot="time" class="time">9:50-10:35</p>
            <p>化学</p>
          </lesson>
          <lesson>
            <p slot="no" class="no">第四节</p>
            <p slot="time" class="time">10:45-11:30</p>
            <p>语文</p>
          </lesson>
        </div>
        <p class="noon">午休</p>
        <div class="pm">
          <lesson>
            <p slot="no" class="no">第五节</p>
            <p slot="time" class="time">14:00-14:45</p>
            <p>物理</p>
          </lesson>
          <lesson>
            <p slot="no" class="no">第六节</p>
            <p slot="time" class="time">14:55-15:40</p>
            <p>体育</p>
          </lesson>
          <lesson>
            <p slot="no" class="no">第七节</p>
            <p slot="time" class="time">16:10-16:55</p>
            <p>生物</p>
          </lesson>
          <lesson>
            <p slot="no" class="no">第八节</p>
            <p slot="time" class="time">17:05-17:50</p>
            <p>活动</p>
          </lesson>
        </div>
      </cube-scroll>
    </div>
    <st-foot-nav :footItem="footItem"></st-foot-nav>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import stFootNav from '@/components/st/footNav/footNav'
import lesson from '@/components/lesson/lesson'
import '@/assets/styl/header-plus.styl'
export default{
  data () {
    return {
      footItem: 1
    }
  },
  components: {
    topNav,
    stFootNav,
    lesson
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #first
    i.examine
      background: url(../../assets/img/timetable/examine.png) no-repeat
      background-size: contain
      width: .59rem /* 44/75 */
      height: .59rem /* 44/75 */
    i.scan
      background: url(../../assets/img/timetable/scan.png) no-repeat
      background-size: contain
      width: .59rem /* 44/75 */
      height: .59rem /* 44/75 */
  #second
    margin-bottom: .21rem /* 16/75 */
    background: #fff
    .title
      color: #0076FF
      font-size: .43rem /* 32/75 */
  .scroll-wrapper
    height: 13.47rem /* 1010/75 */
    .am
      & > div
        border-bottom: 1px solid #f0f0f0
    .noon
      width: 100%
      height: .8rem /* 60/75 */
      font-size: .43rem /* 32/75 */
      line-height: .8rem /* 60/75 */
    .pm
      & > div
        border-bottom: 1px solid #f0f0f0
</style>

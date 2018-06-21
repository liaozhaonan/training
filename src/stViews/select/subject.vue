<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'select-index' }"><i></i></router-link>
      </div>
      <div class="title"><p>化学</p></div>
    </top-nav>
    <div class="search-wrapper">
      <cube-input placeholder="搜索课程" :clearable="clearable" v-model="searchLesson" ></cube-input>
      <span class="search-btn">搜索</span>
    </div>
    <div class="subject-wrapper">
      <cube-scroll>
        <div class="lesson-box">
          <div class="lesson">
            <div class="image"><img src="" alt=""></div>
            <div class="info">
              <p><span class="name">未来之星教育</span><span class="right">越秀区</span></p>
              <p><span class="star"><i></i><i></i></span><span class="right">0.7KM</span></p>
            </div>
          </div>
          <div class="lesson">

          </div>
          <div class="lesson">

          </div>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
/* eslint-disable quotes */
import topNav from '@/components/topNav/topNav'

export default{
  data () {
    return {
      searchLesson: '',
      clearable: true
    }
  },
  computed: {

  },
  components: {
    topNav
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search-wrapper
    position: relative
    height: 1rem /* 75/75 */
    padding: .1rem /* 4/75 */ .27rem /* 20/75 */
    background: #ffffff
    .cube-input
      position: absolute
      top: .1rem /* 4/75 */
      left: .4rem /* 30/75 */
      width: 62%
      height: 1rem /* 60/75 */
      padding: 0 0.3rem 0 1rem /* 75/75 */
      background: url(../../assets/img/select/search.png) no-repeat
      background-color: #fafafa
      background-size: .43rem /* 32/75 */.43rem /* 32/75 */
      background-position: .4rem /* 30/75 */ center
      input.cube-input-field
        background-color: none!important
    .search-btn
      display: inline-block
      float: right
      width: 1.6rem
      height: 1rem /* 75/75 */
      line-height: 1rem /* 75/75 */
      font-size: .43rem /* 32/75 */
      border-radius: .16rem /* 12/75 */
      color: #0076ff
  .subject-wrapper
    position:fixed
    top: 2.58rem
    bottom: 0
    width: 100%
    .lesson-box
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      padding: .4rem /* 30/75 */
      .lesson
        box-sizing: border-box
        width: 48%
        height: 5.39rem /* 404/75 */
        margin: .19rem /* 14/75 */ 0
        background: #ffffff
        .image
          width: 100%
          height: 3.73rem /* 280/75 */
          border-bottom: 1px solid #f8f8f8
          img
            width: 100%
            height: 3.73rem /* 280/75 */
        .info
          box-sizing: border-box
          width: 100%
          height: 1.4rem /* 120/75 */
          padding: 0.1rem .2rem /* 15/75 */ 0 .13rem /* 10/75 */
          p
            position: relative
            width: 100%
            height: .7rem /* 60/75 */
            line-height: .7rem /* 60/75 */
            font-size: .43rem /* 32/75 */
            .name, .star
              display: inline-block
              position: absolute
              left: 0
              width: 65%
              height: .7rem /* 60/75 */
              white-space: nowrap
              overflow: hidden
              text-align: left
              text-overflow: ellipsis
            .right
              display: inline-block
              position: absolute
              right: 0
              line-height: 0.8rem
              font-size: .35rem /* 26/75 */
              color: #8F8E94
            i
              display: inline-block
              width: .32rem /* 24/75 */
              height: .32rem /* 24/75 */
              background: url(../../assets/img/select/star-s.png) no-repeat
              background-size: contain
</style>

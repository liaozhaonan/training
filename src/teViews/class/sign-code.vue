<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'te-class-sign' }"><i></i></router-link>
      </div>
      <div class="title"><p>活动: {{ $route.query.name }}</p></div>
    </top-nav>
    <div class="code"><img :src="$route.query.img" alt=""></div>
    <p>截屏分享出去即可</p>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import '@/assets/styl/header-plus.styl'

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
  header
    .left
      position: absolute!important
      & > a
        width: 100%
        height: 1.38rem
    .title
      p
        white-space: nowrap
        text-align: left
        text-overflow: ellipsis
        overflow: hidden
  .code
    width: 4rem /* 300/75 */
    height: 4rem /* 300/75 */
    margin: 1.6rem /* 120/75 */ auto .13rem /* 10/75 */
    background: #ffffff
    overflow: hidden
    img
      width: 4rem
      height: 4rem
  p
    font-size: .43rem /* 32/75 */
    line-height: 1.07rem /* 80/75 */
</style>

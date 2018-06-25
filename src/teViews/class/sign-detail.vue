<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'te-class-sign' }"><i></i></router-link>
      </div>
      <div class="title"><p>扫码详情</p></div>
    </top-nav>
    <div class="detail">
      <p>班级: <span>产品1班</span></p>
      <p>应到: <span>48人</span></p>
      <p>实到: <span>43人</span></p>
    </div>
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
  body
    background: #ffffff
  header
    .left
      position: absolute!important
      & > a
        width: 100%
        height: 1.38rem
  .detail
    padding: 1rem
  p
    font-size: .43rem /* 32/75 */
    line-height: 1.07rem /* 80/75 */
</style>

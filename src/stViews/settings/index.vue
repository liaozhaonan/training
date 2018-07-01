<template>
  <div>
    <top-nav>
      <div class="title"><p>设置</p></div>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
        <div class="list">
          <!-- <router-link :to="{ name: 'settings-change-info', params: {type: 'username'}, query: {content: $store.state.user.username} }"> -->
            <p>用户名<span>{{ $store.state.user.username }}</span></p>
          <!-- </router-link> -->
          <router-link :to="{ name: 'settings-change-info', query: {type: 'member_truename', content: $store.state.user.member_truename || '未填写'} }">
            <p>真实姓名<span>{{ $store.state.user.member_truename || $route.query.member_truename || '未填写' }}</span></p>
          </router-link>
          <router-link :to="{ name: 'settings-change-info', query: {type: 'genearch_name', content: $store.state.user.genearch_name || '未填写'} }">
            <p>监护人姓名<span>{{ $store.state.user.genearch_name || $route.query.genearch_name || '未填写' }}</span></p>
          </router-link>
          <router-link :to="{ name: 'settings-change-mobile',  query: {content: $store.state.user.mobile || $route.query.mobile || '未填写'} }">
            <p>手机号<span>{{ $store.state.user.mobile  || '无' }}</span></p>
          </router-link>
        </div>
      </cube-scroll>
    </div>
    <st-foot-nav :footItem="footItem"></st-foot-nav>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import stFootNav from '@/components/st/footNav/footNav'
import '@/assets/styl/header-plus.styl'
export default{
  data () {
    return {
      footItem: 5
    }
  },
  components: {
    topNav,
    stFootNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('settings-index')
    })
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .sign-in
    display: inline-block
    position: absolute
    right: .4rem /* 30/75 */
    line-height: 1.38rem
    font-size: .43rem /* 32/75 */
    & > a
      color: #0076ff
      &:active
        color: #0050ff
  .common-scroll-wrapper
    background-color: #f2f2f2
    .list
      width: 100%
      margin-top: .27rem /* 20/75 */
      background-color: #ffffff
      p
        box-sizing: border-box
        width: 100%
        height: 1.63rem /* 122/75 */
        padding: 0 .4rem /* 30/75 */
        line-height: 1.49rem /* 112/75 */
        font-size: .45rem /* 34/75 */
        text-align: left
        border-bottom: .03rem /* 2/75 */ solid #f8f8f8
        color: #444
        span
          float: right
          color: #666

</style>

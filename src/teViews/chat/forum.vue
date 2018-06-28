<template>
  <div>
    <top-nav>
      <div class="left">
        <router-link class="back" :to="{ name: 'te-chat' }"><i></i></router-link>
      </div>
      <div class="title"><p>{{ $route.query.forum }}</p></div>
      <router-link class="start" :to="{ name: 'te-chat-forum-post-creating', params: {id: $route.params.id} }">发帖</router-link>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
        <router-link  v-for="post in postList" :to="{ name: 'te-chat-forum-post-detail', params: {id:post.id}, query: {forum: $route.query.forum} }" :key="post.id">
          <div class="item">
            <h5>{{ post.title }}</h5>
            <p class="content">
              {{ post.content }}
            </p>
            <p class="tag">{{ post.member_name }}&nbsp;{{ $common.getFullDate(post.add_time * 1000) }}<span class="right">回帖数: {{ post.reply_num  }}</span></p>
          </div>
        </router-link>
      </cube-scroll>
    </div>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="errPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import '@/assets/styl/header-plus.styl'

export default{
  data () {
    return {
      postList: [],
      errorTip: ''
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$http.post('/api/mobile/index.php?act=forum&op=dynamic_list', {
        key: vm.$store.state.user.key,
        id: vm.$route.params.id
      }).then((res) => {
        if (res.error) {
          vm.errorTip = res.error
          vm.$common.showPopup(vm.$refs.errPopup)
          return
        }
        vm.postList = res
      })
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  header
    .left
      position: absolute
      & > a
        width: 100%
        height: 1.38rem
    .start
      display: inline-block
      position: absolute
      right: .4rem /* 30/75 */
      line-height: 1.38rem
      font-size: .43rem /* 32/75 */
      color: #0076ff
      &:active
        color: #0050ff
  .common-scroll-wrapper
    background-color: #f2f2f2
    .item
      box-sizing: border-box
      width: 100%
      padding: .4rem /* 30/75 */
      margin-bottom: .11rem /* 8/75 */
      border-bottom: 1px solid #f8f8f8
      text-align: left
      background: #ffffff
      & > h5
        font-size: .45rem /* 34/75 */
        line-height: .53rem /* 40/75 */
        color: #303030
      .content
        display:-webkit-box
        -webkit-box-orient:vertical
        -webkit-line-clamp:2
        width: 100%
        max-height: .96rem /* 72/75 */
        font-size: .35rem /* 26/75 */
        line-height: .48rem /* 36/75 */
        margin: .27rem /* 20/75 */ 0
        color: #2a2a2a
        overflow: hidden
        text-overflow: ellipsis
      .tag
        width: 100%
        font-size: .32rem /* 24/75 */
        line-height: .43rem /* 32/75 */
        color: #9f9f9f
        .right
          display: inline-block
          float: right

</style>

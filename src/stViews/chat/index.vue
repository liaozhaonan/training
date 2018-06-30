<template>
  <div>
    <div class="top">
      <label>
        <span class="group" :class="{'active': showTab === 1}" @click="switchSide(1)">班级群聊</span><span class="forum" :class="{'active': showTab === 2}" @click="switchSide(2)">学校论坛</span>
      </label>
    </div>
    <div class="list">
      <cube-scroll v-show="showTab === 1" id="groupPane">
        <div class="item" v-if="!groupList.length" style="text-align: center; background: #f2f2f2"><span>暂无群聊信息</span></div>
        <router-link v-for="item in groupList" :to="{ name: '', params: {} }" :key="item.id" >
          <div class="item">
            <p>{{ item.class_name }}<span class="right">{{ item.date }}</span></p>
            <span>{{ item.content }}</span>
          </div>
        </router-link>
      </cube-scroll>
      <cube-scroll v-show="showTab === 2" id="forumPane">
        <router-link  v-for="item in forumList" :to="{ name: 'chat-forum', params: {id: item.id}, query: {forum: item.forum_name} }" :key="item.id" >
          <div class="item">
            <img :src="item.forum_img" alt="">
            <div class="name">{{ item.forum_name }}</div>
          </div>
        </router-link>
      </cube-scroll>
    </div>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="errPopup" />
    <st-foot-nav :footItem="footItem"></st-foot-nav>
  </div>
</template>

<script>
import stFootNav from '@/components/st/footNav/footNav'
export default{
  data () {
    return {
      footItem: 4,
      groupList: [],
      forumList: [],
      showTab: 1,
      errorTip: ''
    }
  },
  components: {
    stFootNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getGroupList()
      vm.getForumList()
    })
  },
  methods: {
    switchSide (tab) {
      this.showTab = tab
    },
    getGroupList () {
      console.log('敬请期待')
      // this.$http.post('/api', {
      //   key: this.$store.state.user.key
      // }).then((res) => {
      //   if (res.error) {
      //     this.errorTip = res.error
      //     this.$common.showPopup(this.$refs.errPopup)
      //     return
      //   }
      //   // 转换所获取到的列表项的date的格式
      //   for (let i = 0; i < res.length; i++) {
      //     res[i].date = this.$common.getFullDate(res[i].date * 1000)
      //   }
      //   // 异步请求成功后更新显示列表,并将请求结果存入相应类别的列表, 以便下次切换时能够实时替换为显示列表
      //   this.groupList = res
      // })
    },
    getForumList () {
      this.$http.post('/api/mobile/index.php?act=forum&op=forum_list', {
        key: this.$store.state.user.key
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        this.forumList = res
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .top
    height: 1.15rem /* 86/75 */
    padding: 0.12rem 0 0.11rem
    line-height: 1.17rem /* 88/75 */
    font-size: 0
    text-align: center
    background: #fafafa
    span
      display: inline-block
      box-sizing: border-box
      width: 2.3rem /* 152/75 */
      height: .8rem /* 60/75 */
      line-height: .85rem /* 60/75 */
      font-size: .43rem /* 32/75 */
      color: #0076FF
    label
      display: inline-block
      height: 0.8rem
      margin-top: 0.19rem
      // border: 1px solid #0076ff
      border-radius: .11rem /* 8/75 */
      overflow: hidden
      span
        color: #aaa
        background: #eee
        &.active
          color: #ffffff
          background: #0076FF
    .right
      position: absolute
      top: .17rem /* 13/75 */
      right: 0

  .list
    position: absolute
    top: 1.38rem
    bottom: 1.33rem
    width: 100%
    #groupPane
      .item
        position: relative
        padding: .11rem /* 8/75 */ 0 .11rem /* 8/75 */ .4rem /* 30/75 */
        text-align: left
        border-bottom: 1px solid #f5f5f5
        color: #333333
        background: #ffffff
        p
          height: .8rem /* 60/75 */
          line-height: .8rem /* 60/75 */
          font-size: .43rem /* 32/75 */
        span
          display: inline-block
          height: .53rem /* 40/75 */
          line-height: .53rem /* 40/75 */
          font-size: .33rem /* 25/75 */
          color: #8F8E94
          &.right
            float: right
            margin: .13rem /* 10/75 */ .53rem /* 40/75 */
    #forumPane
      padding:  1.07rem /* 80/75 */ .2rem /* 15/75 */
      background: #ffffff
      .item
        display: inline-block
        position: relative
        width: 4rem /* 300/75 */
        height: 3.33rem /* 250/75 */
        margin: 0 calc((49% - 4rem) / 2) .8rem /* 60/75 */
        border-radius: .13rem /* 10/75 */
        overflow: hidden
        img
          width: 4rem /* 300/75 */
          height: 3.33rem /* 250/75 */
        .name
          position: absolute
          top: 0
          bottom: 0
          width: 100%
          line-height: 3.33rem /* 250/75 */
          font-size: .43rem /* 32/75 */
          word-break: break-all
          white-space: pre-wrap
          color: #ffffff
          background: rgba(0, 0, 0, 0.65)
</style>

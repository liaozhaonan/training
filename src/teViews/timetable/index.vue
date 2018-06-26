<template>
  <div>
    <top-nav id="first">
      <div class="title"><p>课表主页</p></div>
    </top-nav>
    <top-nav id="second">
      <div class="left">
        <router-link class="back" :to="{ path: '' }"><i></i></router-link>
      </div>
      <div class="title"><p>{{ selectedDate }}</p></div>
      <div class="right"><a class="forward"><i></i></a></div>
    </top-nav>
    <div class="scroll-wrapper">
      <cube-scroll>
        <div class="am">
          <div v-for="item in lessonList" :key="item.id">
            <p v-if="item.sort == 5" class="noon">午休</p>
            <lesson>
              <p slot="no" class="no">{{ item.lessons }}</p>
              <p slot="time" class="time">{{ item.start_time }}-{{ item.end_time }}</p>
              <p>{{ item.goods_name }}</p>
            </lesson>
          </div>
        </div>
      </cube-scroll>
    </div>
    <cube-popup :mask="false" :content="errorTip" ref="errPopup" />
    <te-foot-nav :footItem="footItem"></te-foot-nav>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import teFootNav from '@/components/te/footNav/footNav'
import lesson from '@/components/lesson/lesson'
import '@/assets/styl/header-plus.styl'
export default{
  data () {
    return {
      footItem: 1,
      errorTip: '',
      selectedDate: '',
      selectedTimestamp: null,
      lessonList: []
    }
  },
  computed: {
  },
  components: {
    topNav,
    teFootNav,
    lesson
  },
  mounted () {
    this.getTimeInfo()
    this.$http.post('/api/mobile/index.php?act=member_index&op=taecher_class_all', {
      key: this.$store.state.user.key, time: this.selectedTimestamp
    }).then((res) => {
      if (res.error) {
        this.errorTip = res.error
        this.$common.showPopup(this.$refs.errPopup)
        return
      }
      this.lessonList = res
    })
  },
  methods: {
    getTimeInfo (s) {
      let date = s ? new Date(s) : new Date()
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      let d = date.getDate()
      this.selectedDate = `${y}-${m}-${d}`
      this.selectedTimestamp = date.getTime()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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

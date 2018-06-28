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
        <a class="back"  @click="getPrev()"><i></i></a>
      </div>
      <div class="title"><p>{{ selectedDate }}</p></div>
      <div class="right">
        <a class="forward" @click="getNext()"><i></i></a>
      </div>
    </top-nav>
    <div class="scroll-wrapper">
      <cube-scroll>
        <div class="am">
          <lesson  v-for="item in amList" :key="item.id">
            <p slot="no" class="no">{{ item.lessons }}</p>
            <p slot="time" class="time">{{ item.start_time }}-{{ item.end_time }}</p>
            <router-link :to="{ name: 'lesson-detail', params: {id: item.id, date: selectedDate} }">{{ item.goods_name }}</router-link>
          </lesson>
        </div>
        <p v-if="amList.length && pmList.length" class="noon">午休</p>
        <div class="pm">
          <lesson  v-for="item in pmList" :key="item.id">
            <p slot="no" class="no">{{ item.lessons }}</p>
            <p slot="time" class="time">{{ item.start_time }}-{{ item.end_time }}</p>
            <router-link :to="{ name: 'lesson-detail', params: {id: item.id, date: selectedDate} }">{{ item.goods_name }}</router-link>
          </lesson>
        </div>
      </cube-scroll>
    </div>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="errPopup" />
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
      footItem: 1,
      selectedDate: '',
      amList: [],
      pmList: [],
      errorTip: ''
    }
  },
  components: {
    topNav,
    stFootNav,
    lesson
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.selectedDate = vm.$common.getFullDate()
      vm.getLessons()
    })
  },
  methods: {
    getLessons () {
      this.amList = []
      this.pmList = []
      this.$http.post('/api/mobile/index.php?act=student_index&op=student_class_all', {
        key: this.$store.state.user.key,
        time: (new Date(this.selectedDate)).getTime()
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        for (let i = 0; i < res.length; i++) {
          res[i].sort < 5 ? this.amList.push(res[i]) : this.pmList.push(res[i])
        }
      })
    },
    getPrev () {
      this.selectedDate = this.$common.getFullDate(this.selectedDate, -1)
      this.getLessons()
    },
    getNext () {
      this.selectedDate = this.$common.getFullDate(this.selectedDate, 1)
      this.getLessons()
    }
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

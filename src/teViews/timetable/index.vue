<template>
  <div>
    <top-nav id="first">
      <div class="title"><p>课表主页</p></div>
    </top-nav>
    <top-nav id="second">
      <div class="left">
        <a class="back" @click="getPrev()"><i></i></a>
      </div>
      <div class="title"><p>{{ selectedDate }}</p></div>
      <div class="right"><a class="forward" @click="getNext()"><i></i></a></div>
    </top-nav>
    <div class="scroll-wrapper">
      <cube-scroll>
        <div class="am">
          <lesson  v-for="item in amList" :key="item.id">
            <p slot="no" class="no">{{ item.lessons }}</p>
            <p slot="time" class="time">{{ item.start_time }}-{{ item.end_time }}</p>
            <router-link :to="{ name: 'te-lesson-detail', params: {id: item.id, date: selectedDate} }">{{ item.goods_name }}</router-link>
          </lesson>
        </div>
        <p v-if="amList.length && pmList.length" class="noon">午休</p>
        <div class="pm">
          <lesson  v-for="item in pmList" :key="item.id">
            <p slot="no" class="no">{{ item.lessons }}</p>
            <p slot="time" class="time">{{ item.start_time }}-{{ item.end_time }}</p>
            <router-link :to="{ name: 'te-lesson-detail', params: {id: item.id, date: selectedDate} }">{{ item.goods_name }}</router-link>
          </lesson>
        </div>
      </cube-scroll>
    </div>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="errPopup" />
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
      selectedDate: '',
      amList: [],
      pmList: [],
      footItem: 1,
      errorTip: ''
    }
  },
  computed: {
  },
  components: {
    topNav,
    teFootNav,
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
      this.$http.post('/api/mobile/index.php?act=member_index&op=taecher_class_all', {
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

<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <a class="back" @click="$router.go(-1)"><i></i></a>
      </div>
      <div class="title"><p>考试成绩</p></div>
    </top-nav>
    <h5>{{ bannerText }}</h5>
    <div class="types">
      <router-link :to="{ name: 'examine-detail', params: { year: $route.params.year, term: $route.params.term, type: '1' } }">
        <div>
          <i class="middle"></i>
          <p>期中</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'examine-detail', params: { year: '2017-2018', term: '2', type: '2' } }">
        <div>
          <i class="final"></i>
          <p>期末</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
export default{
  data () {
    return {
      bannerText: ''
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getBannerText()
    })
  },
  methods: {
    getBannerText () {
      let year = this.$route.params.year
      let yearFrom = 2018 + Number.parseInt(year) - 1
      let yearTo = 2018 + Number.parseInt(year)
      let term = Number.parseInt(this.$route.params.term) === 1 ? '上学期' : '下学期'
      this.bannerText = `${yearFrom}-${yearTo}学年${term}成绩`
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  h5
    width: 100%
    height: 1.17rem /* 88/75 */
    line-height: 1.17rem /* 88/75 */
    font-size: .48rem /* 36/75 */
    text-align: center
    color: #030303
    background: #ffffff
  .types
    box-sizing: border-box
    width: 100%
    padding: .4rem /* 30/75 */ 0 .4rem .4rem
    div
      display: inline-block
      box-sizing: border-box
      width: calc((100% - 1.2rem /* 90/75 */) / 2)
      height: 5.33rem /* 400/75 */
      padding: 1.79rem /* 134/75 */ 0
      margin-right: .4rem /* 30/75 */
      background: #ffffff
      i
        display: block
        width: 1.07rem /* 80/75 */
        height: 1.07rem /* 80/75 */
        margin: auto
      i.middle
        background: url(../../assets/img/timetable/middle.png)
        background-size: contain
      i.final
        background: url(../../assets/img/timetable/final.png)
        background-size: contain
      p
        font-size: .43rem /* 32/75 */
        line-height: .75rem /* 56/75 */
</style>

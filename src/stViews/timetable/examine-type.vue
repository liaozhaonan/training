<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <a class="back" @click="$router.go(-1)"><i></i></a>
      </div>
      <div class="title"><p>考试成绩</p></div>
    </top-nav>
    <!-- <h5>{{ bannerText }}</h5> -->
    <p class="chose">学年<span @click="showYearPicker">{{ selectedYear.text }}<i></i></span></p>
    <p class="chose">学期<span @click="showTermPicker">{{ selectedTerm.text }}<i></i></span></p>

    <div class="types">
      <div @click="goToDetailPage(1)">
        <i class="middle"></i>
        <p>期中</p>
      </div>
      <div @click="goToDetailPage(2)">
        <i class="final"></i>
        <p>期末</p>
      </div>
    </div>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="errPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'

const termData = [
  {text: '上学期', value: '1'},
  {text: '下学期', value: '2'}
]

export default{
  data () {
    return {
      bannerText: '',
      yearData: [],
      selectedYear: {
        text: '请选择',
        value: ''
      },
      selectedTerm: {
        text: '请选择',
        value: ''
      },
      errorTip: ''
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getYearData()
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
    },
    getYearData () {
      this.$http.post('/api/mobile/index.php?act=index&op=school_year_list', {
        key: this.$store.state.user.key
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        let yearData = []
        for (let i = 0; i < res.length; i++) {
          let y = { text: res[i].name, value: res[i].id }
          yearData.push(y)
        }
        this.yearData = yearData
      })
    },
    showYearPicker () {
      if (!this.yearPicker) {
        this.yearPicker = this.$createPicker({
          title: '选择学年',
          data: [this.yearData],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.selectedYear.text = selectedText[0]
            this.selectedYear.value = selectedVal[0]
          }
        })
      }
      this.yearPicker.show()
    },
    showTermPicker () {
      if (!this.termPicker) {
        this.termPicker = this.$createPicker({
          title: '选择学期',
          data: [termData],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.selectedTerm.text = selectedText[0]
            this.selectedTerm.value = selectedVal[0]
          }
        })
      }
      this.termPicker.show()
    },
    goToDetailPage (type) {
      let year = this.selectedYear.value
      let term = this.selectedTerm.value
      if (!(this.selectedYear.value && this.selectedTerm.value)) {
        this.errorTip = '请选择学年及学期'
        this.$common.showPopup(this.$refs.errPopup)
        return
      }
      this.$router.push({ name: 'examine-detail', params: { year: year, term: term, type: type } })
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
  .chose
    box-sizing: border-box
    width: 100%
    height: 1.6rem /* 120/75 */
    padding: 0 .48rem /* 36/75 */ 0 .4rem /* 30/75 */
    line-height: 1.6rem /* 120/75 */
    font-size: .45rem /* 34/75 */
    text-align: left
    border-bottom: 1px solid #f5f5f5
    background: #ffffff
    color: #454545
    span
      float: right
      font-size: .45rem /* 34/75 */
      color: #C4C4C4
      i
        display: inline-block
        width: .16rem /* 12/75 */
        height: .29rem /* 22/75 */
        margin-left: .13rem /* 10/75 */
        background: url(../../assets/img/timetable/r-black.png) no-repeat
        background-size: contain
</style>

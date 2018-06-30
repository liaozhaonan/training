<template>
  <div>
    <top-nav id="search-header">
      <div class="left" name="left" @click="showCities()">
        <a class="back">广州<i></i></a>
      </div>
      <div class="title"><p>可选课程</p></div>
    </top-nav>
    <div class="search-wrapper">
      <cube-input placeholder="搜索课程" :clearable="clearable" v-model="searchLesson" ></cube-input>
      <span class="search-btn">搜索</span>
    </div>
    <div class="commend">
      <span>语言</span><span>艺术</span><span>计算机</span><span>社会学</span>
      <span>语言</span><span>艺术</span><span>计算机</span><span>社会学</span>
      <span>语言</span><span>艺术</span><span>计算机</span><span>社会学</span>
    </div>
    <div class="chose-city" :style="choseCityStyle">
      <top-nav>
        <div class="left" name="left" @click="hideCities">
          <a class="back"><i></i></a>
        </div>
        <div class="title">
          <div class="search-wrapper">
            <cube-input placeholder="城市名，拼音首字母" :clearable="clearable" v-model="searchCity" ></cube-input>
            <span class="search-btn">搜索</span>
          </div>
        </div>
      </top-nav>
      <p>广州<span class="gps">GPS定位</span></p>
      <cube-index-list :data="cityData"  @select="selectItem" @title-click="clickTitle"></cube-index-list>
    </div>
    <st-foot-nav :footItem="footItem"></st-foot-nav>
  </div>
</template>
<script>
/* eslint-disable quotes */
import topNav from '@/components/topNav/topNav'
import stFootNav from '@/components/st/footNav/footNav'
/* 拼音首字母插件 https://laravel-china.org/topics/7367/indexlist-of-cube-ui-components */
const cityData = [
  {
    "name": "★热门城市",
    "items": [
      {
        "name": "北京",
        "value": 1
      },
      {
        "name": "上海",
        "value": 2
      },
      {
        "name": "北京",
        "value": 1
      },
      {
        "name": "上海",
        "value": 2
      },
      {
        "name": "北京",
        "value": 1
      }
    ]
  },
  {
    "name": "A",
    "items": [
      {
        "name": "鞍山",
        "value": 3
      },
      {
        "name": "安庆",
        "value": 4
      }
    ]
  },
  {
    "name": "B",
    "items": [
      {
        "name": "彪山",
        "value": 5
      },
      {
        "name": "渤海",
        "value": 6
      }
    ]
  }
]
export default{
  data () {
    return {
      footItem: 3,
      searchLesson: '',
      searchCity: '',
      clearable: true,
      cityData: cityData,
      currentCity: null
    }
  },
  computed: {
    choseCityStyle () {
      let height = document.documentElement.clientHeight
      return {
        height: height + 'px',
        top: height + 'px'
      }
    }
  },
  components: {
    topNav,
    stFootNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getList(1)
    })
  },
  methods: {
    getList (tab) {
      this.$http.post('/api/mobile/index.php?act=extracurricular&op=extracurricular_list', {
        key: this.$store.state.user.key,
        class_id: 1
      }).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        console.log(res)
      })
    },
    showCities () {
      document.getElementsByClassName('chose-city')[0].style.top = 0
    },
    hideCities () {
      document.getElementsByClassName('chose-city')[0].style.top = document.documentElement.clientHeight + 'px'
    },
    selectItem (item) {
      console.log(item.name)
    },
    clickTitle (title) {
      console.log(title)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #search-header
    .left
      width: 15%!important
      padding-left: .4rem /* 30/75 */;
      text-align: left
      z-index: 1000
      .back
        font-size: .43rem /* 32/75 */
        color: #0076ff
        & > i
          position: absolute
          top: 0.35rem
          margin-left: 0.2rem
          transform: rotate(270deg)
    .title
      position: absolute
      width: 100%!important
  .search-wrapper
    position: relative
    height: 1rem /* 75/75 */
    padding: .1rem /* 4/75 */ .27rem /* 20/75 */
    background: #ffffff
    .cube-input
      position: absolute
      top: .1rem /* 4/75 */
      left: .4rem /* 30/75 */
      width: 62%
      height: 1rem /* 60/75 */
      padding: 0 0.3rem 0 1rem /* 75/75 */
      background: url(../../assets/img/select/search.png) no-repeat
      background-color: #fafafa
      background-size: .43rem /* 32/75 */.43rem /* 32/75 */
      background-position: .4rem /* 30/75 */ center
      input.cube-input-field
        background-color: none!important
    .search-btn
      display: inline-block
      float: right
      width: 1.6rem
      height: 1rem /* 75/75 */
      line-height: 1rem /* 75/75 */
      font-size: .43rem /* 32/75 */
      border-radius: .16rem /* 12/75 */
      color: #0076ff
  .commend
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap
    margin: 1.2rem /* 90/75 */ .4rem /* 30/75 */
    font-size: 0
    span
      flex: 0 0 auto;
      width: 2.45rem /* 184/75 */
      height: 1.17rem /* 88/75 */
      margin: .2rem /* 15/75 */ 0
      border-radius: .13rem /* 10/75 */
      line-height: 1.17rem /* 88/75 */
      font-size: .37rem /* 28/75 */
      color: #030303;
      background: #ffffff
  .chose-city
    position: fixed
    width: 100%
    z-index: 1000
    transition: top 0.5s
    background: #f2f2f2
    .search-wrapper
      height: 1.18rem /* 60/75 */
      width: 100%
      background: #fafafa
      .cube-input
        width: 55%
        height: 0.9rem
        margin-top: 0.15rem
        background-color: #f2f2f2
        border-radius: 0.16rem
        overflow: hidden
      .search-btn
        width: 1.82rem /* 140/75 */
        height: 1rem
        margin-top: 0.1rem
        line-height: 1rem
        font-size: .43rem /* 32/75 */
        text-align: center
    p
      box-sizing: border-box
      width: 100%
      height: 1.17rem /* 88/75 */
      padding-left: .4rem /* 30/75 */
      line-height: 1.17rem /* 88/75 */
      font-size: .43rem /* 32/75 */
      text-align: left
      background: #ffffff
      .gps
        display: inline-block
        padding-left: .4rem /* 30/75 */
        color: #8F8E94

</style>

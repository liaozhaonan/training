<template>
  <div>
    <top-nav>
      <div class="left"><router-link class="back" :to="{ name: 'te-class' }"><i></i></router-link></div>
      <div class="title"><p>课程设置</p></div>
      <router-link class="add" :to="{ name: 'te-class-recruit', params: {} }">
        添加课程
      </router-link>
    </top-nav>
    <div class="common-scroll-wrapper">
      <cube-scroll>
        <div class="list">
          <span v-for="type in typeList" :key="type.id">{{ type.name }}</span>
        </div>
      </cube-scroll>
    </div>
    <cube-popup class="tip" :mask="false" :content="errorTip" ref="errorPopup" />
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import '@/assets/styl/header-plus.styl'
export default{
  data () {
    return {
      typeList: [],
      errorTip: '',
      footItem: 3
    }
  },
  components: {
    topNav
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getTypeData()
    })
  },
  methods: {
    getTypeData () {
      this.$http.post('/api/mobile/index.php?act=index&op=extracurricular_class_list', {}).then((res) => {
        if (res.error) {
          this.errorTip = res.error
          this.$common.showPopup(this.$refs.errPopup)
          return
        }
        this.typeList = res
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  header
    .left
      position: absolute!important
      i.back
        width: 1rem
        height: 1.38rem
    .add
      display: inline-block
      position: absolute
      right: .4rem /* 30/75 */
      line-height: 1.38rem
      font-size: .43rem /* 32/75 */
      color: #0076ff
      &:active
        color: #0050ff
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
    background: #f4f4f4
    .list
      display: flex
      justify-content: space-around
      align-items: center
      flex-wrap: wrap
      box-sizing: border-box
      width: 100%
      padding: .53rem /* 40/75 */ .33rem /* 25/75 */
      span
        flex: 0 0 auto
        display: inline-block
        box-sizing: border-box
        width: 29%
        height: .88rem /* 66/75 */
        margin: 3.5% 2%
        line-height: .88rem /* 66/75 */
        font-size: .43rem /* 32/75 */
        color: #0076FF
        background: #ffffff
        border-radius: .44rem /* 33/75 */
        &.active
          color: #ffffff
          background: #0076FF
</style>

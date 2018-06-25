<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'te-class-mark-step-1' }"><i></i></router-link>
      </div>
      <div class="title"><p>考核成绩</p></div>
    </top-nav>
    <p class="tip">填写成绩</p>
    <div class="common-scroll-wrapper">
      <div class="list">
        <div class="item">
          <p>小明</p>
          <cube-input v-model="value" type="number" :maxlength="inputMaxLength"></cube-input>
        </div>
        <div class="item">
          <p>小明</p>
          <cube-input v-model="value" type="number" :maxlength="inputMaxLength"></cube-input>
        </div>
        <div class="item">
          <p>小明</p>
          <cube-input v-model="value" type="number" :maxlength="inputMaxLength"></cube-input>
        </div>
        <div class="item">
          <p>小明</p>
          <cube-input v-model="value" type="number" :maxlength="inputMaxLength"></cube-input>
        </div>
        <div class="item">
          <p>小明</p>
          <cube-input v-model="value" type="number" :maxlength="inputMaxLength"></cube-input>
        </div>
      </div>
      <router-link :to="{ name: 'te-class-mark-step-3', params: { } }">
        <div class="btn">
          <cube-button :disabled="btnDisable">下一步</cube-button>
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
      btnDisable: true,
      inputMaxLength: 3,
      value: null
    }
  },
  computed: {

  },
  components: {
    topNav
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .btn
    width: 6.4rem /* 480/75 */
    margin: 1rem auto
    border-radius: .4rem /* 30/75 */
    overflow: hidden

  .tip
    box-sizing: border-box
    width: 100%
    height: 1.07rem /* 80/75 */
    padding: 0 .4rem /* 30/75 */
    line-height: 1.07rem /* 80/75 */
    font-size: .37rem /* 28/75 */
    text-align: left
    color: #666666
    span
      float: right
  .common-scroll-wrapper
    top: 2.45rem
    .list
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      align-items: center
      box-sizing: border-box
      width: 100%
      padding: .4rem /* 30/75 */
      .item
        flex: 0 0 auto;
        width: 2.13rem /* 160/75 */
        height: 2.13rem /* 160/75 */
        margin-bottom: .4rem /* 30/75 */
        color: #888
        &.ok
          color: #0076ff
        p
          height: .8rem /* 60/75 */
          line-height: .8rem /* 60/75 */
          font-size: .48rem /* 36/75 */
        .cube-input
          width: 85%
          height: 1.07rem /* 80/75 */
          margin: auto
          background: #f2f2f2
          border-radius: .11rem /* 8/75 */
          overflow: hidden
          .cube-input-field
            text-align: center
</style>

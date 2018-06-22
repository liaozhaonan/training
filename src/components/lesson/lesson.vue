<template>
  <div class="class">
    <div class="left">
      <slot name="no"></slot>
      <slot name="time"></slot>
    </div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .class
    font-size: 0
    width: 100%;
    height: 1.55rem /* 116/75 */
    background: #fff
    .left
      font-size: 0
      display: inline-block
      box-sizing: border-box
      width: 23.5%
      height: 1.52rem /* 114/75 */
      padding: .27rem /* 20/75 */ 0 .16rem /* 12/75 */
      background: #fafafa
      .no
        line-height: .61rem /* 46/75 */
        font-size: .43rem /* 32/75 */
        color: #333
      .time
        line-height: .45rem /* 34/75 */
        font-size: .35rem /* 26/75 */
        color: #8F8E94
    .right
      font-size: 0
      display: inline-block
      position: relative;
      top: -.24rem /* -18/75 */
      box-sizing: border-box
      width: 76.5%
      height: 1.52rem /* 114/75 */
      padding: .53rem /* 40/75 */ 2.19rem /* 164/75 */
      text-align: left
      & > p
        margin: none
        font-size: .48rem /* 36/75 */
        line-height: .48rem /* 36/75 */
        color: #030303
</style>

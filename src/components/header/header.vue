<template>
  <header>
    <slot></slot>
  </header>
</template>

<script>
export default{
  data () {
    return {
      title: '标题'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
header
  display: flex;
  height: 1.38rem;
  background: #fafafa;
  .left
    position: relative;
    width: 10%;
    vertical-align: middle;
    a
      display: inline-block;
      font-size:.5rem;
      line-height: 1.38rem;
  .title
    width: 80%;
    vertical-align: middle;
    font-size: .56rem;
    line-height: 1.38rem;
  .right
    position: relative;
    width: 10%;
    vertical-align: middle;
    font-size: .56rem;
    line-height: 1.38rem;
</style>

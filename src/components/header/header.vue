<template>
  <header>
    <router-link class="back" :to="{ path: '/' }">back</router-link>
    <slot></slot>
    <div class="right">right</div>
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
  height: 1.9rem;
  padding: 0.5rem 0.2rem 0.2rem;
  .back
    width: 10%;
    padding-top: 0.2rem;
    vertical-align: middle;
  .title
    width: 80%;
    vertical-align: middle;
  .right
    width: 10%;
    padding-top: 0.2rem;
    vertical-align: middle;
</style>

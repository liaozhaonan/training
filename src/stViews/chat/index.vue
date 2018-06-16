<template>
  <div>
    <st-foot-nav :footItem="footItem"></st-foot-nav>
  </div>
</template>

<script>
import stFootNav from '@/components/st/footNav/footNav'
export default{
  data () {
    return {
      footItem: 4
    }
  },
  components: {
    stFootNav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

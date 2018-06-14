<template>
  <div>
    <Header><div class="title">2018-06-22</div></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../components/header/header'
export default{
  data () {
    return {

    }
  },
  components: {
    Header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

<template>
  <div>
    <Header></Header>
    <p>考勤</p>
  <Calendar ref="Calendar" @pickDay="choseDay"></Calendar>
  </div>
</template>

<script>
import Header from '../components/header/header'
import Calendar from '../components/calendar/calendar'
export default{
  data () {
    return {
      choseDate: ''
    }
  },
  components: {
    Header,
    Calendar
  },
  methods: {
    choseDay (data) {
      this.choseDate = data
      console.log(this.choseDate)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

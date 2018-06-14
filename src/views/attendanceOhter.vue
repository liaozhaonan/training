<template>
  <div>
    <Header></Header>
    <p>考勤</p>
  <Calendar ref="Calendar" @choseDay="clickDay" @changeMonth="changeDate"></Calendar>
  </div>
</template>

<script>
import Header from '../components/header/header'
import Calendar from 'vue-calendar-component'
export default{
  data () {
    return {
      choseDay: ''
    }
  },
  components: {
    Header,
    Calendar
  },
  methods: {
    clickDay (data) {
      this.choseDay = data
      console.log(this.choseDay)
    },
    changeDate (data) {
      console.log(data)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

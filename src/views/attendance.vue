<template>
  <div>
    <Header>
      <div class="left" name="left">
        <router-link class="back" :to="{ path: '/' }"><i></i></router-link>
      </div>
      <div class="title"><p>考勤记录</p></div>
      <div class="right" name="right"><a class="forward"><i></i></a></div>
    </Header>
    <Calendar ref="Calendar" @pickDay="pickedDay" :changed-date="pickedOriginDate" :toggle-calendar="calendarStatus"></Calendar>
    <div class="currentWeek">
      <div class="left" @click="toggleCalendarStatus">
        <p>{{ this.pickedYear }}年</p>
        <p>{{ this.pickedMonth }}月</p>
      </div>
      <div class="right">
        <ul class="title">
          <li class="red">日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li class="red">六</li>
        </ul>
        <ul>
          <li v-for="(dateObj, index) in pickedWeekDates" :key="index" :class="{'active': dateObj.day.getDate() === pickedDate}" @click="pickDay(dateObj.day)">{{ dateObj.day.getDate() }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Calendar from '@/components/calendar/calendar'
export default{
  data () {
    return {
      pickedYear: null,
      pickedMonth: null,
      pickedDate: null,
      pickedWeek: null,
      pickedOriginDate: null,
      pickedWeekDates: [],
      calendarStatus: false
    }
  },
  components: {
    Header,
    Calendar
  },
  mounted () {
    let now = new Date()
    this.pickedDay(now)
  },
  methods: {
    pickDay (date) {
      this.pickedOriginDate = date
    },
    pickedDay (date) {
      this.pickedYear = date.getFullYear()
      this.pickedMonth = date.getMonth() + 1
      this.pickedDate = date.getDate()
      this.pickedWeek = date.getDay()
      let start = this.pickedDate - this.pickedWeek
      this.pickedWeekDates = []
      for (let i = 0; i < 7; i++) {
        let d = new Date(date)
        d.setDate(start + i)
        this.pickedWeekDates.push({ day: new Date(d) })
      }
    },
    toggleCalendarStatus () {
      this.calendarStatus = !this.calendarStatus
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .currentWeek
    display: block;
    padding: 5px;
    background: #fff;
    & > div
      display: inline-block;
      line-height: 2rem;
    .left
      width: 20%;
    .right
      width: 78%;
      ul
        display: flex;
        padding: 0;
        list-style-type: none;
        li
          flex: 0 0 auto;
          width: calc((100% / 7) - 10px);
          margin: 5px;
          line-height: 1.5rem;
        li.red
          color: red;
        li.active
          border-radius: 3px;
          color: #fff;
          background: #ff7900;
      ul.title
        padding-bottom: 2px;
</style>

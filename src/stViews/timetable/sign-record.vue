<template>
  <div>
    <top-nav>
      <div class="left" name="left">
        <router-link class="back" :to="{ name: 'timetable' }"><i></i></router-link>
      </div>
      <div class="title"><p>考勤记录</p></div>
    </top-nav>
    <div class="currentWeek">
      <div class="left" @click="toggleCalendarStatus">
        <p>{{ this.pickedYear }}年</p>
        <p>{{ this.pickedMonth }}月</p>
      </div>
      <div class="right">
        <ul class="title">
          <li class="red">日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li class="red">六</li>
        </ul>
        <ul class="content">
          <li v-for="(dateObj, index) in pickedWeekDates" :key="index" :class="{'active': dateObj.day.getDate() === pickedDate}" @click="pickDay(dateObj.day)">{{ dateObj.day.getDate() }}</li>
        </ul>
      </div>
    </div>
    <div class="record">
      <p>&#8195;<i></i>&#8195;<span>打卡时间 10:08:03</span></p>
      <p>&#8195;<i></i>&#8195;<span>打卡时间 12:05:00</span></p>
      <p>&#8195;<i></i>&#8195;<span>打卡时间 13:26:12</span></p>
      <h5 class="type"><label><i></i><span>正常</span></label>&#8195;&#8195;&#8195;<label><i class="error"></i><span>异常</span></label></h5>
    </div>
    <calendar ref="Calendar" @pickDay="pickedDay" :changed-date="pickedOriginDate" :toggle-calendar="calendarStatus"></calendar>
  </div>
</template>

<script>
import topNav from '@/components/topNav/topNav'
import calendar from '@/components/calendar/calendar'
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
    topNav,
    calendar
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
  p
    -webkit-margin-before: 0!important
    -webkit-margin-after: 0!important
  .currentWeek
    position: relative
    display: block
    height: 2rem /* 150/75 */
    background: #fff
    & > div
      display: inline-block
      position: absolute
    .left
      left: 0
      width: 18%
      padding: .35rem /* 26/75 */ 0
      color: #ffffff
      background: #0076FF
      p
        line-height: .64rem /* 48/75 */
        font-size: .43rem /* 32/75 */
    .right
      right: 1%
      width: 80%
      ul
        display: flex
        justify-content: space-around
        align-items: center
        box-sizing: border-box
        height: 1rem /* 75/75 */
        padding: 0 0 .03rem /* 2/75 */
        list-style-type: none;
        li
          flex: 0 0 auto;
          width: calc((100% / 7) - 10px)
          margin: 5px;
          line-height: .8rem /* 60/75 */
          font-size: .43rem /* 32/75 */
        li.red
          color: red;
        li.active
          border-radius: 3px;
          color: #fff;
          background: #0076FF;
      ul.content
        align-items:flex-end
  .record
    width: 100%
    padding-top: .21rem /* 16/75 */
    p
      position: relative
      height: 1.28rem /* 96/75 */
      border-bottom: 1px solid #f2f2f2
      line-height: 1.28rem /* 96/75 */
      font-size: .43rem /* 32/75 */
      text-align: left
      background: #ffffff
    i
      display: inline-block
      margin: .43rem /* 32/75 */ .21rem /* 16/75 */
      width: .32rem /* 24/75 */
      height: .32rem /* 24/75 */
      background: #0076ff
    i.error
      background: #ff0000
    span
      position: absolute
      display: inline-block
      line-height: 1.28rem /* 96/75 */
      text-align: left
    .type
      display: block
      padding-top: 0.2rem

</style>

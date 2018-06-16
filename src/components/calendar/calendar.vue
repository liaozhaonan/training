<template>
  <div id="calendar" v-show="showCalendar">
    <div class="month">
      <h5 class="title">
        <i  class="prev" @click="pickPre(currentYear, currentMonth)"></i>
        <span @click="pickYear(currentYear, currentMonth)">
          {{ currentMonth }}月&nbsp;<span class="year">{{ currentYear }}</span>
        </span>
        <i class="next" @click="pickNext(currentYear, currentMonth)"></i>
      </h5>
    </div>
    <div class="week">
      <ul>
        <li class="red">日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li class="red">六</li>
      </ul>
    </div>
    <div class="days">
      <ul>
        <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
        <li v-for="(dayObj, index) in days" :key="index" :class="{ 'active': getFullDate(dayObj.day) == isActiveDate }" @click="pickDay(dayObj.day)" >
          <!--本月-->
          <!--如果不是本月  改变类名加灰色-->
          <span class="other-month" v-if="dayObj.day.getMonth() + 1 != currentMonth">{{dayObj.day.getDate()}}</span>
          <!--如果是本月  还需要判断是不是这一天-->
            <!--今天  同年同月同日-->
            <span v-else-if="getFullDate(dayObj.day) == getFullDate()" class="today">{{ dayObj.day.getDate() }}</span>
            <span v-else>{{ dayObj.day.getDate() }}</span>
        </li>
      </ul>
    </div>
    <p class="bottom"><span class="today" @click="pickDay()"><i></i> 今天</span><span class="close" @click="hideCalendar()"><label>x</label>关闭</span></p>
  </div>
</template>

<script>
export default{
  props: ['changedDate', 'toggleCalendar'],
  data () {
    return {
      showCalendar: true,
      currentYear: 1970,
      currentMonth: 1,
      currentWeek: 1,
      currentDay: 1,
      isActiveDate: '1997-01-01',
      days: [],
      currentWeekDates: []
    }
  },
  created (cur) {
    this.initData(null)
  },
  computed: {
  },
  watch: {
    changedDate () {
      this.pickDay(this.changedDate)
    },
    toggleCalendar () {
      this.showCalendar = !this.showCalendar
    }
  },
  methods: {
    initData (cur) {
      let date
      if (cur) {
        date = new Date(cur)
      } else {
        let now = new Date()
        let d = new Date(this.formatDate(now.getFullYear(), now.getMonth(), 1))
        d.setDate(35)
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
      }
      this.currentDay = date.getDate()
      this.currentMonth = date.getMonth() + 1
      this.currentYear = date.getFullYear()
      this.currentWeek = date.getDay()
      let str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay)
      this.days.length = 0
      // 今天是周日，放在第一行第7个位置，前面6个
      // 初始化本周
      for (let i = this.currentWeek; i >= 0; i--) {
        let d = new Date(str)
        d.setDate(d.getDate() - i)
        let dayObject = {day: d} // 用一个对象包装Date对象  以便为以后预定功能添加属性
        this.days.push(dayObject) // 将日期放入data 中的days数组 供页面渲染使用
      }
      // 其他周
      // 该月份是否跨越6个星期
      let e = new Date(str)
      let first = new Date(str)
      first.setDate(31)
      let test1 = e.getDay() === 5 && e.getMonth() === first.getMonth()
      let second = new Date(str)
      second.setDate(30)
      let test2 = e.getDay() === 6 && e.getMonth() === second.getMonth()
      let num = 35
      if (test1 || test2) { num = 42 }
      for (let i = 1; i < num - this.currentWeek; i++) {
        let d = new Date(str)
        d.setDate(d.getDate() + i)
        let dayObject = {day: d}
        this.days.push(dayObject)
      }
    },

    getFullDate (date) {
      if (!date) {
        date = new Date()
      }
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      let d = date.getDate()
      if (m < 10) { m = `0${m}` }
      if (d < 10) { d = `0${d}` }
      return `${y}-${m}-${d}`
    },

    pickDay (date) {
      if (!date) {
        date = new Date()
      }
      let month = date.getMonth() + 1
      if (month < this.currentMonth) {
        this.pickPre(date.getFullYear(), month + 1)
      }
      if (month > this.currentMonth) {
        this.pickNext(date.getFullYear(), month - 1)
      }
      this.isActiveDate = this.getFullDate(date)
      this.$emit('pickDay', date)
    },

    pickPre (year, month) {
      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(dx) 参数dx为 上月最后一天的前后dx天
      let d = new Date(this.formatDate(year, month, 1))
      d.setDate(0)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },

    pickNext (year, month) {
      let d = new Date(this.formatDate(year, month, 1))
      d.setDate(35)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },

    pickYear (year, month) {
      console.log(year + '-' + month)
    },

    hideCalendar () {
      this.showCalendar = false
    },

    formatDate (year, month, day) {
      let y = year
      let m = month
      let d = day
      if (m < 10) { m = `0${m}` }
      if (d < 10) { d = `0${d}` }
      return `${y}-${m}-${d}`
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #calendar
    position: fixed;
    bottom: 0
    left: 2%
    box-sizing: border-box;
    width: 96%
    padding: .13rem /* 10/75 */
    border-radius: 10px
    background: #ffffff
    .title
      height: 1.07rem /* 80/75 */
      line-height: 1.07rem /* 80/75 */
      font-size: .48rem /* 36/75 */
      text-align: center
      & > span
        width: 85%
      .prev
        display: inline-block;
        border-right: .27rem /* 20/75 */ solid #0076FF
        border-top: .21rem /* 16/75 */ solid transparent
        border-bottom: .21rem /* 16/75 */ solid transparent
      .next
        display: inline-block;
        border-left: .27rem /* 20/75 */ solid #0076FF
        border-top: .21rem /* 16/75 */ solid transparent
        border-bottom: .21rem /* 16/75 */ solid transparent
    .week
      box-sizing: border-box
      width: 100%;
      height: .8rem /* 60/75 */
      ul
        display: flex
        justify-content: space-around
        align-items: center
        height: .8rem /* 60/75 */
        list-style-type: none
        li
          font-size: .43rem /* 32/75 */
        li.red
          color: red
    .days
      box-sizing: border-box
      width: 100%
      ul
        display: flex
        justify-content: space-around
        flex-flow: wrap
        align-items: center
        list-style-type: none
        li
          width: calc(100% / 7)
          span
            display: inline-block;
            width: .96rem /* 72/75 */
            height: .96rem /* 72/75 */
            line-height: .96rem /* 72/75 */
            font-size: .43rem /* 32/75 */
          span.other-month
            color: #aaa
          span:active
            border-radius: 50%
            color: #fff
            background: #d0d0d0
          span.today
            position: relative
          span.today:after
            content: ''
            position: absolute
            right: .08rem /* 6/75 */
            top: .08rem /* 6/75 */
            width: 0px
            height: 0px
            margin-right: .05rem /* 4/75 */
            margin-top: .05rem /* 4/75 */
            border-top: .16rem /* 12/75 */ solid #0076FF;
            border-left: .16rem /* 12/75 */ solid transparent;
        li.active
          span
            border-radius: 50%;
            color: #fff;
            background: #0076FF;
    .bottom
      padding: 0.2rem 1rem 0.3rem
      line-height: .35rem /* 26/75 */
      font-size: .35rem /* 26/75 */
      span
        display: inline-block
        width: 50%
      .today > i
        display: inline-block
        width: 0
        margin-right: .05rem /* 4/75 */
        vertical-align: super
        border-top: .16rem /* 12/75 */ solid #0076FF
        border-left: .16rem /* 12/75 */ solid transparent
      label
        display: inline-block
        margin-right: .03rem /* 2/75 */
        color: #0076FF

</style>

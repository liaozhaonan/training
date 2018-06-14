<template>
  <div id="calendar" v-show="showCalendar">
    <div class="month">
      <ul>
        <li class="prev" @click="pickPre(currentYear, currentMonth)">
          <span></span>
        </li>
        <li @click="pickYear(currentYear, currentMonth)">
          <span>{{ currentMonth }}月</span>&nbsp;<span>{{ currentYear }}</span>
        </li>
        <li class="next" @click="pickNext(currentYear, currentMonth)">
          <span></span>
        </li>
      </ul>
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
    <p class="bottom"><span class="today" @click="pickDay()"><i></i>今天</span><span class="close" @click="hideCalendar()"><label>x</label>关闭</span></p>
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
    bottom: 5px;
    box-sizing: border-box;
    width: 96%;
    margin: 0 2%;
    padding: 5px;
    border-radius: 10px;
    background: #e0e0e0;
    .month
      ul
        display: flex;
        padding: 0 5px;
        margin: 0;
        list-style-type: none;
        li
          width: 33%;
          height: 30px;
          line-height: 30px;
          text-align: center;
        li.prev
          text-align: left;
          & > span
            display: inline-block;
            border-right: 12px solid #ff7900;
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
        li.next
          text-align: right;
          & > span
            display: inline-block;
            border-left: 12px solid #ff7900;
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
    .week
      box-sizing: border-box;
      width: 100%;
      padding: 5px 10px;
      ul
        display: flex;
        padding: 0;
        margin: 0;
        list-style-type: none;
        li
          width: calc(100% / 7);
        li.red
          color: red;
    .days
      box-sizing: border-box;
      width: 100%;
      padding: 5px 10px;
      ul
        display: flex;
        flex-flow: wrap;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style-type: none;
        li
          width: calc(100% / 7);
          flex: 0 0 auto;
          span
            display: inline-block;
            width: 36px;
            height: 36px;
            line-height: 36px;
          span.other-month
            color: #aaa;
          span:active
            border-radius: 50%;
            color: #fff;
            background: #d0d0d0;
          span.today
            position: relative;
          span.today:after
            content: '';
            position: absolute;
            right: 3px;
            top: 3px;
            width: 0px;
            height: 0px;
            margin-right: 2px;
            margin-top: 2px;
            border-top: 6px solid #ff7900;
            border-left: 6px solid transparent;
        li.active
          span
            border-radius: 50%;
            color: #fff;
            background: #ff7900;
    .bottom
      padding: 0.2rem 1rem;
      margin: 0;
      span
        display: inline-block;
        width: 50%;
      .today > i
        display: inline-block;
        width: 0;
        margin-right: 2px;
        vertical-align: super;
        border-top: 6px solid #ff7900;
        border-left: 6px solid transparent;
      label
        display: inline-block;
        margin-right: 1px;
        color: #ff7900;

</style>

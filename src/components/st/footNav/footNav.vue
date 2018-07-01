<template>
  <ul>
    <li class="item1" :class="{'on': itemIndex === 1}">
      <router-link :to="{ name: 'timetable' }">
        <div class="icon"></div>
        <p>课表首页</p>
      </router-link>
    </li>
    <li class="item2" :class="{'on': itemIndex === 2}">
      <router-link :to="{ name: 'homework' }">
        <div class="icon"></div>
        <p>通知作业</p>
      </router-link>
    </li>
    <li class="item3" :class="{'on': itemIndex === 3}">
      <router-link :to="{ name: 'select' }">
        <div class="icon"></div>
      </router-link>
    </li>
    <li class="item4" :class="{'on': itemIndex === 4}">
      <router-link :to="{ name: 'chat' }">
        <div class="icon"></div>
        <p>交流讨论</p>
      </router-link>
    </li>
    <li class="item5" :class="{'on': itemIndex === 5}">
      <router-link :to="{ name: 'settings' }">
        <div class="icon"></div>
        <p>设置</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default{
  props: ['footItem'],
  data () {
    return {

    }
  },
  computed: {
    itemIndex () {
      return this.footItem
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  ul
    position: absolute
    bottom: 0
    display: flex
    width: 100%
    height: 1.33rem /* 100/75 */
    background-color: #fafafa
    li
      flex: 0 0 auto
      width: 2rem /* 150/75 */
      box-sizing: border-box
      padding: .13rem /* 10/75 */ .4rem /* 30/75 */
      .icon
        width: .67rem /* 50/75 */
        height: .67rem /* 50/75 */
        margin: auto
      p
        height: .4rem /* 30/75 */
        padding-top: .05rem /* 4/75 */
        font-size: .29rem /* 22/75 */
        line-height: .4rem /* 30/75 */
        color: #A4AAB3
    li.on
      p
        color: #0076FF
    .item1 .icon
      background: url(./timetable.png) no-repeat
      background-size: contain
    .item1.on .icon
      background: url(./timetable-on.png) no-repeat
      background-size: contain
    .item2 .icon
      background: url(./homework.png) no-repeat
      background-size: contain
    .item2.on .icon
      background: url(./homework-on.png) no-repeat
      background-size: contain
    .item3 .icon
      width: 100%
      height: 100%
      background: url(./select.png) no-repeat
      background-size: contain
    .item3.on .icon
      background: url(./select.png) no-repeat
      background-size: contain
    .item4 .icon
      background: url(./chat.png) no-repeat
      background-size: contain
    .item4.on .icon
      background: url(./chat-on.png) no-repeat
      background-size: contain
    .item5 .icon
      background: url(./setting.png) no-repeat
      background-size: contain
    .item5.on .icon
      background: url(./setting-on.png) no-repeat
      background-size: contain
</style>

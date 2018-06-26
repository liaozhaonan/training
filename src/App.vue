<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background: #f2f2f2;
  margin: 0;
  font-family: PingFangSC-Regular;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
p, ul{
  margin: 0;
}
ul{
  margin: none;
  padding: none;
  -webkit-margin-before: 0em !important;
  -webkit-margin-after: 0em !important;
  -webkit-margin-start: 0px !important;
  -webkit-margin-end: 0px !important;
  -webkit-padding-start: 0 !important ;
}
.common-scroll-wrapper{
  position: absolute;
  top: 1.38rem;
  bottom: 0;
  width: 100%;
  background: #ffffff;
}
.cube-popup-content{
  min-width: 50%;
  padding: .63rem /* 20/32 */;
  font-size: .44rem /* 14/32 */;
  background: rgba(0,0,0,0.8);
  color: #fff;
}
</style>

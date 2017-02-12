<template>
  <div id="app">
    <div class="app-bg"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html,body,#app {
    margin: 0 0;
  }

  .app-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url('/static/img/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    -o-filter: blur(5px);
    filter: blur(5px);
    background-attachment: inline;
  }
</style>

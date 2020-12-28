<template>
  <div id="app">
    <wallpaper :d="0"></wallpaper>
  </div>
</template>

<script>
import wallpaper from './plugin/wallpaper/wallpaper.vue'
export default {
  name: 'App',
  components: {
    wallpaper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

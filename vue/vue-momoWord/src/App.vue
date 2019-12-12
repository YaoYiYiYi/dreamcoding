<template>
  <div id="app">
    <tabBar></tabBar>
    <router-view/>
  </div>
</template>

<script>
import tabBar from './components/tabBar'
export default {
  name: 'App',
  components: {
    tabBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
</style>

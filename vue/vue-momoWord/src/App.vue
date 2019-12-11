<template>
  <div id="app">
    <i-footer></i-footer>
    <router-view/>
  </div>
</template>

<script>
import iFooter from './components/footer'
export default {
  name: 'App',
  components: {
    iFooter
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

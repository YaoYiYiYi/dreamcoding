<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Dialog/>
    <Loading/>
  </div>
</template>

<script>
import Dialog from './components/dialog'
import Loading from './components/loading'
export default {
  name: 'App',
  components: {
    Loading,
    Dialog
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

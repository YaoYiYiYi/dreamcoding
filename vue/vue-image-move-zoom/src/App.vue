<template>
  <div id="app">
    <ImageZoom src="https://img.alicdn.com/imgextra/i1/1714128138/O1CN01m9gkSC29zFkBWX7um_!!1714128138.jpg_430x430q90.jpg" 
               bigSrc="https://img.alicdn.com/imgextra/i1/1714128138/O1CN01m9gkSC29zFkBWX7um_!!1714128138.jpg" />
  </div>
</template>

<script>
import ImageZoom from './components/imageZoom'
export default {
  name: 'App',
  components: {
    ImageZoom
  }
}
document.querySelector
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

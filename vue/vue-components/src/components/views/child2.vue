<template>
  <div class="child2">child2</div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  data () {
    return {
      mess2: ''
    }
  },
  mounted () {
    bus.$on('test', (text) => {
      console.log(text)
      this.mess2 = text
    })
  }
}
</script>

<style>

</style>
<template>
  <div class="a-test">A
    <testb></testb>
  </div>
</template>

<script>
import B from './b'
export default {
  provide: {
    name: 'wn'
  },
  components: {
    'testb': B
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
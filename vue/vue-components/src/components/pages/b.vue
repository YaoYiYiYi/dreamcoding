<template>
  <div class="b-test">
    B{{name}}
    <test-c></test-c>
  </div>
</template>

<script>
import C from './c'
export default {
  inject: ['name'],
  mounted () {
  },
  components: {
    'test-c': C
  }
}
</script>

<style>

</style>
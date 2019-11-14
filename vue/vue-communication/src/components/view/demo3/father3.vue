<template>
  <div class="container">
    <h2>父组件</h2>
     <p>
      从子组件中获取的信息为：
      <span class="red">{{Msg}}</span>
    </p>
    <child v-on:message="getMsg"></child>
  </div>
</template>

<script>
import child from './child3'
export default {
  data () {
    return {
      Msg: ''
    }
  },
  components: {
    child
  },
  methods: {
    getMsg (e) {
      this.Msg = e
    }
  }
}
</script>

<style>
.red{
  color:red;
}
</style>

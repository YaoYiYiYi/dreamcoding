<template>
  <div class="child">
    <h3>子组件</h3>
    <div>子组件要发送的数据是: {{msg}}</div>
    <button @click="sendMsg">send msg</button>
  </div>
</template>

<script>
export default {
data () {
  return {
    msg:'我是子组件要传的数据'
  }
},
methods: {
  sendMsg () {
    this.$emit('message', this.msg) // 发散数据
  }
}
}
</script>

<style>

</style>
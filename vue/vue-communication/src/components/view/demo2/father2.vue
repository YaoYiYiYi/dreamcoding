<template>
  <div class="container">
    <div>
      <ul class="red"></ul>
      <child 
        :sendMsg="myMsg"
        :sendNum="myNum" 
        :sendObj="myObj"      ></child>
    </div>
  </div>
</template>

<script>
import child from './child2'
export default {
  data () {
    return {
      myMsg: '我是父组件',
      myNum: 123,
      myObj: [
        {
          id: 1,
          name: '赵zhao'
        },
        {
          id: 2,
          name: '钱qian'
        },
        {
          id: 3,
          name: '孙sun'
        }
      ]
    }
  },
  components: {
    child
  }
}
</script>

<style>

</style>

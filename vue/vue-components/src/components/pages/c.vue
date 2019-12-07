<template>
  <div class="test-c">CCCC{{age}}
      <button @click="onko"></button>
  </div>
</template>

<script>
export default {
inject: ['app'],
data () {
  return {
    age: ''
  }
},
created(){
  this.age = app.userInfo.age
},
methods: {
  onko(){
    this.age =16
  }
}

}
</script>

<style>

</style>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-button size="large" @on-click="onClick1">
      <i slot="icon">*</i>
      按钮
    </i-button>
    <i-button size="small" @on-click="onClick2">提交</i-button>
    <!-- <div @click="oSure">
      <i-button size="default" ref="sure">确认</i-button>
    </div> -->
     <i-button size="default" ref="sure" @click.native="oSure" @on-message="onMessage">确认</i-button>
  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'i-button': button
  },
  methods: {
    onClick1(){
      console.log(1)
    },
    onClick2(){
      console.log(2)
    },
    oSure () {
      this.$refs.sure.sureClick()
    },
    onMessage (mssg) {
      this.msg = mssg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>

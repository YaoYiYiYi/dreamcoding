<template>
  <button :class="'i-button-size'+size" @click="handleClick">
    <slot name="icon"></slot>/
    <slot ></slot>
  </button>
</template>

<script>
function Oneof (value, arry) {
  for(let i=0;i<=arry.length;i++){
    if(value===arry[i]){
      return true
    }
  }
  return false
}
export default {
 data () {
   return {
     message: '我是子组件'
   }
 },
 methods: {
   handleClick () {
     this.$emit('on-click')
   },
   sureClick () {
     this.$emit('on-message',this.message)
   }
 },
 props: {
   size: {
    //  type: String，
    validator (value) {
      return Oneof(value, ['small','large','default'])
    },
    default: 'default'
   }
 }
}
</script>

<style>
button{
  border: 1px solid orange;
  background-color: yellow;
  border-radius: 5px;
}
.i-button-sizelarge{
  padding: 14px 16px;
}
.i-button-sizedefault{
  padding: 8px 10px;
}
.i-button-sizesmall{
  padding: 4px 6px;
}
</style>
<template>
  <input type="text" @input="handleInput" @blur="handleBlur" :value="currentValue">
</template>

<script>
import Emitter from '../../mixins/emitter'
export default {
  name: 'iInput',
  mixins: [Emitter],
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput (e) {
      const value = e.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('iFormItem', 'on-form-change', value)
    },
    handleBlur () {
       this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
    }
  }
}
</script>

<style>

</style>

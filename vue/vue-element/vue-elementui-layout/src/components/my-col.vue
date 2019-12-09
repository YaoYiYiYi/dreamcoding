<script>
export default {
  render(h) {
    const tag = this.tag || 'div'
    return h(tag, {class: `my-el-col-${this.span}`}, this.$slots.default)
  },
  props: {
    tag: String,
    span: {
      type: Number,
      default: 1
    }
  }

}
</script>

<style scoped lang="scss">
@for $i from 0 through 24 {
  .my-el-col-#{$i} {
    width: (1 / 24 * $i * 100 ) * 1%;
  }
}
</style>

<script>
// render jsx
export default {
  render (h) {
    const tag = this.tag || 'div';
    // 标签名，标签上面的属性，子结点 class,style,width
    // createElement === h
    return h(tag, {class: 'my-el-row'}, this.$slots.default)
  },
  data () {
    return {

    }
  },
  props: {
    tag: String
  },
  methods: {

  }
}
</script>

<style>
  .my-el-row{
    width: 100%;
    display: flex;
  }
</style>
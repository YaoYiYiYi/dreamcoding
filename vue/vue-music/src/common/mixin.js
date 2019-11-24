import {mapActions} from 'vuex'

// 抛出的数据，会和外面接受的数据，合并
export const searchMixin = {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    // 保存数据源
    onQueryChange (query) {
      this.query = query.trim()
    },
    // 失去焦点
    blurInput () {
      // 父组件调用子组件的方法，只用给子组件 添加一个ref,就可以直接调用了
      this.$refs.searchBox.blur()
    },
    // 调用vuex的方法
    saveSearch (song) {
      // this.$refs.searchBox.setQuery(song)
      if(this.query){
        this.saveSearchHistory(this.query)
      }
      this.selectPlaySong(song)
    },
    // 删除全部的数据
    ...mapActions([
      'selecPlaySong',
      'saveSearchHistory',
      'deleteSearchHistory',
      'deleteAll'
    ])
  }
}
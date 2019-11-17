<template>
  <div class="count">
    {{count}}
    <!-- <button @click="$store.commit('add', 20)">+</button> -->
    <!-- <button @click="add(10)">+</button> -->
    <button @click="addAction(20)">+</button>
    <!-- <button @click="$store.commit('minus')">-</button> -->
    <button @click="minusAction">-</button>
    {{getcount}}
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    // myCount: null
    }
  },
  // computed: {
  //   myCount () {
  //     return this.$store.state.count
  //   }
  // },

  /* computed: mapState({
    // mycount: state => state.count
    myCount (state) {
      return state.count
    }
  }), */

  // computed: mapState(['count']),
  // 但方法也就只能引用store里的方法

  computed: {
    ...mapState(['count']),
    ...mapGetters(['getcount'])
  },
  mounted () {
    //   this.myCount = this.$store.state.count
  },
  methods: {
    // test () {
    //   this.myCount++
    // }
    ...mapMutations([
      'add',
      'minus'
    ]),
    ...mapActions(['addAction', 'minusAction'])
  }
}
</script>

<style>

</style>

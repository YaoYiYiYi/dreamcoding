<template>
  <div class="star" :class="name">
    <span class="star-item" :class="[stararry[0]]" ></span>
    <span class="star-item" :class="[stararry[1]]"></span>
    <span class="star-item" :class="[stararry[2]]"></span>
    <span class="star-item" :class="[stararry[3]]"></span>
    <span class="star-item" :class="[stararry[4]]"></span>
  </div>
</template>

<script scoped>
export default {
  props: {
    name: {
      type: String
    },
    score: {
      type: Number
    }
  },
  data () {
    return {
      stararry: []
    }
  },
  updated () {
    // this.star()
  },
  created () {
    // this.star()
  },
  watch: {
    'score': {
      handler (newName, oldName) {
        let score = Math.floor(newName)
        // let Stararry = document.querySelectorAll('.star-item')
        // console.log(Stararry)
        // console.log('score', this.score)
        let arry = []
        for (let i = 0; i < 5; i++) {
          // let name = Stararry[i].className
          if (i < score) {
            arry[i] = 'on '
          } else {
            arry[i] = 'off '
          }
        }
        this.stararry = arry
        // console.log(arry)
      },
      immediate: true
    }
  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped >
.star.star-36
  display: inline-block
  margin: 0 12px
  vertical-align: top
  .star-item
    width: 15px;
    height: 15px;
    margin-right: 6px;
    background-size: 15px 15px
    display: inline-block
    background-repeat: no-repeat
    &:last-child
      margin-right 0
  .star-item.on
    background-image: url('../../assets/Star.png')
  .star-item.off
    background-image: url('../../assets/Stargray.png')

.star.star-24
  display: inline-block
  margin-right: 6px
  vertical-align: top
  .star-item
    width: 10px
    height: 10px
    margin-right: 3px
    background-size: 10px 10px
    display: inline-block
    background-repeat: no-repeat
  .star-item.on
    background-image: url('../../assets/Star.png')
  .star-item.off
    background-image: url('../../assets/Stargray.png')

.star.star-48
  font-size: 0;
  .star-item
    display: inline-block;
    background-repeat: no-repeat
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px
    display: inline-block
    background-repeat: no-repeat
  .star-item.on
    background-image: url('../../assets/Star.png')
  .star-item.off
    background-image: url('../../assets/Stargray.png')
</style>

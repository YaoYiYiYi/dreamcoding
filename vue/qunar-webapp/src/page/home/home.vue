<template>
  <div class="home-page">
    <homeHeader/>
    <homeSwiper :list="swiperList"/>
  </div>
</template>

<script>
import Header from './header'
import Swiper from './Swiper'
import axios from 'axios'
export default {
  data () {
    return {
      swiperList: []
    }
  },
  mounted () {
    axios.get('/static/mock/index.json')
      .then(res => {
        if (res.data) {
          this.swiperList = res.data.data.swiperList
        }
      })
  },
  components: {
    homeHeader: Header,
    homeSwiper: Swiper
  }
}
</script>
<style lang="scss">
@import "../../assets/styles/variable";
.home-page{
  background: $homeBgColor
}
</style>

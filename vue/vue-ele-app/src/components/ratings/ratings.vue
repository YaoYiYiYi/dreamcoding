<template>
  <div>
    <div class="rating">
      <div class="rating-wrapper">
        <div class="overview">
          <div class="overviewleft">
            <div class="score">{{seller.score}}</div>
            <div class="title">综合评分</div>
            <div class="rank">高于周边商家{{seller.rankRate}}%</div>
          </div>
          <div class="overviewright"></div>
        </div>
        <div class="split"></div>
        <div class="ratingSelect">
          <div class="rating-type border-1px">
            <span class="block positive">
              全部
              <span class="count">{{seller.ratingCount}}</span>
            </span>
            <span class="block positive">
              满意
              <span class="count">{{countGood}}</span>
            </span>
            <span class="block negative">
              不满意
              <span class="count">{{seller.ratingCount-countGood}}</span>
            </span>
          </div>
          <div class="switch on">
            <span class="icon-check_circle"></span>
            <span class="text">只看有内容的评价</span>
          </div>
        </div>
        <div class="rating-content">
          <ul>
            <li class="rating-item" v-for="(rating, index) in ratings" :key="index">
              <div class="avatar">{{rating.avatar}}</div>
              <div class="content">
                <h1 class="name">{{rating.username}}</h1>
                <div class="star-wrapper">
                  <div class="star star-24"></div>
                  <span class="delivery">{{rating.deliveryTime}}</span>
                </div>
                <p class="text">{{rating.text}}</p>
                <div class="recommend">
                  <span class="icon-thumb_up"></span>
                  <span class="item" v-for="(item, index) in rating.recommend" :key="index">{{item}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ratings: []
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.$http
      .get('http://localhost:8080/static/data/ratings.json')
      .then(res => {
        if (res.data.errno === 0) {
          this.ratings = res.data.data
        }
      })
  },
  computed: {
    countGood () {
      let count = 0
      for (let rating of this.ratings) {
        if (rating.rateType === 0) {
          count++
        }
      }
      return count
    }
  }
}
</script>

<style lang='stylus' scoped>
.rating
  position absolute
  top 174px
  bottom 0
  width 100%
  .rating-wrapper
    width 100%
    .overview
      display flex
      padding 18px 0
</style>

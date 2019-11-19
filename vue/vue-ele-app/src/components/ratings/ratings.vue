<template>
  <div>
    <div class="rating">
      <div class="rating-wrapper" ref="ratingWrapper">
        <div class="overview">
          <div class="overviewleft">
            <div class="score">{{seller.score}}</div>
            <div class="title">综合评分</div>
            <div class="rank">高于周边商家{{seller.rankRate}}%</div>
          </div>
          <div class="overviewright">
            <div class="score-wrapper">
              <span class="title">服务态度</span>
              <!-- <div class="star star-36">
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item"></span>
              </div> -->
              <star :name = "name1"
                    :score = "seller.serviceScore">
              </star>
              <span class="score">{{seller.serviceScore}}</span>
            </div>
            <div class="score-wrapper">
              <span class="title">商家评分</span>
              <!-- <div class="star star-36">
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item"></span>
              </div> -->
              <star :name = "name1"
                    :score = "seller.foodScore">
              </star>
              <span class="score">{{seller.foodScore}}</span>
            </div>
            <div class="delivery-wrapper">
              <span class="title">送达时间</span>
              <span class="delivery">{{seller.deliveryTime}}分钟</span>
            </div>
          </div>
        </div>
        <div class="split"></div>
        <div class="ratingSelect">
          <div class="rating-type border-1px">
            <span class="block positive" @click="addclassOne" :class="{'active': classOne}">
              全部
              <span class="count">{{seller.ratingCount}}</span>
            </span>
            <span class="block positive" @click="addclassTwo" :class="{'active': classTwo}">
              满意
              <span class="count">{{countGood}}</span>
            </span>
            <span class="block negative" @click="addclassThree" :class="{'active': classThree}">
              不满意
              <span class="count">{{seller.ratingCount-countGood}}</span>
            </span>
          </div>
          <div class="switch" :class="{'on': SelectContentStyle}">
            <span class="icon-check_circle" @click="selectContent"></span>
            <span class="text">只看有内容的评价</span>
          </div>
        </div>
        <div class="rating-content">
          <ul>
            <li class="rating-item" v-for="(rating, index) in SelectRatings" :key="index">
              <div class="avatar">
                <img width="28" height="28" :src="rating.avatar" alt="">
              </div>
              <div class="content">
                <h1 class="name">{{rating.username}}</h1>
                <div class="star-wrapper">
                  <!-- <div class="star star-24"></div> -->
                  <star :name = "name2"
                        :score = "starIndex(index)"></star>
                  <span class="delivery">{{starIndex(index)}}</span>
                </div>
                <p class="text">{{rating.text}}</p>
                <div class="recommend" v-if="rating.recommend.length>0">
                  <span class="icon-thumb_up"></span>
                  <span class="item" v-for="(item, index) in rating.recommend" :key="index">{{item}}</span>
                </div>
                <div class="time"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import star from '@/components/star/star'
export default {
  data () {
    return {
      ratings: [],
      hasContent: [],
      name1: 'star-36',
      name2: 'star-24',
      SelectContentStyle: false,
      // SelectRatings: [],
      classOne: true,
      classTwo: false,
      classThree: false
    }
  },
  components: {
    star
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
          let arr = []
          for (let rating of this.ratings) {
            // rating.rateTime = new Date(parseInt(rating.rateTime))
            if (rating.text !== '') {
              arr.push(rating)
            }
          }
          this.hasContent = arr
          console.log(this.hasContent)
          this.$nextTick(() => {
            this._initScroll()
          })
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
    },
    SelectRatings () {
      if (this.SelectContentStyle) {
        if (this.classOne) {
          // 返回有内容的所有评论
          // let arr = this.hasContent.map(item => item)
          return this.hasContent
        } else if (this.classTwo) {
          let arr = []
          for (let rating of this.hasContent) {
            if (rating.rateType === 0) {
              arr.push(rating)
            }
          }
          // 返回有内容的好评
          return arr
        } else {
          let arr = []
          for (let rating of this.hasContent) {
            if (rating.rateType === 1) {
              arr.push(rating)
            }
          }
          // 返回有内容的差评
          return arr
        }
      } else {
        if (this.classOne) {
          // 返回全部评论
          // let arr = this.ratings.map(item => item)
          return this.ratings
        } else if (this.classTwo) {
          let arr = []
          for (let rating of this.ratings) {
            if (rating.rateType === 0) {
              arr.push(rating)
            }
          }
          // 返回全部的好评
          return arr
        } else {
          let arr = []
          for (let rating of this.ratings) {
            if (rating.rateType === 1) {
              arr.push(rating)
            }
          }
          // 返回全部差评
          return arr
        }
      }
    },
    starIndex () {
      let arr = this.SelectRatings
      return function (index) {
        return arr[index].score
      }
    }
  },
  methods: {
    _initScroll () {
      const self = this
      self.ratingScroll = new BScroll(self.$refs.ratingWrapper, {
        click: true
      })
    },
    // 存放  点击icon只看内容  所需要展示的数据
    selectContent () {
      this.SelectContentStyle = !this.SelectContentStyle
    },
    addclassOne () {
      this.classOne = true
      this.classTwo = false
      this.classThree = false
    },
    addclassTwo () {
      this.classOne = false
      this.classTwo = true
      this.classThree = false
    },
    addclassThree () {
      this.classOne = false
      this.classTwo = false
      this.classThree = true
    }
  }
}
</script>

<style lang='stylus' scoped>
ul li
  list-style: none
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
      .overviewleft
        -webkit-box-flex: 0
        padding: 6px 0
        border-right: 1px solid rgba(7,17,27,.1)
        text-align: center
        flex: 0 0 120px
        .score
          margin-bottom: 6px
          line-height: 28px
          font-size: 24px
          color: #f90
        .title
          margin-bottom: 8px
          line-height: 12px
          font-size: 12px
          color: #07111b
        .rank
          line-height: 10px
          font-size: 10px
          color: #93999f
      .overviewright
        -webkit-box-flex: 1
        -ms-flex: 1
        flex: 1
        padding: 6px 0 6px 24px
        .score-wrapper
          margin-bottom: 8px
          font-size: 0
          .title
            display: inline-block;
            line-height: 18px;
            vertical-align: top;
            font-size: 12px;
            color: #07111b
          // .star
          //   display: inline-block;
          //   margin: 0 12px;
          //   vertical-align: top
          //   font-size: 0
          //   .star-item
          //     width: 15px
          //     height: 15px
          //     margin-right: 6px
          //     background-size: 15px 15px
          //     display: inline-block;
          //     background-repeat: no-repeat
          .score
            display: inline-block;
            line-height: 18px;
            vertical-align: top;
            font-size: 12px;
            color: #f90
        .delivery-wrapper
          font-size: 0
          .title
            line-height: 18px
            font-size: 12px
            color: #07111b
          .delivery
            margin-left: 12px;
            font-size: 12px;
            color: #93999f
    .split
      width: 100%
      height: 16px
      border-top: 1px solid rgba(7,17,27,.1)
      border-bottom: 1px solid rgba(7,17,27,.1)
      background: #f3f5f7
    .ratingSelect
      .rating-type
        padding: 18px 0
        margin: 0 18px
        position: relative
        font-size: 0
        &:after
          display: block
          position: absolute
          left: 0
          bottom: 0
          width: 100%
          border-top: 1px solid rgba(7,17,27,.1)
          content: " "
        .block
          display: inline-block
          padding: 8px 12px
          margin-right: 8px
          line-height: 16px
          border-radius: 1px
          font-size: 12px
          color: #4d555d
          .count
            margin-left: 2px
            font-size: 8px
        .block.positive
          background: rgba(0,160,220,.2)
        .block.negative
          background: rgba(77,85,93,.2)
        .block.active
          color: #fff
        .block.positive.active
          background: #00a0dc
        .block.negative.active
          background: #4d555d
      .switch
        padding: 12px 18px
        line-height: 24px
        border-bottom: 1px solid rgba(7,17,27,.1)
        color: #93999f
        font-size: 0
        .icon-check_circle
          display: inline-block
          vertical-align: top
          margin-right: 4px
          font-size: 24px
        .text
          display: inline-block
          vertical-align: top
          font-size: 12px
      .switch.on
        .icon-check_circle
          color: #00c850
    .rating-content
      padding: 0 18px
      .rating-item
        display: -webkit-box
        display: -ms-flexbox
        display: flex
        padding: 18px 0
        position: relative
        &:after
          display: block
          position: absolute
          left: 0
          bottom: 0
          width: 100%
          border-top: 1px solid rgba(7,17,27,.1)
          content: " "
        .avatar
          -webkit-box-flex: 0
          -ms-flex: 0 0 28px
          flex: 0 0 28px
          width: 28px
          margin-right: 12px
          img
            border-radius 50%
        .content
          position: relative
          -webkit-box-flex: 1
          -ms-flex: 1
          flex: 1
          .name
            margin-bottom: 4px
            line-height: 12px
            font-size: 10px
            color: #07111b
          .star-wrapper
            margin-bottom: 6px
            font-size: 0
            .delivery
              display: inline-block
              vertical-align: top
              line-height: 12px
              font-size: 10px
              color: #93999f
          .text
            margin-bottom: 8px
            line-height: 18px
            color: #07111b
            font-size: 12px
          .recommend
            line-height: 16px
            font-size: 0
            .icon-thumb_up
              display: inline-block;
              margin: 0 8px 4px 0;
              font-size: 9px;
              color: #00a0dc;
              &:before
                content: "\E901"
            .item
              display: inline-block;
              margin: 0 8px 4px 0;
              font-size: 9px;
              padding: 0 6px;
              border: 1px solid rgba(7,17,27,.1)
              border-radius: 1px
              color: #93999f
              background: #fff
          .time
            position: absolute
            top: 0
            right: 0
            line-height: 12px
            font-size: 10px
            color: #93999f
</style>

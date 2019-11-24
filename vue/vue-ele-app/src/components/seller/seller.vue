<template>
  <div class="seller" ref="seller">
    <div class="seller-content">
      <div class="overview">
        <div class="title">{{seller.name}}</div>
        <div class="desc border-1px">
          <star :name ="name1"
                :score="seller.score">
          </star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>
              元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>
              元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>
              分钟
            </div>
          </li>
        </ul>
        <div class="favorite"  @click="favorite">
          <span class="icon-favorite" :class="{'active':IFfavorite}"></span>
          <span class="text">{{IFfavorite?'已收藏':'收藏'}}</span>
        </div>
      </div>
      <div class="split"></div>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul class="supports">
          <li class="support-item border-1px" v-for="(item, index) in seller.supports" :key="index">
            <span class="icon" :class="classMap[item.type]"></span>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <div class="split"></div>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper" ref="pic">
          <ul class="pic-list" ref="picList">
            <li class="pic-item" v-for="(item, index) in seller.pics" :key="index">
              <img :src="item" alt="" width="120" height="90">
            </li>
          </ul>
        </div>
      </div>
      <div class="split"></div>
      <div class="info">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li class="info-item" v-for="(item, index) in seller.infos" :key="index">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star'
import BScroll from 'better-scroll'
export default {
  name: 'Seller',
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    star
  },
  data () {
    return {
      name1: 'star-36',
      IFfavorite: false,
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  },
  methods: {
    favorite () {
      this.IFfavorite = !this.IFfavorite
    },
    _initScroll () {
      this.sellerScroll = new BScroll(this.$refs.seller, {
        click: true,
        probeType: 3
      })
      this.picScroll = new BScroll(this.$refs.pic, {
        click: true,
        scrollX: true,
        scrollY: false,
        probeType: 3
      })
    }
  },
  created () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  mounted () {
    this.$refs.picList.style.width = 126 * this.seller.pics.length + 'px'
  }
}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin'
.seller
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow hidden;
  .seller-content
    .overview
      position: relative
      padding: 18px
      .title
        margin-bottom: 8px
        margin-left: 12px
        line-height: 14px
        color: #07111b
        font-size: 14px
      .desc
        padding-bottom: 18px
        position: relative
        font-size: 0
        .text
          display: inline-block
          margin-right: 12px
          line-height: 18px
          vertical-align: top
          font-size: 10px
          color: #4d555d
        &:after
          display: block
          position: absolute
          left: 0
          bottom: 0
          width: 100%
          border-top: 1px solid rgba(7,17,27,.1)
          content: " "
      .remark
        display: -webkit-box
        display: -ms-flexbox
        display: flex
        padding-top: 18px
        li
          list-style: none
        .block
          -webkit-box-flex: 1
          -ms-flex: 1
          flex: 1
          text-align: center
          border-right: 1px solid rgba(7,17,27,.1)
          h2
            margin-bottom: 4px
            line-height: 10px
            font-size: 10px
            color: #93999f
          .content
            line-height: 24px
            font-size: 10px
            color: #07111b
            .stress
              font-size: 24px
      .favorite
        position: absolute
        width: 50px
        right: 11px
        top: 18px
        text-align: center
        .icon-favorite
          display: block
          margin-bottom: 4px
          line-height: 24px
          font-size: 24px
          color: #d4d6d9
        .icon-favorite.active
          color: #f01414
        .text
          line-height: 10px
          font-size: 10px
          color: #4d555d
    .split
      width: 100%
      height: 16px
      border-top: 1px solid rgba(7,17,27,.1)
      border-bottom: 1px solid rgba(7,17,27,.1)
      background: #f3f5f7
    .bulletin
      padding: 18px 18px 0
      .title
        margin-bottom: 8px
        line-height: 14px
        color: #07111b
        font-size: 14px
      .content-wrapper
        padding: 0 12px 16px
        position: relative
        .content
          line-height: 24px
          font-size: 12px
          color: #f01414
          font-weight: normal
          vertical-align: baseline
        &:after
          display: block
          position: absolute
          left: 0
          bottom: 0
          width: 100%
          border-top: 1px solid rgba(7,17,27,.1)
          content: " "
      ul
        margin: 0
        padding: 0
        border: 0
        font-size: 100%
        font-weight: normal
        vertical-align: baseline
      .supports
        .support-item
          padding: 16px 12px
          position: relative
          font-size: 0
          .icon
            display: inline-block
            width: 16px
            height: 16px
            vertical-align: top
            margin-right: 6px
            background-size: 16px 16px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_2')
            &.discount
              bg-image('discount_2')
            &.guarantee
              bg-image('guarantee_2')
            &.invoice
              bg-image('invoice_2')
            &.special
              bg-image('special_2')
          .text
            line-height: 16px
            font-size: 12px
            color: #07111b
          &:after
            display: block
            position: absolute
            left: 0
            bottom: 0
            width: 100%
            border-top: 1px solid rgba(7,17,27,.1)
            content: " "
        li
          list-style: none
    .pics
      padding: 18px
      .title
        margin-bottom: 12px
        line-height: 14px
        color: #07111b
        font-size: 14px
      .pic-wrapper
        width: 100%;
        overflow: hidden
        white-space: nowrap
        .pic-list
          font-size: 0
          .pic-item
            display: inline-block
            margin-right: 6px
            width: 120px
            height: 90px
          li
            list-style: none
    .info
      padding: 18px 18px 0
      color: #07111b
      .title
        padding-bottom: 12px
        line-height: 14px
        position: relative
        font-size: 14px
      ul
        .info-item
          padding: 16px 12px
          line-height: 16px
          position: relative
          font-size: 12px
        &:after
          display: block
          position: absolute
          left: 0
          bottom: 0
          width: 100%
          border-top: 1px solid rgba(7,17,27,.1)
          content: " "
</style>

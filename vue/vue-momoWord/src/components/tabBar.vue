<template>
  <div class="tabBar">
    <div class="tab-item" v-for="(item,index) in Iconlist" :key="index" @click="goPages(index)">
      <div class="tab-content">
        <img :src="index===IconIndex?item.url1:item.url" alt="">
        <div class="title">{{item.title}}</div>
      </div>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Iconlist: [
        {
          url: require('../assets/tabBar/xuexi.png'),
          url1: require('../assets/tabBar/xuexi1.png'),
          title: '学习'
        },
        {
          url: require('../assets/tabBar/tongji.png'),
          url1: require('../assets/tabBar/tongji1.png'),
          title: '统计'
        },
        {
          url: require('../assets/tabBar/translation.png'),
          url1: require('../assets/tabBar/translation1.png'),
          title: '翻译'
        },
        {
          url: require('../assets/tabBar/shezhi.png'),
          url1: require('../assets/tabBar/shezhi1.png'),
          title: '设置'
        }
      ],
      IconIndex: 0
    }
  },
  methods: {
    goPages (index) {
      // console.log(index)
      this.IconIndex = index
    }
  }
}
</script>

<style>
.tabBar{
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 9999;
  display: flex;
  background-color: #fff;
}
.tab-item{
  flex: 1;
  height: 50px;
  font-size: 12px;
  color: #bfbfbf;
  position: relative;
}
.tab-content{
  position: absolute;
  margin-top: 5px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
.tab-item img{
  height: 25px;
  width: 25px;
  display: inline-block;
}
</style>

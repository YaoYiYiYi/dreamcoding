<template>
  <div class="footer">
    <div class="foot-item" v-for="(item,index) in Iconlist" :key="index" @click="goPages(index)">
      <div class="foot-content">
        <img :src="item.url" alt="">
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
          url: require('../assets/footer/xuexi1.png'),
          title: '学习'
        },
        {
          url: require('../assets/footer/tongji.png'),
          title: '统计'
        },
        {
          url: require('../assets/footer/translation.png'),
          title: '翻译'
        },
        {
          url: require('../assets/footer/shezhi.png'),
          title: '设置'
        }
      ]
    }
  },
  methods: {
    goPages (index) {
      console.log(index)
    }
  }
}
</script>

<style>
.footer{
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 9999;
  display: flex;
  background-color: #fff;
}
.foot-item{
  flex: 1;
  height: 50px;
  font-size: 12px;
  color: #bfbfbf;
  position: relative;
}
.foot-content{
  position: absolute;
  margin-top: 5px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
.foot-item img{
  height: 25px;
  width: 25px;
  display: inline-block;
}
</style>

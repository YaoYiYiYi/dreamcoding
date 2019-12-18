<template>
  <div class="container">
    <div class="mask" v-show="Starting">
      <div class="header">
        <div class="header-content">
          <div class="circle">
            <div class="circle-title">
              还需<span class="Today-count"> 80 </span>个
            </div>
          </div>
          <div class="plan">
            <div class="plan-title">
              <div class="title">学习计划</div>
              <div class="revise">修改</div>
            </div>
            <div class="word-plan">
              <div class="plan-icon">w</div>
              <span class="title">单词 </span> 40/日
              <span class="count">2134 / 2175</span>
            </div>
            <div class="sentence-plan">
              <span class="plan-icon">S</span>
              <span class="title">句子 </span> 40/日
              <span class="count">2134 / 2175</span>
            </div>
          </div>
        </div>
      </div>
      <div class="huxian"></div>
      <div class="btn" @click="learning">开始学习</div>
      <div class="foot"></div>
    </div>
    <div class="word">
      <div class="word-header">
        <div class="word-header-icon"></div>
        <div class="word-header-content">
          <div class="word-title">possess</div>
          <div class="word-pho">
            <div class="word-pho-title">英 [pəˈzes]</div>
            <div class="vioce-icon">
              <img :src="sound" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="word-mask" @click="goContent" v-show="hideContent">
        <div class="word-mask-p">
          <p class="word-mask-one">请把英文发音和中文意思说出口</p>
          <p class="word-mask-two">点击屏幕显示答案</p>
        </div>
      </div>
      <div class="word-content">
        <div class="word-explain">
          [动] 解释;说明;阐明;说明(…的)原因
          <img :src="write" class="word-explain-icon" alt="" width="18" height="18">
        </div>
        <div class="word-content-scroll" ref="wordContent">
          <div class="example-sentence">
            例句
            <img :src="xuanze" class="example-sentence-icon" alt="" width="18" height="18">
          </div>
          <div class="example-content">
            <p>Learn vocabulary by reading, hearing and viewing words and example sentences. </p>
            <p>通过阅读，听和浏览单词和例句来掌握词汇</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Starting: false,
      sound: require('../../../assets/yinliang.png'),
      hideContent: true,
      write: require('../../../assets/write.png'),
      xuanze: require('../../../assets/xuanze.png')
    }
  },
  methods: {
    learning () {
      this.Starting = false
    },
    goContent () {
      this.hideContent = false
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html, body{
  width: 100%;
  height: 100%;
}
.container, .mask {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: #f4f4f4;
  color: #a7ebd1;
}
.header{
  /* transform: translate(50%); */
  padding: 20px 30px;
  width: 100%;
  height: 400px;
  /* border-radius: 0 0 50px 50px; */
  /* transform: rotate(45deg); */
  background-color:#42c594;
  box-sizing: border-box;
}
.header-content{
  position: relative;
}
.circle{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 200px;
  width: 200px;
  border: 1px solid white;
  border-radius: 50%;
}
.circle-title{
  position: absolute;
  top: 50%;
  /* left: 50%; */
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
}
.circle-title .Today-count{
  font-size: 60px;
  color: white;
}

.plan {
  position: absolute;
  width: 100%;
  top: 235px;
}
.plan-title, .word-plan, .sentence-plan{
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  position: relative;
}
.plan-title{
  border-bottom: 1px solid white;
}
.plan-icon{
  /* display: inline-block;
  vertical-align: middle; */
  margin-top: 12px;
  height: 14px;
  width: 14px;
  border: 1px solid #a7ebd1;
  border-radius: 3px;
  font-size: 12px;
  text-align: center;
}
.title {
  vertical-align: middle;
  margin: 0 9px;
}
.count{
  position: absolute;
  right: 0;
}
.huxian {
  height: 30px;
  width: 100%;
  border-radius: 0 0 100% 100%;
  background-color:#42c594;
}
.btn{
  position: absolute;
  width: 314px;
  height: 50px;
  top: 480px;
  left: 50%;
  transform: translate(-50%,-50%);
  line-height: 50px;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
  background-color: #42c594;
}
.word-header{
  width: 100%;
  height: 100px;
  display: flex;
  background-color: #42c594;
  position: relative;
}
.word-header-content{
  margin: 0 auto;
  margin-top: 34px;
  color: #a7ebd1;
  text-align: center;
}
.word-header-content .word-title{
  font-size: 24px;
}
.word-pho{
    font-size: 12px;
    margin-top: 6px;
    display: flex;
    padding: 0 6px 0 6px;
}
.vioce-icon img{
  height: 15px;
  width: 15px;
  margin-left: 5px;
}

.word-header-icon{
  position: absolute;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
  border: 1px solid #a7ebd1;
  left: 20px;
  bottom: 33px;
  border-top:transparent;
  border-right: transparent;
}
.word-mask{
  width: 100%;
  height: calc(100vh - 150px);
  text-align: center;
  position: relative;
}
.word-mask-p{
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 20px;
  /* color: white; */
}
.word-content{
  height: calc(100vh - 150px);
  width: 100%;
}
.word-explain{
  height: 50px;
  width: 100%;
  padding: 0 18px;
  background-color: #42c594;
  margin-top: 1px;
  display: flex;
  text-align: center;
  line-height: 50px;
}
.word-explain img{
float: right;  
}
</style>

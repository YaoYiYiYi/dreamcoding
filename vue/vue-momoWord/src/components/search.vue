<template>
  <div class="search">
    <input type="text" v-model="query">
    <button @click="search">提交</button>
    <div>{{query}}</div>
  </div>
</template>
<script src="http://shared.ydstatic.com/js/jquery/jquery-3.1.1.min.js"></script>
<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js"></script>
<script src="https://cdn.bootcss.com/js-sha256/0.9.0/sha256.js"></script>
<script>
import api from '../api/index'
export default {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    search () {
      var appKey = '65bff576eebd09c2'
      var key = 'UFAg8yjZ7WKtq6ODFMUH23DmEb7oioCU' // 注意：暴露appSecret，有被盗用造成损失的风险
      var salt = new Date().getTime()
      var curTime = Math.round(new Date().getTime() / 1000)
      var query = this.query
      // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
      var from = 'zh-CHS'
      var to = 'en'
      var str1 = appKey + this.truncate(query) + salt + curTime + key
      console.log(str1)
      var sign = sha256(str1)
      this.$http({
        url: 'http://openapi.youdao.com/api',
        type: 'post',
        dataType: 'jsonp',
        data: {
          q: query,
          appKey: appKey,
          salt: salt,
          from: from,
          to: to,
          sign: sign,
          signType: 'v3',
          curtime: curTime
        }
      }).then((res) => {
        console.log(res)
      })
    },
    truncate () {
      var len = this.query.length
      if (len <= 20) return this.query
      return this.query.substring(0, 10) + len + this.query.substring(len - 10, len)
    }
  }
}
</script>

<style>

</style>

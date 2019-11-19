import Vue from 'vue'
import axios from 'axios'
const vue = new Vue()

// axios配置
axios.defaults.timeout = 10000 // 影响请求的时常，超过10s，就会掐断请求
axios.defaults.baseURL = 'http://localhost:3000'

// 判断返回的状态,响应拦截
axios.interceptors.response.use((res) => {
  if(res.data.code !== 200){
    alert('网络异常')
    return Promise.reject(res)
  }
  return res
}, (error) => {
  alert('网络异常')
  return Promise.reject(error)
})

export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
    .then(response => {
      resolve(response.data) // 抛出数据
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default {
  // 登入接口
  Login (params) {
    return fetchGet('/login', params)
  },
  // banners 轮播图
  BannerList () {
    return fetchGet('/banner')
  },
  // 歌单
  DiscList (params) {
    return fetchGet('/top/playlist', params)
  }
}
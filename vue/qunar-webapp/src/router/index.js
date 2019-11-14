import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// js 的懒加载
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/page/home/Home')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/page/city/City')
    }
  ]
})

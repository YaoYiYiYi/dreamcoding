import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/search'
import Index from '@/components/pages/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})

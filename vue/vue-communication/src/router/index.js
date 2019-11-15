import Vue from 'vue'
import Router from 'vue-router'
import D1 from '@/components/view/demo1/father'
import D2 from '@/components/view/demo2/father2'
import D3 from '@/components/view/demo3/father3'
import D4 from '@/components/view/demo4/father4'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/d1',
      name: 'D1',
      component: D1
    },
    {
      path: '/d2',
      name: 'D2',
      component: D2
    },
    {
      path: '/d3',
      name: 'D3',
      component: D3
    },
    {
      path: '/d4',
      name: 'D4',
      component: D4
    }
  ]
})

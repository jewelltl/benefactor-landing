import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout'
import Home from '@/components/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'main.home',
          component: Home
        }
      ]
    }
  ]
})

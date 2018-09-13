import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import WhatIs from '@/components/WhatIs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/what_is',
      name: 'whatIs',
      component: WhatIs
    }
  ],
  mode: 'history'
})

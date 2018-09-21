import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Report from '@/components/report'
import Docment from '@/components/docment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    },
    {
      path: '/docment',
      name: 'docment',
      component: Docment
    }
  ],
  mode: 'history'
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Vbs from '@/components/about/Vbs'
import Cs from '@/components/about/Cs'
import Bs from '@/components/about/Bs'
import Vs from '@/components/about/Vs'
import Rs from '@/components/about/Rs'
import Report from '@/components/Report'
import Docment from '@/components/Docment'
import Contact from '@/components/Contact'

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
      path: '/about/vbs',
      name: 'vbs',
      component: Vbs
    },
    {
      path: '/about/cs',
      name: 'cs',
      component: Cs
    },
    {
      path: '/about/bs',
      name: 'bs',
      component: Bs
    },
    {
      path: '/about/vs',
      name: 'vs',
      component: Vs
    },
    {
      path: '/about/rs',
      name: 'rs',
      component: Rs
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
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

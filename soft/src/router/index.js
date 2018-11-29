import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../pages/index'
import softStart from '../pages/softStart'
import Case from '../pages/Case'
import About from '../pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/softStart',
      name: 'softStart',
      component: softStart
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    }
  ]
})

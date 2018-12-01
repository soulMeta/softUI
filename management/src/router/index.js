import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mange from '../pages/Mange'
import login from '../pages/login'
import TeamManage from '../pages/TeamManage'
import Index from '../pages/Index'
import managmentAdvice from '../components/managmentAdvice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/mange',
      name: 'Mange',
      component: Mange,
      // redirect: '/mange',
      children: [
        {
          path: '',
          name: 'index',
          component: Index
        },
        {
          path: 'teamManage',
          name: 'TeamManage',
          component: TeamManage
        },
        {
          path: 'managmentAdvice',
          name: 'managmentAdvice',
          component: managmentAdvice
        }
      ]
    }
  ]
})

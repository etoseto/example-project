import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index')
    },
    {
      path: '/VuexExample',
      name: 'VuexExample',
      component: () => import('@/pages/VuexExample')
    },{
      path: '/vueerr',
      name: 'VueErr',
      component: () => import('@/pages/VueErr')
    },{
      path: '/deepClone',
      name: 'DeepClone',
      component: () => import('@/pages/DeepClone')
    },{
      path: '/vueDrag',
      name: 'VueDrag',
      component: () => import('@/pages/VueDrag')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import vueRouterTest from '@/components/vueRouterTest'
import vueRouterChildren1 from '@/components/vueRouterChildren1'
import vueRouterChildren2 from '@/components/vueRouterChildren2'
import componentsLayout from '@/pages/componentsLayout'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/vueRouterTest',
      name: 'vueRouterTest',
      component: vueRouterTest,
      children: [
        {
          path: 'son',
          name: 'vueRouterChildren1',
          component: vueRouterChildren1
        },
        {
          path: 'daughter',
          name: 'vueRouterChildren2',
          component: vueRouterChildren2
        }
      ]
    },
    {
      path: '/componentsLayout',
      name: 'componentsLayout',
      component: componentsLayout
    }
  ]
})

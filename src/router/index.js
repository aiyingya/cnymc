import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/views/main'
import AboutYuntu from '@/views/about-yuntu'
import BrandDetail from '@/views/brand-detail'
import Dynamic from '@/views/dynamic'
import StoreList from '@/views/store-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/AboutYuntu',
      name: 'AboutYuntu',
      component: AboutYuntu
    },
    {
      path: '/BrandDetail',
      name: 'BrandDetail',
      component: BrandDetail
    },
    {
      path: '/Dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/StoreList',
      name: 'StoreList',
      component: StoreList
    }
  ]
})

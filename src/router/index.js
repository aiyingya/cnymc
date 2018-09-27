import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import AboutYuntu from '@/views/about-yuntu'
import BrandDetail from '@/views/brand-detail'
import Dynamic from '@/views/dynamic'
import DynamicDetail from '@/views/dynamic-detial'
import StoreList from '@/views/store-list'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        description: '运图要买车'
      }
    },
    {
      path: '/AboutYuntu',
      name: 'AboutYuntu',
      component: AboutYuntu,
      meta: {
        description: '运图要买车'
      }
    },
    {
      path: '/BrandDetail',
      name: 'BrandDetail',
      component: BrandDetail,
      meta: {
        description: '运图要买车'
      }
    },
    {
      path: '/Dynamic',
      name: 'Dynamic',
      component: Dynamic,
      meta: {
        description: '运图要买车'
      }
    },
    {
      path: '/DynamicDetail',
      name: 'DynamicDetail',
      component: DynamicDetail,
      meta: {
        description: '运图要买车'
      }
    },
    {
      path: '/StoreList',
      name: 'StoreList',
      component: StoreList,
      meta: {
        description: '运图要买车'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* must call `next` */
  document.title = '运图要买车' // set dynamic title => to.meta['description']
  // router.app.$children.length
  let store = router.app.$store
  if (!store) {
    store = router.app.$options.store
  }
  if (to.name === 'Main') {
    store.commit('hideMenu')
  } else {
    store.commit('showMenu')
  }
  if (store.state.isShowDropDown) {
    store.commit('hideDropDown')
  }
  next()
})

router.afterEach((to, from, next) => {
})

export default router

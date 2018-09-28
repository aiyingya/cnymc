/**
 * 作者：eliyaai@yaomaiche.com
 * 描述：Vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
Vue.use(Vuex)
const state = {
  isShowMenu: false,
  isShowDropDown: false,
  transition: 'next'
}

const store = new Vuex.Store({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
})

export default store

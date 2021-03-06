/**
 * 作者：eliyaai@yaomaiche.com
 * 描述：Vuex 具体执行
 */
export default{
  'showMenu': function (state) {
    state.isShowMenu = true
  },
  'hideMenu': function (state) {
    state.isShowMenu = false
  },
  'showDropDown': function (state) {
    state.isShowDropDown = true
  },
  'hideDropDown': function (state) {
    state.isShowDropDown = false
  },
  'setTransition': function (state, data) {
    state.transition = data
  },
  'setIsSkip': function (state, data) {
    state.isSkip = Boolean(data)
  }
}

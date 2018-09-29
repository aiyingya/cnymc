<template>
  <div id="app" class="app appW">
    <header>
      <div class="row other">
        <img class="main-icon-logo" src="./images/logo_yuntu.png">
        <img v-show="$store.state.isShowMenu" class="main-icon-dropDown" :class="{'main-icon-dropDown_show':$store.state.isShowDropDown}" src="./images/icon_drop_down.png" @click="clickMenuButton">
        <img v-show="!$store.state.isShowMenu" class="main-icon-text" src="./images/text.png">
      </div>
    </header>
    <table class="dropDown-list dropDown-hide" :class="{'dropDown_show':$store.state.isShowDropDown}" >
      <tbody>
      <tr v-for="item in menu" :key="item.title">
        <td @click="goMenu(item.target)" :class="{'active':item.target == selectDropDown}"><h4>{{item.title}}</h4></td>
      </tr>
      </tbody>
    </table>
    <div v-show="$store.state.isShowDropDown" class="overlayer" @touchmove.prevent @click="close"></div>
    <!--注释动画效果-->
    <!--<transition :name="$store.state.transition" mode="out-in">-->
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      menu: [{title: '运图首页', target: '/'},
        {title: '关于运图', target: '/AboutYuntu'},
        {title: '品牌介绍', target: '/BrandDetail'},
        {title: '运图动态', target: '/Dynamic'},
        {title: '门店列表', target: '/StoreList'}],
      selectDropDown: ''
    }
  },
  methods: {
    clickMenuButton: function () {
      const _this = this
      if (_this.$store.state.isShowDropDown) {
        _this.$store.commit('hideDropDown')
      } else {
        _this.$store.commit('showDropDown')
      }
    },
    close: function () {
      this.$store.commit('hideDropDown')
    },
    goMenu: function (target) {
      const _this = this
      _this.selectDropDown = target
      const curPath = _this.$router.app._route.path
      setTimeout(function () {
        if (curPath === target) {
          _this.$store.commit('hideDropDown')
        } else {
          _this.$router.push(target)
        }
        _this.selectDropDown = ''
      }, 200)
      // 注释动画效果相关代码
      // this.$store.commit('setIsSkip', true)
    }
  },
  watch: {
    '$route' (to, from) {
      /* 注释动画效果相关代码
      //  注意这里用的是 'fullPath' 参数也存在storage里面哦~~~~
      if (to.name === 'Main') {
        window.localStorage.removeItem('routers')
        this.$store.commit('setTransition', 'next')
      } else {
        let sessionStorage = window.localStorage
        let routersArr = (sessionStorage.getItem('routers') && sessionStorage.getItem('routers').split(',')) || []
        let len = routersArr.length
        if (len === 0) {
          routersArr.push(from.fullPath)
          routersArr.push(to.fullPath)
        } else {
          if (to.fullPath !== routersArr[routersArr.length - 2] || this.$store.state.isSkip) {
            this.$store.commit('setTransition', 'next')
            routersArr.push(to.fullPath)
          } else {
            this.$store.commit('setTransition', 'prev')
            routersArr.splice(len - 1)
          }
        }
        sessionStorage.setItem('routers', routersArr.join(','))
      }
      // clear
      this.$store.commit('setIsSkip', false)
      */
    }
  }

}
</script>

<style>
.transitionRouter-enter-active,
.transitionRouter-leave-active {
  transition: all 0.4s;
}

.transitionRouter-enter,
.transitionRouter-leave{
  transform: translate3d(100%, 0, 0);
}

/*下一页*/

.next-enter-active,.next-leave-active {
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
}

.next-enter {
  opacity: 0;
  -webkit-transform: translate3d(50%, 0, 0);
  transform: translate3d(50%, 0, 0);
}

.next-leave {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
/*上一页*/

.prev-enter-active,.prev-leave-active {
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
}

.prev-enter {
  opacity: 0;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
}

.prev-leave {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 11px;
}
.app {
  height: 100%;
  position: relative;
}
.appW {
  max-width: 540px;
  margin: 0 auto;
}
.main-icon-safe{
  width: 16px;
  height: 16px;
  float: left;
}
.row{
  width: 100%;
  margin-right: 20px;
  display: flex;
  justify-content: left;
  align-items: center;
}
.main-icon-logo{
  width: 112px;
  height: 57px;
  float: left;
}
.other{
  margin-top: 0;
  height: 60px;
}
.main-icon-dropDown{
  position: absolute;
  z-index: 100;
  right: 16px;
  width: 21px;
  height: 18px;
  padding: 5px;
}
.main-icon-dropDown.main-icon-dropDown_show{
  box-shadow: -5px -3px 15px -3px rgba(34,34,34,0.3);
  background-color: white;
}
.main-icon-text{
  position: absolute;
  right: 16px;
  width: 83px;
  height: 42px;
}
  span{
    font-weight: 500;
    margin-left: 12px;
    font-size: 16px;
    color: #333333;
    font-family: PingFangSC-Medium;
  }
body header{
    margin: 9px 0 9px 12px;
  }
  .dropDown-list{
    position: absolute;
    top:62px;
    z-index: 99;
    padding: 0 13px;
    right: 10px;/*from padding , init is 16px*/
    background-color: #FFFFFF;
    border-radius: 6px 0 6px 6px;
    /*border:1px solid red;*/
  }
  table.dropDown-list{
    top: 44px;
    right: 16px;
    box-shadow: 2px -10px 15px -8px rgba(34,34,34,0.1);
  }
  .dropDown-hide{
    overflow: hidden;
    height: 0;
    display: block;
  }
.dropDown_show{
  overflow:auto;
  height: 224px;
  opacity:1;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}
.dropDown-list td{
  padding:12px 15px;
  color: #6E6E6E;
  font-size: 14px;
  line-height: 20px;
  font-family: PingFangSC;
  border-bottom: 0.5px solid #CFCFCF;
}

.dropDown-list tr:last-child td{
  border: 0;
}

.overlayer{
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
  z-index:10;
}
.dropDown-list td.active{
    color: #DD0707;
}
::-webkit-scrollbar {
  display: none;
}
</style>

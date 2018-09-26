<template>
  <div id="app" class="app appW">
    <header>
      <div class="row other">
        <img class="main-icon-logo" src="./images/logo_yuntu.png">
        <img class="main-icon-dropDown" src="./images/icon_drop_down.png" @click="clickMenuButton">
        <img class="main-icon-text" src="./images/text.png">
      </div>
    </header>
    <table class="dropDown-list dropDown-hide" :class="{'dropDown-show':isShow}" >
      <tbody>
      <tr v-for="item in menu" :key="item.title">
        <td @click="goMenu(item.target)">{{item.title}}</td>
      </tr>
      </tbody>
    </table>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      menu: [{title: '运图首页', target: '/'},
        {title: '关于运图', target: 'AboutYuntu'},
        {title: '品牌介绍', target: 'BrandDetail'},
        {title: '运图动态', target: 'Dynamic'},
        {title: '门店列表', target: 'StoreList'}],
      isShow: false
    }
  },
  methods: {
    clickMenuButton: function () {
      this.isShow = !this.isShow
    },
    goMenu: function (target) {
    	this.$router.push(target)
    }
  }

}
</script>

<style>
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
  margin-top: 21px;
  height: 60px;
}
.main-icon-dropDown{
  position: absolute;
  right: 16px;
  width: 21px;
  height: 18px;
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
    z-index: 100;
    padding: 0 13px;
    right: -10px;/*from padding , init is 16px*/
    width: 112px;
    background-color: #FFFFFF;
    border-radius: 6px;
    /*border:1px solid red;*/
  }
  .dropDown-hide{
    overflow: hidden;
    height: 0;
    display: block;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }
.dropDown-show{
  overflow:auto;
  height: 110px;
  opacity:1;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}
.dropDown-list td{
  color: #6E6E6E;
  font-size: 14px;
  font-family: PingFangSC;
  border-bottom: 0.5px solid #CFCFCF;
}
.dropDown-list tr:last-child td{
  border: 0;
}

.main-icon-dropDown{
  display: none;
}
.main-icon-text{
  display: block;
}
</style>

<!--运图动态-->
<template>
  <div class="dynamic">
    <div class="banner">
      <img src="../images/dynamic/banner.png">
      <img class="img_title" src="../images/dynamic/banner_title.png">
    </div>
    <div v-for="item in dynamicList" :key="item.index" class="dynamic_item" @click="goDynamicDetail(item.index)">
      <div class="dynamic_detial">
        <h4>{{item.title}}</h4>
        <div>{{item.time}}</div>
      </div>
      <img :src="item.imgSrc">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dynamic',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dynamicList: [{
        title: '新店开业成交23台，遂川店开业庆典&吉安区团购大联动',
        time: '2018-09-08 11:14:53',
        imgSrc: require('../images/dynamic/01/image001.jpg'),
        index: 1
      }, {
        title: '盛夏购车季，运图要买车信丰店团购活动圆满结束！',
        time: '2018-09-03 11:23:02',
        imgSrc: require('../images/dynamic/02/image001.jpg'),
        index: 2
      }, {
        title: '前方高能，运图要买车要搞大事情啦',
        time: '2018-09-03 11:23:02',
        imgSrc: require('../images/dynamic/03.png'),
        index: 3
      }, {
        title: '服务无止境，运图要买车“客户满意月”活动圆满结束',
        time: '2018-06-18 11:08:02',
        imgSrc: require('../images/dynamic/04/image001.jpg'),
        index: 4
      }, {
        title: '全囯连锁汽车超市，运图要买车强势登陆安福',
        time: '2018-04-01 10:05:08',
        imgSrc: require('../images/dynamic/05/image001.jpg'),
        index: 5
      }, {
        title: '热情如火！运图要买车开春团车会圆满结束',
        time: '2018-03-26 11:08:02',
        imgSrc: require('../images/dynamic/06/image001.jpg'),
        index: 6
      }, {
        title: '运图要买车全程助力，大余山地马拉松圆满落幕',
        time: '2018-04-23 11:08:02',
        imgSrc: require('../images/dynamic/07/image001.jpg'),
        index: 7
      }]
    }
  },
  methods: {
    goDynamicDetail:function (_index) {
      this.$router.push({name: 'DynamicDetail',query: {stage: _index}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .dynamic{
    border-top:0.5px solid #DDDDDD;
  }
  .banner{
    position: relative;
  }
  .banner .img_title{
    position: absolute;
    right: 25px;
    bottom: 11px;
    width: 85px;
    height: 138px;
  }
  img{
    width: 100%;
  }
  .dynamic_item{
    display: -webkit-box;
    -webkit-box-align: center;
    padding: 15px;
    border-bottom: 0.5px solid #E8E8E8;
  }
  .dynamic_item .dynamic_detial{
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-align: left;
  }
  .dynamic_item .dynamic_detial h4{
    font-size: 15px;
    line-height: 21px;
    color: #4C4B4B;
  }
  .dynamic_item .dynamic_detial div{
    font-size: 12px;
    line-height: 17px;
    color: #BDBDBD;
  }

  .dynamic_item img{
    -webkit-box-flex: 1;
    padding-left: 38px;
    width: 109px;
    height: 72px;
  }
</style>

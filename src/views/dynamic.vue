<!--运图动态-->
<template>
  <div class="dynamic">
    <div class="banner">
      <img src="../images/dynamic/banner.png">
      <img class="img_title" src="../images/dynamic/banner_title.png">
    </div>
    <div class="dynamic_item">
      <div class="dynamic_detial">
        <h4>新店开业成交23台，遂川店开业庆典&吉安区团购大联动</h4>
        <div>2018-09-08 11:14:53</div>
      </div>
      <img src="../images/dynamic/01/image001.jpg">
    </div>
    <div class="dynamic_item">
      <div class="dynamic_detial">
        <h4>盛夏购车季，运图要买车信丰店团购活动圆满结束！</h4>
        <div>2018-09-03 11:23:02</div>
      </div>
      <img src="../images/dynamic/02/image001.jpg">
    </div>
    <div class="dynamic_item">
      <div class="dynamic_detial">
        <h4>前方高能，运图要买车要搞大事情啦</h4>
        <div>2018-09-03 11:23:02</div>
      </div>
      <img src="../images/dynamic/03.png">
    </div>
    <div class="dynamic_item">
      <div class="dynamic_detial">
        <h4>服务无止境，运图要买车“客户满意月”活动圆满结束</h4>
        <div>2018-06-18 11:08:02</div>
      </div>
      <img src="../images/dynamic/04/image001.jpg">
    </div>
    <div class="dynamic_item">
      <div class="dynamic_detial">
        <h4>全囯连锁汽车超市，运图要买车强势登陆安福</h4>
        <div>2018-04-01 10:05:08</div>
      </div>
      <img src="../images/dynamic/05/image001.jpg">
    </div>
    <div class="dynamic_item">
      <div class="dynamic_detial">
        <h4>热情如火！运图要买车开春团车会圆满结束</h4>
        <div>2018-03-26 11:08:02</div>
      </div>
      <img src="../images/dynamic/06/image001.jpg">
    </div>
    <div class="dynamic_item">
      <div class="dynamic_detial">
        <h4>运图要买车全程助力，大余山地马拉松圆满落幕</h4>
        <div>2018-04-23 11:08:02</div>
      </div>
      <img src="../images/dynamic/07/image001.jpg">
    </div>
  </div>
</template>

<script>
import dynamic01 from '@/components/dynamic/01.vue'
import dynamic02 from '@/components/dynamic/02.vue'
export default {
  name: 'Dynamic',
  components: {
    dynamic01: dynamic01,
    dynamic02: dynamic02
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

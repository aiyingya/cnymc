<!--首页-->
<template>
  <div class="main">
    <template>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="imgUrl in listImg" :key="imgUrl">
            <img :src="imgUrl">
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
      </div>
    </template>
    <div class="main_icons">
        <ul>
          <li><div><img src="../images/main/icon_about_yuntu.png"></div><div>关于运图</div></li>
          <li><div><img src="../images/main/icon_brand_introduce.png"></div><div>关于运图</div></li>
          <li><div><img src="../images/main/icon_dynamic.png"></div><div>关于运图</div></li>
          <li><div><img src="../images/main/icon_store_list.png"></div><div>关于运图</div></li>
        </ul>
    </div>
    <div class="main_dynamic">
      <ul>
        <li><img src="../images/main/text_01.png"></li>
        <li><img src="../images/main/text_02.png"></li>
        <li>关于运图关于运图的范德萨发热关于运图关是的范德萨于运图关于运图关于运图关于运图关于运图的范德萨发热关于运图关是的范德萨于运图关于运图关于运图</li>
      </ul>
    </div>
    <div class="main_text">
      <h3>品牌介绍</h3>
      <span>BRAND INTRODUCTION</span>
    </div>
    <div class="main_brands clearfix">
      <img src="../images/main/brand_01.png">
      <img src="../images/main/brand_02.png">
      <img src="../images/main/brand_03.png">
      <img src="../images/main/brand_04.png">
      <img src="../images/main/brand_05.png">
      <img src="../images/main/brand_06.png">
    </div>
    <div class="main_bottom" v-html="bottomText">
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'HelloWorld',
  data () {
    return {
      bottomText: '版权所有 &#169 2018 运图要买车 沪 ICP 备 15014796号 -1',
      msg: 'Welcome to Your Vue.js App',
      listImg: [require('../images/brand_detail/01.png'),
        require('../images/brand_detail/02.png')]
    }
  },
  mounted () {
    setTimeout(function () {
      /* eslint-disable no-new */
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        loop: true,
        autoHeight: true
        /*  onTouchEnd: function () {
          swiper.startAutoplay()
        } */
      })
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper-container {
    width: 100%;
    min-height: 100px;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      overflow: hidden;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .main_icons{
    height: 93px;
    background-color: #FFFFFF;
  }
  .main_icons ul{
    display: -webkit-box;
    height: 100%;
  }
  .main_icons li{
    display: -webkit-box;
     -webkit-box-flex: 1;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-box-orient: vertical;
  }
  .main_icons li>div{
    -webkit-box-align: center;
    -webkit-box-pack: center;
    color: #4C4B4B;
    font-size: 12px;
  }
  .main_icons li>div:first-child{
    margin-bottom: 5px;
  }
  .main_icons li>div img{
    height: 42px;
    width: 42px;
  }
  .main_dynamic{
    padding-left: 15px;
    padding-right: 17px;
    height: 49px;
    background-color: #FFFFFF;
    border-top:0.5px solid #E8E8E8;
  }
  .main_dynamic ul{
    display: -webkit-box;
    height: 100%;
  }
  .main_dynamic ul li{
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0;
  }
  .main_dynamic ul li:nth-child(2){
    margin-left: 15px;
  }
  .main_dynamic ul li:nth-child(3){
    display: block;
    -webkit-box-flex: 1;
    margin-left: 7px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow:ellipsis;
    width: 100%;
    height: 49px;
    line-height: 49px;
  }
  .main_dynamic ul li:first-child>img{
    width: 68px;
    height: 15px;
  }
  .main_dynamic ul li:nth-child(2)>img{
    width: 29px;
    height: 17px;
  }
  .main_text{
    padding: 13px 15px 11px;
    height: 28px;
    line-height: 28px;
    background-color: #F2F2F2;
  }
  .main_text h3{
    float: left;
    font-size: 17px;
  }
  .main_text span{
    float: right;
    font-size: 20px;
    color: #E8E8E8;
  }
  .main_brands{
    padding: 0 15px 11px;
    background-color: #F2F2F2;
  }
  .main_brands img{
    float: left;
    width: 47%;
    height:109px;
    margin-bottom: 9px;
  }
  .main_brands img:nth-child(2n){
    float: right;
  }
  .main_bottom{
    padding-top: 5px;
    padding-bottom: 12px;
    height: 13px;
    font-size: 11px;
    line-height: 13px;
    color: #BEBDBD;
    background-color: #F2F2F2;
  }

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

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
          <router-link :to="{ name: 'AboutYuntu'}" tag="li"><div><img src="../images/main/icon_about_yuntu.png"></div><div>关于运图</div></router-link>
          <router-link :to="{ name: 'BrandDetail'}" tag="li"><div><img src="../images/main/icon_brand_introduce.png"></div><div>品牌介绍</div></router-link>
          <router-link :to="{ name: 'Dynamic'}" tag="li"><div><img src="../images/main/icon_dynamic.png"></div><div>运图动态</div></router-link>
          <router-link :to="{ name: 'StoreList'}" tag="li"><div><img src="../images/main/icon_store_list.png"></div><div>门店列表</div></router-link>
        </ul>
    </div>
    <div class="main_dynamic">
      <ul>
        <li><img src="../images/main/text_01.png"></li>
        <li><img src="../images/main/text_02.png"></li>
        <router-link :to="{ name: 'DynamicDetail', query: {stage: 1}}" tag="li">新店开业成交23台，遂川店开业庆典&吉安区团购大联动</router-link>
      </ul>
    </div>
    <div class="main_text">
      <h3>品牌介绍</h3>
      <span>BRAND INTRODUCTION</span>
    </div>
    <ul class="main_brands clearfix">
      <li><img @click="clickDetial(1)" src="../images/main/brand_01.png"></li>
      <li><img @click="clickDetial(2)" src="../images/main/brand_02.png"></li>
      <li><img @click="clickDetial(3)" src="../images/main/brand_03.png"></li>
      <li><img @click="clickDetial(4)" src="../images/main/brand_04.png"></li>
      <li><img @click="clickDetial(5)" src="../images/main/brand_05.png"></li>
      <li><img @click="clickDetial(6)" src="../images/main/brand_06.png"></li>
    </ul>
    <a class="main_bottom" v-html="bottomText" @click="open"></a>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'Main',
  data () {
    return {
      bottomText: '版权所有 &#169 2018 运图要买车 沪 ICP 备 15014796号 -1',
      msg: 'Welcome to Your Vue.js App',
      listImg: [require('../images/banner_01.jpg'),
        require('../images/banner_02.jpg')]
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
  },
  methods: {
    clickDetial: function (index) {
      this.$router.push({name: 'BrandDetail', query: { index: index }})
    },
    open: function () {
      window.open('http://www.miibeian.gov.cn/', '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
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
    ul{
      display: -webkit-box;
      height: 100%;
    }
    li{
      display: -webkit-box;
      -webkit-box-flex: 1;
      -webkit-box-align: center;
      -webkit-box-pack: center;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
    }
    li>div{
      -webkit-box-align: center;
      -webkit-box-pack: center;
      color: #4C4B4B;
      font-size: 12px;
    }
    li>div:first-child{
      margin-bottom: 5px;
    }
    li>div img{
      height: 42px;
      width: 42px;
    }
  }
  .main_dynamic{
    padding-left: 15px;
    padding-right: 17px;
    height: 49px;
    background-color: #FFFFFF;
    border-top:0.5px solid #E8E8E8;
    ul{
      display: -webkit-box;
      height: 100%;
      li{
        display: flex;
        justify-content: left;
        align-items: center;
        margin: 0;
      }
      li:nth-child(2){
        margin-left: 15px;
      }
      li:nth-child(3){
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
      li:first-child>img{
        width: 68px;
        height: 15px;
      }
      li:nth-child(2)>img{
        width: 29px;
        height: 17px;
      }
    }
  }
  .main_text{
    padding: 13px 15px 11px;
    height: 28px;
    line-height: 28px;
    background-color: #F2F2F2;
    h3{
      float: left;
      font-size: 17px;
    }
    span{
      float: right;
      font-size: 20px;
      color: #E8E8E8;
    }
  }
  .main_brands{
    padding: 0 15px 11px;
    background-color: #F2F2F2;
    li{
      margin: 0;
      float: left;
      width: 47%;
      height:109px;
      margin-bottom: 9px;
    }
    img{
      width: 100%;
      height: 100%;
    }
    li:nth-child(2n){
      float: right;
    }
  }
  .main_bottom{
    display: block;
    padding-top: 5px;
    padding-bottom: 12px;
    height: 13px;
    font-size: 11px;
    line-height: 13px;
    color: #BEBDBD;
    background-color: #F2F2F2;
  }

</style>

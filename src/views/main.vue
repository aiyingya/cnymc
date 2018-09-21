<!--首页-->
<template>
  <div class="hello">
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
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'HelloWorld',
  data () {
    return {
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

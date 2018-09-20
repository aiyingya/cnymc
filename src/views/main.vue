<!--首页-->
<template>
  <div class="hello">

    <template>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide img_banner" v-for="imgUrl in listImg"  :key="imgUrl" :style="{backgroundImage:'url(' + imgUrl + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
      </div>
    </template>
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
      listImg: [require('../images/brand_detail/01.png'),require('../images/brand_detail/02.png')]
    }
  },
  mounted () {
    setTimeout(function () {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: 4000,
        onTouchEnd: function () {
          swiper.startAutoplay()
        }
      })
    }, 100)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img_banner{
    width: 100%;
    height: auto;
  }
  .swiper-container {
    width: 100%;
    height: 10rem;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-pagination-bullet {
    width:0.833rem;
    height: 0.833rem;
    display: inline-block;
    background: #7c5e53;
  }
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

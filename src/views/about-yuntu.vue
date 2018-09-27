<template>
  <div class="about-yuntu">
    <div class="banner">
      <img src="../images/about-yuntu/banner.png">
      <img class="img_title" src="../images/about-yuntu/banner_title.png">
    </div>
    <div class="contain">
      <p>
        “运图要买车”隶属于上海运图投资有限公司，是首家真正打通交易闭环的自营县域级全国连锁汽车超市，由中国电子商务成功探索者——卜广齐于2014年10月在上海成立。“运图要买车”通过投资区域性汽车电商、线上线下结合O2O汽车电商等形式进行了充分实践与探索，最终选择了县域市场作为公司的核心目标市场，自建线下连锁汽车超市，将业务深耕到县级市场，服务于日益增长的县域级客户。
      </p>
      <p class="text_title_second mTop27">覆盖区域</p>
      <p class="text_title_third">OVERLAY AREA</p>
      <p>
        2017年，运图要买车花了6个月的时间，在赣州3区15县建立了20家线下连锁汽车超市，覆盖近千万人口。2018年，计划新增加50家门店，在整个江西境内由南向北滚动，目标覆盖2815万人口。未来，运图要买车将以江西为基点向全国范围辐射，把全国连锁汽车超市的品牌推向全国每个县市。
      </p>
      <img src="../images/about-yuntu/01.png">
      <p class="text_title_second mTop37">运图大事记</p>
      <p class="text_title_third">YUNTU MEMORABILIA</p>
      <img src="../images/about-yuntu/02.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutYuntu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
  },
  beforeRouteLeave: function (to, from, next) {
    var _this = this
    _this.$store.commit('hideDropDown')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  .contain{
    padding: 27px 16px 20px 18px;
  }
  p{
    text-indent: 2em;
    text-align: left;

  }
  p.text_title_second{
    text-indent: 0;
    text-align: left;
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    color: #4C4B4B;
  }
  p.text_title_third{
    text-indent: 0;
    text-align: left;
    font-size: 12px;
    line-height: 17px;
    color: #E8E8E8;
  }
  .mTop27{
    margin-top: 27px;
  }
  .mTop37{
    margin-top: 37px;
  }
</style>

<template>
  <div class="about-yuntu">
    <div class="banner">
      <img src="../images/about-yuntu/banner.png">
      <img class="img_title" src="../images/about-yuntu/banner_title.png">
    </div>
    <div class="contain">
      <p>
        “运图要买车”隶属于上海运图投资有限公司，是首家真正打通交易闭环的自营县域级全国连锁汽车超市，由中国电子商务成功探索者——卜广齐于2014年10月在上海成立
      </p>
      <p class="text_title_second mTop27">覆盖区域</p>
      <p class="text_title_third">OVERLAY AREA</p>
      <p>
        “运图要买车”隶属于上海运图投资有限公司，是首家真正打通交易闭环的自营县域级全国连锁汽车超市，由中国电子商务成功探索者——卜广齐于2014年10月在上海成立
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #app .main-icon-dropDown{
    display: block;
  }
  #app .main-icon-text{
    display: none;
  }
</style>
<style scoped>

  .about-yuntu .banner{
    position: relative;
  }
  .about-yuntu .contain{
    padding: 27px 16px 20px 18px;
  }
  img{
    width: 100%;
  }
  .banner .img_title{
    position: absolute;
    right: 25px;
    bottom: 11px;
    width: 85px;
    height: 138px;
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
  .mTop37{
    margin-top: 37px;
  }
</style>

<!--门店列表-->
<template>
  <div class="store-list">
    <div class="banner">
      <img src="../images/store-list/banner.png">
      <img class="img_title" src="../images/store-list/banner_title.png">
    </div>
    <h4 class="text">运图要买车-全国服务热线：400-928-9099</h4>
    <div class="store-list_item" v-for="store in storeList" :key="store.city">
      <div class="city">{{store.city}}</div>
      <div class="info" v-for="info in store.list" :key="info.name">
        <div>
          <h4 class="text1">{{info.name}}</h4>
          <div class="text2">{{info.address}}</div>
          <div class="text3">{{info.phone}}</div>
        </div>
        <a class="a_img" :href="'tel:'+info.phone"><img src="../images/store-list/phone.png"></a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'StoreList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // 门店列表
      storeList: [{
        city: '赣州',
        list: [{
          name: '章贡旗舰店',
          address: '赣州市章贡区金潭大道11号',
          phone: '0797-8292666'
        }, {
          name: '会昌旗舰店',
          address: '赣州市会昌县文武坝镇林岗村打石岗206国道',
          phone: '0797-5625555'
        }, {
          name: '瑞金旗舰店',
          address: '赣州市瑞金市323国道旁大布汽车城',
          phone: '0797-2309699'
        }, {
          name: '兴国旗舰店',
          address: '赣州市兴国县新区大道262号国兴汽车城',
          phone: '0797-5259066'
        }, {
          name: '于都旗舰店',
          address: '赣州市于都县长征广场加油站斜对面',
          phone: '0797-6296606'
        }, {
          name: '于都二店旗舰店',
          address: '赣州市于都县鸿顺驾驶员考试中心旁',
          phone: '0797-6369886'
        }, {
          name: '宁都旗舰店',
          address: '赣州市宁都县梅江镇新庄汽车站对面',
          phone: '0797-6919123'
        }, {
          name: '信丰旗舰店',
          address: '赣州市信丰县南部物流城汽车4S区',
          phone: '0797-3336918'
        }, {
          name: '大余旗舰店',
          address: '赣州市大余县南安镇伯坚大道中段邮政储蓄对面',
          phone: '0797-8701778'
        }, {
          name: '龙南旗舰店',
          address: '赣州市龙南县奥园迎宾花园右侧',
          phone: '0797-2119181'
        }, {
          name: '赣县旗舰店',
          address: '赣州市赣县区梅林大街139号',
          phone: '400-928-9099'
        }]
      }, {
        city: '吉安',
        list: [{
          name: '遂川旗舰店',
          address: '吉安市遂川县泉江镇105国道城东车市内',
          phone: '0796-6256518'
        }, {
          name: '安福旗舰店',
          address: '吉安市安福县主干道武功山大道456号',
          phone: '0796-7689699'
        }, {
          name: '安福工业园旗舰店',
          address: '吉安市安福县工业园鸿达检测站旁',
          phone: '0796-76500668'
        }, {
          name: '泰和旗舰店',
          address: '吉安市泰和县澄江大道国兴农机城',
          phone: '0796-5389918'
        }, {
          name: '吉州旗舰店',
          address: '吉安市吉州区钓源大道凯旋国际商贸城7楼1层',
          phone: '0796-8282516'
        }]
      }, {
        city: '宜春',
        list: [{
          name: '樟树旗舰店',
          address: '宜春市樟树市仁和大道华正道物流汽贸园1号',
          phone: '18897953923'
        }, {
          name: '上高旗舰店',
          address: '宜春市上高县锦江镇上高汽车城 ',
          phone: '0795-2502208'
        }, {
          name: '宜丰旗舰店',
          address: '宜春市宜丰县新昌镇沿山公路886号',
          phone: '0795-2988851'
        }, {
          name: '万载旗舰店',
          address: '宜春市万载县320国道汽车城',
          phone: '0795-8811816'
        }]
      }]
    }
  },
  created: function () {

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
  .text{
    display: block;
    padding:8px 0;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    color: #DF1717;
  }
  .store-list_item{
    text-align: left;
  }
  .store-list_item .info{
    display: -webkit-box;
    -webkit-box-align: center;
    padding: 10px 15px;
    border-bottom: 0.5px solid #E8E8E8;
  }
  .store-list_item .text1{
    font-size: 15px;
    line-height: 21px;
    color: #4C4B4B;
  }
  .store-list_item .text2, .store-list_item .text3{
    font-size: 12px;
    line-height: 17px;
    color: #8C8C8C;
  }
  .store-list_item  .a_img{
    padding: 5px;
  }
  .store-list_item img{
    -webkit-box-flex: 1;
    width: 26px;
    height: 26px;
  }
  .store-list_item .city{
    padding: 9px 0 9px 15px;
    font-size: 15px;
    line-height: 21px;
    color: #929292;
    background-color: #DDDDDD;
  }

  .store-list_item .info>div{
    display: -webkit-box;
    -webkit-box-flex: 1;
    -webkit-box-pack: center;
    -webkit-box-orient: vertical;
  }
  .store-list_item .info a{
    display: -webkit-inline-box;
  }
</style>

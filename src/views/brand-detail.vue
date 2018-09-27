<!--品牌详情-->
<template>
  <div class="brand-detail">
    <div class="banner">
      <img src="../images/brand/banner.png">
      <img class="img_title" src="../images/brand/banner_title.png">
    </div>
    <ul>
      <li @click="tabClick(1)" :class="{'active':tabIndex==1}">植根县域</li>
      <li @click="tabClick(2)" :class="{'active':tabIndex==2}">车多价好</li>
      <li @click="tabClick(3)" :class="{'active':tabIndex==3}">一站服务</li>
      <li @click="tabClick(4)" :class="{'active':tabIndex==4}">打造体系</li>
      <li @click="tabClick(5)" :class="{'active':tabIndex==5}">资源共享</li>
      <li @click="tabClick(6)" :class="{'active':tabIndex==6}">开放社区</li>
    </ul>
    <brand01 v-show="tabIndex==1"></brand01>
    <brand02 v-show="tabIndex==2"></brand02>
    <brand03 v-show="tabIndex==3"></brand03>
    <brand04 v-show="tabIndex==4"></brand04>
    <brand05 v-show="tabIndex==5"></brand05>
    <brand06 v-show="tabIndex==6"></brand06>
  </div>
</template>

<script>
import brand01 from '@/components/brand/01.vue'
import brand02 from '@/components/brand/02.vue'
import brand03 from '@/components/brand/03.vue'
import brand04 from '@/components/brand/04.vue'
import brand05 from '@/components/brand/05.vue'
import brand06 from '@/components/brand/06.vue'
export default {
  name: 'BrandDetail',
  data () {
    return {
      tabIndex: 1
    }
  },
  components: {
    brand01: brand01,
    brand02: brand02,
    brand03: brand03,
    brand04: brand04,
    brand05: brand05,
    brand06: brand06
  },
  methods: {
    tabClick: function (index) {
      var _this = this
      _this.tabIndex = index
    }
  },
  created: function () {
    const _this = this
    const _index = _this.$route.query.index
    if (_index) {
      try {
        _this.tabIndex = Number(_index)
      } catch (e) {
        _this.tabIndex = 1
      }
      return
    }
    _this.tabIndex = 1
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
  .brand-detail{
    margin-bottom: 50px;
  }
  .brand-detail .banner{
    position: relative;
  }
  .brand-detail .banner .img_title{
    position: absolute;
    right: 25px;
    bottom: 11px;
    width: 85px;
    height: 138px;
  }
  .brand-detail img{
    width: 100%;
  }
  .brand-detail ul{
    display: -webkit-box;
    padding: 12px 17px;
    border-bottom: 0.5px solid #F2F2F2;
  }
  .brand-detail ul li{
    position: relative;
    -webkit-box-flex: 1;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
  }

  .brand-detail ul li.active{
    position: relative;
    -webkit-box-flex: 1;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
  }
  .brand-detail ul li.active:before {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 30%;
    width: 40%;
    border-bottom: 2px solid #DD0707;
  }

</style>

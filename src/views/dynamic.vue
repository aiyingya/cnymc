<!--运图动态-->
<template>
  <div class="dynamic">
      <img src="../images/dynamic/01/01.png">
      <div class="dynamic_item">
        <div class="dynamic_detial">
          <h4>新店开业成交23台，遂川店开 业庆典&吉安区团购大联动</h4>
          <div>2018-09-8 11:14:53</div>
        </div>
        <img src="../images/dynamic/01/01.png">
      </div>
      <div class="dynamic_item">
        <div class="dynamic_detial">
          <h4>新店开业成交23台，遂川店开 业庆典&吉安区团购大联动</h4>
          <div>2018-09-8 11:14:53</div>
        </div>
        <img src="../images/dynamic/01/01.png">
      </div>

  </div>
</template>

<script>
import dynamic01 from '@/components/dynamic/01.vue'
import dynamic02 from '@/components/dynamic/02.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    dynamic01: dynamic01,
    dynamic02: dynamic02
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dynamic{
    border-top:0.5px solid #DDDDDD;
  }
  .dynamic img{
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

<!--运图动态-->
<template>
  <div class="dynamic_detial">
    <dynamic01 v-if="dyIndex==1"></dynamic01>
    <dynamic02 v-if="dyIndex==2"></dynamic02>
    <dynamic03 v-if="dyIndex==3"></dynamic03>
    <dynamic04 v-if="dyIndex==4"></dynamic04>
    <dynamic05 v-if="dyIndex==5"></dynamic05>
    <dynamic06 v-if="dyIndex==6"></dynamic06>
  </div>
</template>

<script>
import dynamic01 from '@/components/dynamic/01.vue'
import dynamic02 from '@/components/dynamic/02.vue'
export default {
  name: 'DynamicDetail',
  components: {
    dynamic01: dynamic01,
    dynamic02: dynamic02
  },
  data () {
    return {
      dyIndex: 1
    }
  },
  created: function () {
    const _this = this
    const _index = _this.$route.query.index
    if (_index) {
      try {
        _this.dyIndex = Number(_index)
      } catch (e) {
        _this.dyIndex = 1
      }
      return
    }
    _this.dyIndex = 1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dynamic_detial{
    border-top:0.5px solid #DDDDDD;
  }
</style>

<!--运图动态-->
<template>
  <div class="dynamic_detial">
    <dynamic01 v-if="temIndex==1"></dynamic01>
    <dynamic02 v-if="temIndex==2"></dynamic02>
    <dynamic03 v-if="temIndex==3"></dynamic03>
    <dynamic04 v-if="temIndex==4"></dynamic04>
    <dynamic05 v-if="temIndex==5"></dynamic05>
    <dynamic06 v-if="temIndex==6"></dynamic06>
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
      temIndex: 1
    }
  },
  created: function () {
    const _this = this
    const _index = _this.$route.query.index
    if (_index) {
      _this.temIndex = Number(_index)
      return
    }
    _this.temIndex = 1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dynamic_detial{
    border-top:0.5px solid #DDDDDD;
  }
</style>

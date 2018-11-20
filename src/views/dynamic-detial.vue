<!--运图动态-->
<template>
  <div class="dynamic_detial">
    <dynamic01 v-show="dyIndex==1"></dynamic01>
    <dynamic02 v-show="dyIndex==2"></dynamic02>
    <dynamic03 v-show="dyIndex==3"></dynamic03>
    <dynamic04 v-show="dyIndex==4"></dynamic04>
    <dynamic05 v-show="dyIndex==5"></dynamic05>
    <dynamic06 v-show="dyIndex==6"></dynamic06>
    <dynamic07 v-show="dyIndex==7"></dynamic07>
    <dynamic08 v-show="dyIndex==8"></dynamic08>
    <dynamic09 v-show="dyIndex==9"></dynamic09>
    <dynamic10 v-show="dyIndex==10"></dynamic10>
  </div>
</template>

<script>
import dynamic01 from '@/components/dynamic/01.vue'
import dynamic02 from '@/components/dynamic/02.vue'
import dynamic03 from '@/components/dynamic/03.vue'
import dynamic04 from '@/components/dynamic/04.vue'
import dynamic05 from '@/components/dynamic/05.vue'
import dynamic06 from '@/components/dynamic/06.vue'
import dynamic07 from '@/components/dynamic/07.vue'
import dynamic08 from '@/components/dynamic/08.vue'
import dynamic09 from '@/components/dynamic/09.vue'
import dynamic10 from '@/components/dynamic/10.vue'

export default {
  name: 'DynamicDetail',
  components: {
    dynamic01: dynamic01,
    dynamic02: dynamic02,
    dynamic03: dynamic03,
    dynamic04: dynamic04,
    dynamic05: dynamic05,
    dynamic06: dynamic06,
    dynamic07: dynamic07,
    dynamic08: dynamic08,
    dynamic09: dynamic09,
    dynamic10: dynamic10
  },
  data () {
    return {
      dyIndex: 1
    }
  },
  activated: function () {
    const _this = this
    window.scrollTo(0, 0) // TODO: 不建议写在这里
    const _index = _this.$route.query.stage
    if (_index) {
      try {
        _this.dyIndex = Number(_index)
      } catch (e) {
        _this.dyIndex = 1
      }
    } else {
      _this.dyIndex = 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dynamic_detial{
    padding-bottom: 10px;
    border-top:0.5px solid #DDDDDD;
  }
</style>

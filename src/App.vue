<template>
  <div id="app" class="app appW">
    <header>
      <img class="main-icon" src="./assets/logo.png">
    </header>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app {
  height: 100%;
  position: relative;
}
.appW {
  max-width: 540px;
  margin: 0 auto;
}
.main-icon{
  width: 16px;
  height: 16px;
  float: left;
}
</style>

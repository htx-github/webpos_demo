<template>
  <div id="app">
    <leftNav/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>
<script>
import leftNav from "@/components/layout/leftNav";
export default {
  name: "app",
  components: {
    leftNav
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  float: left;
  width:95%; 
  background-color: #EFF2F7;
  height:100%;
  overflow:hidden;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

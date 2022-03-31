<template>
   <navCom/>
   <homeCOMP/>
    <router-view> </router-view>
</template>

<script>


import navCom from './components/navbar.vue'
export default {
  name: 'App',
  components: {
    navCom,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
body{
  background-color: #2c3e50;
}
</style>

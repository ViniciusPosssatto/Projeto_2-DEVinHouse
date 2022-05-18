<template>
 <div class="app">
   <NavBar />
   <SideBar class="left"/>
   
  <router-view></router-view>

 </div>
</template>

<script>
import NavBar from './components/template/navbar/NavBar.vue';
import SideBar from './components/template/sidebar/SideBar.vue';


export default {
  name: 'App',
  components: {
    NavBar,
    SideBar
}
}
</script>

<style>

.left{
  float: left;
}
</style>

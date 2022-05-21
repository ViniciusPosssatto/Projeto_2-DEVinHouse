<template>
 <div class="app">
   <NavBar />
   <SideBar class="page"/>
   
   <div class="div-pai">
     <router-view ></router-view>
   </div>

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
.div-pai {
  width: calc(100% - 200px);
  float: right;
}
.page{
  float: left;
}
</style>

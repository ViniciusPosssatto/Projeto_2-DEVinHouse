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
body {
  font-size: 18px;
  font-family: 'Times New Roman', Times, serif;
  background-color: #bbbaba8a !important;
}
.div-pai {
  width: calc(100% - 200px);
  float: right;
}
.page{
  float: left;
}
</style>

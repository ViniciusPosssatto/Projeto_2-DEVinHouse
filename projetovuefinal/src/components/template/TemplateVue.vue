<template>
 <div>
   <NavBar class="page"/>
   <SideBar />
   <div class="div-pai">
     <router-view ></router-view>
   </div>

 </div>
</template>

<script>
import NavBar from '@/components/template/navbar/NavBar.vue';
import SideBar from '@/components/template/sidebar/SideBar.vue';


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
  padding-top: 60px;
  font-family: 'Times New Roman', Times, serif;
  background-color: #bbbaba8a !important;
}
.div-pai {
  width: calc(100% - 180px);
  float: right;
}
.page{
  width: 100%;
  position: fixed;
  float: top;
  z-index: 999;
}

@media(max-width: 1000px) {

  /* Todos os componentes */
  .div-pai {
    width: 100%;
  }

}
  
</style>

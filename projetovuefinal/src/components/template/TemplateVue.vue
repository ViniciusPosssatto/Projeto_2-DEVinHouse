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
  
  font-family: 'Times New Roman', Times, serif;
  background-color: #bbbaba8a !important;
}
.div-pai {
  width: calc(100% - 180px);
  float: right;
}
.page{
  float: top;
}

@media(max-width: 770px) {

  /* Todos os componentes */
  .div-pai {
    width: 100%;
    float: none;
  }

  .page h5 {
    display: none;
  }

  .page {
    display: flex;
  }
}
  
</style>

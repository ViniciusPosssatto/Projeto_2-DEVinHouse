<template>
  <div class="sid d-flex flex-column p-3 flex-shrink-0 text-white bg-dark" style="width: 220px" id="div">
    <span class="fs-4">Sidebar</span>
    <hr />
    <ul class="nav nav-pills flex-column  justify-content-between">
      <li class="nav-item">
        <router-link to="/home" class="nav-link text-white" aria-current="page">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#home"></use>
          </svg>
          <i class="fa-solid fa-house"></i> Home
        </router-link>
      </li>
      <li>
        <router-link to="/inventario" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#speedometer2"></use>
          </svg>
          <i class="fa-solid fa-align-justify"></i> Inventário
        </router-link>
      </li>
      <li>
        <router-link to="/newitens" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#speedometer2"></use>
          </svg>
          <i class="fa-solid fa-align-justify"></i> Cadastrar
        </router-link>
      </li>
      <li>
        <router-link to="/listagem" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#speedometer2"></use>
          </svg>
          <i class="fa-solid fa-align-justify"></i> Listagem
        </router-link>
      </li>
      <li>
        <router-link to="/emprestimo" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#speedometer2"></use>
          </svg>
          <i class="fa-solid fa-align-justify"></i> Empréstimo
        </router-link>
      </li>
      
    </ul>

    <hr />

    <ul class="nav nav-pills flex-column mb-auto">
      <li>
        <div>
          <a class="nav-link text-white ms-3" @click="logOut">Logout</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch('setUserModule/logOut');
    }
  }
}
</script>

<style scoped>

#div {
  height: 100vh !important;
}
ul li {
  transition: 1s;
}
ul li:hover {
  background: rgb(111, 113, 121);
  background: radial-gradient(
    circle,
    rgba(111, 113, 121, 1) 51%,
    rgba(30, 30, 30, 1) 96%
  );
}
@media (max-width: 600px) {
  #div {
    font-size: small;
    width: 100% !important;
    display: inline-flex !important;
    flex-direction: row !important;
    
  }
  #div a span {
    display: none;
    width: 0;
  }
  #div ul {
    display: flex !important;
    flex-direction: row !important;
    justify-content: flex-start;
   
    
  }
  #div ul li {
    font-size: x-small;
    display: flex !important;
    flex-direction: row !important;
    justify-content: flex-start;
  }
  
}
</style>
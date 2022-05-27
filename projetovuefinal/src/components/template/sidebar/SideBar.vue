<template>
    
  <div class=" l-navbar sid d-flex flex-column p-3 flex-shrink-0 text-white bg-dark" id="div" v-if="autenticado">
    <div class="nav-l">

        <span class="fs-4">
          <i class="fa-solid fa-book me-2"></i>
        Biblioteca
      </span>

      <hr style="height:3px;">
      
      <ul class="nav nav-pills flex-column  justify-content-between">
        <li class="nav-item">
          <router-link to="/home" class="nav-link text-white" aria-current="page">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#home"></use>
            </svg>
            <i class="fa-solid fa-house me-1"></i> Home
          </router-link>
        </li>
        <hr style="height:3px;">

        <span>Livros</span>
        
        <hr style="width:30%">
        <li>
          <router-link to="/inventario" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            <i class="fa-solid fa-boxes-stacked me-1"></i> Inventário
          </router-link>
        </li>
        <li>
          <router-link to="/newitens" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            <i class="fa-solid fa-file-circle-plus"></i> Cadastrar
          </router-link>
        </li>
        <li>
          <router-link to="/emprestimo" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            <i class="fa-solid fa-file-lines me-1"></i> Empréstimo
          </router-link>
        </li>
        <hr style="height:3px;">

          <span>Colaboradores</span>

        <hr style="width:30%">
        <li>
          <router-link to="/newUser" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            <i class="fa-solid fa-file-circle-plus me-1"></i> Cadastrar
          </router-link>
        </li>
        <li>
          <router-link to="/listagem" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            <i class="fa-solid fa-align-justify me-1"></i> Listagem
          </router-link>
        </li>
      </ul>

      <hr style="height:3px;">

      <ul class="nav nav-pills flex-column mb-auto nav-link text-white" >
        <li class="logout">
          <div>
            <a class="nav-link text-white ms-3" @click="logOut">
            <i class="fa-solid fa-right-from-bracket me-1"></i>
            Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch('setUserLoginModule/logOut')
      this.$router.push('/login')
      this.$toast.warning('Logout realizado. Faça login para navegar novamente.', {
        position: 'top'
      });
      
    }
  },
   computed: {
    
    autenticado() {
      return this.$store.state.setUserLoginModule.autenticado;
    }
  },

  mounted() {
    this.$store.state.setUserLoginModule.autenticado = localStorage.getItem('token') ? true : false;
  }
}
</script>

<style scoped>
.logout {
  cursor: pointer;
}

.l-navbar{
  position: fixed;
  top: 0;
  left: 0%;
  width: var(--nav-width);
  height: 100vh;
  background-color: var(--first-color);
  padding: .5rem 1rem 0 0;
  transition: .5s;
  z-index: var(--z-fixed)
  }

#div {
  margin-top: 50px;
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

@media screen and (min-width: 700px){

  .l-navbar{
    left: 0;
    padding: 1rem 1rem 0 0
  }
  
  }
</style>
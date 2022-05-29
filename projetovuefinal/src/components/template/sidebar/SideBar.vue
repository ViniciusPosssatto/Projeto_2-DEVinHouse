<template>
  <Transition name="sidabar">
    <div v-show="!sidebarTurn">
    <div class="div-sobresai l-navbar sid d-flex flex-column p-3 flex-shrink-0 text-white bg-dark" id="div" v-if="autenticado">
      <div class="nav-l">
          <span class="fs-4">
            <i class="fa-solid fa-book me-2"></i>
          Biblioteca
        </span>

        <hr style="height:3px;">
        
        <ul class="nav nav-pills flex-column  justify-content-between">
          <li class="nav-item">
            <router-link to="/home" class="nav-link text-white" aria-current="page">
              <i class="fa-solid fa-house me-1"></i> Home
            </router-link>
          </li>
          <hr style="height:3px;">

          <span>Livros</span>
          
          <hr style="width:30%">
          <li>
            <router-link to="/inventario" class="nav-link text-white">
              <i class="fa-solid fa-boxes-stacked me-1"></i> Inventário
            </router-link>
          </li>
          <li>
            <router-link to="/newitens" class="nav-link text-white">
              <i class="fa-solid fa-file-circle-plus"></i> Cadastrar
            </router-link>
          </li>
          <li>
            <router-link to="/emprestimo" class="nav-link text-white">
              <i class="fa-solid fa-file-lines me-1"></i> Empréstimo
            </router-link>
          </li>
          <hr style="height:3px;">

            <span>Colaboradores</span>

          <hr style="width:30%">
          <li>
            <router-link to="/newUser" class="nav-link text-white">
              <i class="fa-solid fa-file-circle-plus me-1"></i> Cadastrar
            </router-link>
          </li>
          <li>
            <router-link to="/listagem" class="nav-link text-white">
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
    </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      sidebarTur: ''
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('setUserLoginModule/logOut')
      this.$router.push('/login')
      this.$toast.warning('Logout realizado. Faça login para navegar novamente.', {
        position: 'top'
      });
      
    },

    
  },

   computed: {
    
    autenticado() {
      return this.$store.state.setUserLoginModule.autenticado;
    },

    sidebarTurn() {
      return this.$store.state.coisasGeraisModule.sidebarTurnOnOff;
    }
  },

  mounted() {
    this.$store.state.setUserLoginModule.autenticado = localStorage.getItem('token') ? true : false;
    this.sidebarTur = localStorage.getItem('sidebarTurn')
  }
}
</script>

<style scoped>

.logout {
  cursor: pointer;
}

.l-navbar{
  position:absolute;
  }
ul li:hover {
  background: rgb(111, 113, 121);
  background: radial-gradient(
    circle,
    rgba(111, 113, 121, 1) 51%,
    rgba(30, 30, 30, 1) 96%
  );
}

/* Trnasição sidebar */

.sidabar-enter-from,
.sidabar-leave-to {
  opacity: 0;
  font-size: 0;
}

.sidabar-enter-to,
.sidabar-leave-from {
  opacity: 1;
  font-size: 16px;
}

.sidabar-enter-active,
.sidabar-leave-active {
  transition: all 1s ease;
}

.div-sobresai{
 z-index: 1;
}

</style>
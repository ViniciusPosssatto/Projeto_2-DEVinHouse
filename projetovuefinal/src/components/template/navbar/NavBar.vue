<template>
  <div v-if="autenticado">
    <nav class="navbar navbar-dark bg-dark" style="display: block !important;">
        <div class="row align-items-center">
          <div class="col-sm-3 col-md-6 col-lg-1">
            <img src="@/assets/img/seta-esquerda.png" alt="" style="width:45px" @click="sidebarTurn" class="ms-5" :class="sidebarTurnOnOff ? 'btn-vira-left' : 'btn-vira-right' ">
          </div>  
          <div class="text-white ms-5 col-sm-7 col-md-6 col-lg-4">
            <h3 v-text="nomeNavbar"></h3>
          </div>
            <div class="text-end col-sm-12 col-md-6 col-lg-5" >
              <h5 v-text="usuario" class="text-white"></h5>
            </div>
            <div class="col-sm-2 col-md-6 col-lg-1">
              <vue-gravatar :email="email" :size="40" style="border-radius: 20px"/>
          </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarTurnOnOff: ''
    }
  },

  methods: {

    sidebarTurn() {
      this.sidebarTurnOnOff = !this.sidebarTurnOnOff;
      this.$store.commit('coisasGeraisModule/setSidebar', this.sidebarTurnOnOff)
    },

    btnVira() {
      
    }
},
  computed: {
// definir e monitorar se o usuário está logado
    autenticado() {
      return this.$store.state.setUserLoginModule.autenticado;
    },
// captura o nome pelo mounted de cada página
     nomeNavbar() {
      return this.$store.state.setItensModule.nomeNavbar;
    },
// definir e monitorar o email no gravatar
    email() {
      return this.$store.state.setUserLoginModule.email;
    },
// definir e monitorar o nome do usuário que está logado
    usuario() {
      return this.$store.state.setUserLoginModule.usuario;
    }
  },
// busca o token no local storage e seta autenticado como true ou false caso não tenha token
  mounted() {
    this.$store.dispatch('setUserLoginModule/usuarioLogado');
    this.$store.state.setUserLoginModule.autenticado = localStorage.getItem('token') ? true : false;
  }
}
</script>

<style scoped>

.btn-vira-left {
  transform: rotate(180deg);
  transition: 1s;
}

.btn-vira-right {
  transform: rotate(360deg);
  transition: 1s;
}

.direita {
  display: flex !important;
  float: right !important;
}
</style>
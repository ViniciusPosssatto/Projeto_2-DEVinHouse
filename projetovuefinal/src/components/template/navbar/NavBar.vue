<template>
  <div v-if="autenticado" class="page-first">
    <nav class="navbar navbar-dark bg-dark page" style="display: block !important;">
        <div class="row align-items-center">
          <div class="col-1">
            <img src="@/assets/img/seta-esquerda.png" alt="" style="width:45px" @click="sidebarTurn" :class="sidebarTurnOnOff ? 'btn-vira-left' : 'btn-vira-right' ">
          </div>  
          <div class="text-white col-5">
            <h3 v-text="nomeNavbar"></h3>
          </div>
            <div class="text-end col-5 page-h" >
              <h5 v-text="usuario" class="text-white"></h5>
            </div>
            <div class="col-1">
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
      return this.$store.state.coisasGeraisModule.nomeNavbar;
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
.page-first {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 60px;
}



.btn-vira-left {
  transform: rotate(180deg);
  transition: 1s;
}

.btn-vira-right {
  transform: rotate(360deg);
  transition: 1s;
}

/* .direita {
  display: flex !important;
  float: right !important;
} */

@media(max-width: 600px) {
  
  .page-h {
    display: none;
  }
  .row>* {
  width: auto;
  }
}
@media(max-width: 800px) {

  .page h3 {
    display: flex;
    flex-direction: column;
    font-size: 18px !important;
  }
}
</style>
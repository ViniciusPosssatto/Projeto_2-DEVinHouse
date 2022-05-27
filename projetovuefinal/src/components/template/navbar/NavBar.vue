<template>
  <div v-if="autenticado">
    <nav class="navbar navbar-dark bg-dark">
      <div class="direita container-fluid">
        <div>
          <i class="fa-solid fa-house me-1"></i>    
        </div>
        <div class="text-white ms-5">
          <h3 v-text="nomeNavbar"></h3>
        </div>
        <div class="row" style=" display:flex; flex-direction:row; flex-wrap: nowrap; align-items: center;">
          <div class="col-9">
            <h5 v-text="usuario" class="text-white"></h5>
          </div>
          <div class="col-8">
              <vue-gravatar :email="email" :size="40" style="border-radius: 20px"/>
              <!-- img src="../../../assets/img/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top"-->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

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

<style>



.direita {
  display: flex !important;
  float: right !important;
}
</style>
<template>
  <div v-if="autenticado">
    <nav class="navbar navbar-dark bg-dark">
      <div class="direita container-fluid">
        <a class="navbar-brand" href="#">
          {{ usuario }}
          <vue-gravatar :email="email" :size="40" style="border-radius: 20px"/>
          <!-- img src="../../../assets/img/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top"-->
        </a>
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
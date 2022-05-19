<template>
  <div v-if="autenticado">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <!--{{ usuario }}--> Usuário Default
          <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
     // definir o usuário que está logado //// ainda falta identificar o usuário e colocar sua foto e nome na navbar
    autenticado() {
      return this.$store.state.setUserLoginModule.autenticado;
    }
  },

  mounted() {
    this.$store.state.setUserLoginModule.autenticado = localStorage.getItem('token') ? true : false;
  }
}
</script>

<style>

</style>
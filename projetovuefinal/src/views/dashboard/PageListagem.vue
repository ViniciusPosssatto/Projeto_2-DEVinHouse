<template>
  <div class="container">
    <!------------------------------>
    <!-- Colaboradores cadastrados-->
    <div class="row justify-content-md-center">
      <div class="col-12 mt-3">
        <h3 style="text-align: center">Listagem de colaboradores</h3>
      </div>

      <!----------------------->
      <!-- barra de pesquisa -->
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="input-group">
            <input class="form-control me-2" type="search" placeholder="Digite o nome do colaborador" aria-label="Search">
            <button class="btn btn-outline-success" type="button" @click="buscarUser">Buscar</button>
          </form>
        </div>
      </nav>
      <hr>
      <!------------------------------>
      <!--- cards dos colaboradores -->
      <div class="text-center" v-if="listaColab.length === 0">
        <h5>Não há colaboradores cadastrados</h5>
      </div>
      <div v-else class="d-flex align-items-around">
        <div v-for="(user, index) in listaColab" :key="index" class="ml-3">
          <div class="tamanho card text-white bg-dark m-2 align-items-baseline" style="width: 15rem;">
            <div class="row m-2 align-items-baseline" style="border-radius: 150px; justify-content: center;">
              <vue-gravatar :email="user.email" style="border-radius: 50%"/>
            </div>
              <div class="tamanho card-header">
                <h5 class="card-title">{{ user.nome }}</h5>
                <hr>
                  <p class="card-text">{{ user.email }}</p>
                  <p class="card-text">{{ user.telefone }}</p>
              </div>
            <div class=" tamanho card-footer">
              <p class="card-text">{{ user.cargo }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //listaColabs: []
    }
  },

  methods: {
    buscarUser() {
      this.$store.dispatch('getColaboradorModule/getColaborador')
    }
  },
  computed: {

    listaColab() {
      return this.$store.state.getColaboradorModule.listaColabs;
    }

  },

  mounted() {
    this.$store.state.getColaboradorModule.listaColabs = localStorage.getItem('listaColabs') ? true : false;
  }
}
</script>

<style>
.tamanho {
  width: -webkit-fill-available;
  text-align: center;
  text-overflow: ellipsis;
  border-radius: 10px;
  max-width: 15rem;
}

</style>
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
          <div class="tamanho card text-white bg-dark m-2 align-items-baseline" style="width: 16rem; height: 25rem; max-width: 16rem; max-height: 30rem; justify-content: space-evenly">
            <div class="row align-items-baseline" style=" max-width: 300px; align-self: center; justify-content: center;">
              <vue-gravatar :email="user.email" style="border-radius: 50%;"/>
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
      // tem que buscar um colaborador pela barra de pesquisa
      //this.$store.dispatch('getColaboradorModule/getColabBusca')
    }
  },
  computed: {

    listaColab() {
      return this.$store.state.getColaboradorModule.listaColabs;
    }

  },

  mounted() {
    this.$store.dispatch('getColaboradorModule/getColaborador'); 
  }
}
</script>

<style>
.tamanho {
  width: -webkit-fill-available;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 10px;
  max-width: 15rem;
}

</style>
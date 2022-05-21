<template>
  <div class="container">
    <!-------------------------->
    <!-- Listagem Emprestimos -->
    <div class="row justify-content-md-center">
      <div class="col-12 mt-3">
        <h3 style="text-align: center">Empréstimo de itens</h3>
      </div>
      
      <!----------------------->
      <!-- barra de pesquisa -->
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="input-group">
            <input class="form-control me-2" type="search" placeholder="Ex: geografia" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
      <hr>
      <div class="text-center text-danger" v-if="listaLivros.length === 0">
        <h5>Não há reservas cadastradas</h5>
      </div>
      <table class="table" v-else>
        <thead>
          <tr>
            <th>Patrimônio</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Emprestar para</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in listaLivros" :key="livro.id">
            <td>{{ livro.codigo }}</td>
            <td>{{ livro.titulo }}</td>
            <td>{{ livro.categoria }}</td>
            <td>
              <select name="user" id="user" form="userForm" class="form-control" v-for="user in listaColabs" :key="user.id">
                <option>Disponível</option>
                <option>{{user.nome}}</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      //itens: []
    }
  },

  methods: {

     buscarLivro() {
      // buscar livro a partir do codigo na barra de pesquisa
      //this.$store.dispatch('emprestimoModule/getLivro');  
    }
  },

  computed: {

    listaLivros() {
      return this.$store.state.inventarioModule.listaLivros;
    },
    listaColabs() {
      return this.$store.state.getColaboradorModule.listaColabs;
    }

  },
  mounted() {
    this.$store.dispatch('inventarioModule/getItem');
    this.$store.dispatch('getColaboradorModule/getColaborador');
  }
}

</script>

<style>

</style>
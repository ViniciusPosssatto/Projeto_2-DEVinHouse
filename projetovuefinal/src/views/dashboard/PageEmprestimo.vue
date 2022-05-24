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
            <th>Código</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Emprestar para</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in listaLivros" :key="livro.id" @click="detalhesLivro(livro)" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <td>{{ livro.codigo }}</td>
            <td>{{ livro.titulo }}</td>
            <td>{{ livro.categoria }}</td>
            <td>
              <select name="user" id="user" form="userForm" class="form-control" >
                <option v-for="user in listaColabs" :key="user.id" v-text="user.nome ? user.nome : 'disponivel'" ></option>
                
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!------------------------->
      <!-- Modal para detalhes -->
      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" style="max-width: 670px">
          <div class="modal-content rounded-5 shadow">
            <div class="modal-header pb-4 border-bottom-0 modal-centro">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
              <div class="modal-body p-5 pt-0 modal-centro">
                <form id="formEdicao" aria-disabled="disabled">
                  <fieldset>
                    <div class="row" style="justify-content: center;">
                      <div class="form mb-3 col-12 align-items-baseline" style=" max-width: 250px; align-self: center; justify-content: center; margin: 0 40px">
                          <img :src="livro.url" alt="" style="border-radius: 20px; width: 250px;">
                      </div>
                    <div class="form mb-3 col-6">
                      <label name="codigo" >Codigo</label>
                      <input name="codigo" type="text" class="form-control rounded-4" disabled id="Inputcodigo" v-model="livro.codigo">
                    </div>
                    <div class="form mb-3 col-6">
                      <label name="categoria" for="categoria">Categoria</label>
                      <input name="categoria" type="text" class="form-control rounded-4" disabled id="categoria" v-model="livro.categoria">
                    </div>
                    <div class="form mb-3 col-12">
                      <label name="titulo" for="titulo">Título</label>
                      <input name="titulo" type="text" class="form-control rounded-4" disabled id="titulo" v-model="livro.titulo">
                    </div>
                      <h5>Dados Complementares</h5>
                    <div class="form mb-3 col-6">
                      <label name="editora" for="editora">Editora</label>
                      <input name="editora" type="text" class="form-control rounded-4" disabled id="editora" v-model="livro.editora">
                    </div>
                    <div class="form mb-3 col-6">
                      <label name="autor" for="autor">Autor</label>
                      <input name="autor" type="text" class="form-control rounded-4" disabled id="autor" v-model="livro.autor">
                    </div>
                    <div class="form mb-3 col-3">
                      <label name="valor" for="valor">ValorR$</label>
                      <input name="valor" type="text" class="form-control rounded-4" disabled id="valor" v-model="livro.valor">
                    </div>
                    <div class="form mb-3 col-9">
                      <label name="descricao" for="descricao">Descrição</label>
                      <input name="descricao" type="text" class="form-control rounded-4" disabled id="descricao" v-model="livro.descricao">
                    </div>

                    <hr class="my-4">
                    
                    <button class="w-50 py-2 btn btn-outline-primary rounded-4" type="button" data-bs-dismiss="modal" aria-label="Close" @click="editarDados">
                      Editar dados
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

</template>

<script>

export default {
  data() {
    return {
      livro: {}
    }
  },

  methods: {

     buscarLivro() {
      // buscar livro a partir do codigo na barra de pesquisa
      console.log('aqui')
      //this.$store.dispatch('emprestimoModule/getLivro');  
    },

    detalhesLivro(livro){
      this.livro = livro;
    },


  },

  computed: {


    listaLivros() {
      return this.$store.state.setItensModule.listaLivros;
    },
    listaColabs() {
      return this.$store.state.setColaboradorModule.listaColabs;
    }

  },
  mounted() {
    this.$store.commit('setItensModule/getItem');
    this.$store.commit('setColaboradorModule/getColaborador');
  }
}

</script>

<style>

</style>
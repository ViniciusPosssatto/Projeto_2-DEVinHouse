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
          <form  class="input-group" @submit="barraPesquisa(busca)">
            <input class="form-control me-2" id="barraPesquisa" type="search" placeholder="Digite o nome do livro" aria-label="Search" v-model="busca" >
            <button class="btn btn-outline-success" type="submit" >Buscar</button>
          </form>
        </div>
      </nav>
      <hr>

      <!-------------------------------------------------------------->
      <!---- Montagem da tabela para os itens que tiver na lista -----> 

      <div >
        <div class="text-center text-danger" v-if="(pesquisaLivro ? pesquisaLivro.length : listaLivro.length) === 0">
        <h5>Livro não econtrado ou não cadastrado.</h5>
        </div>
        <table class="table" v-else>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Categoria</th>
              <th>Emprestado para</th>
            </tr>
          </thead>
          <tbody id="tabody">
            <tr v-for="livro in (pesquisaLivro ? pesquisaLivro : listaLivro)" :key="livro.id"  @click="detalhesLivro(livro)" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <td v-text="livro.codigo"></td>
              <td v-text="livro.titulo"></td>
              <td v-text="livro.categoria"></td>
              <td v-text="livro.status ? livro.status : 'Disponível'"></td>
            </tr>
          </tbody>
        </table>
      </div>
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
                       <hr class="my-4">
                      <h5 style="font-weight: bold">Selecione alguém para emprestar:</h5>
                      <p class="small">Ou clique em "Disponível" para retirar o empréstimo.</p>
                    <div class="col-6">
                      <select name="user" id="user" form="userForm" class="form-control" value="Clique aqui" v-model="emprestimo">
                        <option v-for="user in listaColab" :key="user.id"  v-text="user.nome" ></option>
                      </select>
                    </div>
                    <div class="col-6">
                      <button class="w-50 py-2 btn btn-outline-success rounded-4" style="text-align: center;" type="submit" data-bs-dismiss="modal" aria-label="Close" @click="salvarEmprestimo(emprestimo)" v-if="!emprestimo">
                        Disponível
                      </button>
                      <button class="w-50 py-2 btn btn-outline-success rounded-4" style="text-align: center;" type="submit" data-bs-dismiss="modal" aria-label="Close" @click="salvarEmprestimo(emprestimo)" v-else>
                        Emprestar
                      </button>
                    </div>
                      <hr class="my-4">
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
      livro: '',
      emprestimo: '',
      pesquisaLivro: [],
      busca: ''
    }
  },

  methods: {

    detalhesLivro(livro){
      this.livro = livro;
    },


    salvarEmprestimo(userNome) {
      if(!userNome){
        this.livro.status = false;
        this.$store.commit('setItensModule/salvarEmprestimo', this.livro)
        this.$toast.info('Livro disponível para empréstimo.', {
          position: 'top'
        });
      }
      else {
        this.livro.status = userNome;
        this.$store.commit('setItensModule/salvarEmprestimo', this.livro)
        this.emprestimo = ''
        this.$toast.success('O livro foi emprestado.', {
          position: 'top'
        });
      }
    },

    barraPesquisa() {
      if(this.busca !== '') {
        let pesquisa = () => {
          return this.listaLivro.filter(item =>
            item.titulo
              .toLowerCase()
                .includes(this.busca.toLowerCase()));
        } 
        if(pesquisa) {
          this.pesquisaLivro = pesquisa(this.busca);
          if(this.pesquisaLivro.length === 0) {
            this.$toast.error('Livro não econtrado! Tente outro nome.', {
              position: 'top'
            });
          }
        } 
      } else {
        this.pesquisaLivro = this.listaLivro;
      }
    },

  },

  computed: {
    
    listaLivro() {
      return this.$store.state.setItensModule.listaLivros;
    },
    listaColab() {
      return this.$store.state.setColaboradorModule.listaColabs;
    }

  },
  mounted() {
    this.$store.commit('setItensModule/getItem');
    this.$store.commit('setColaboradorModule/getColaborador');
    this.pesquisaLivro = this.listaLivro;
    this.$store.state.setItensModule.nomeNavbar = 'Empréstimo de livros e devolução'
  }
}

</script>

<style>

</style>
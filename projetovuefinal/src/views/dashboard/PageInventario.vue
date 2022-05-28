<template>
  <div class="container">
    <!------------------>
    <!-- Estatisticas -->
    <div class="row" style="justify-content: space-between;">
      <div class="col-sm-12 col-md-6 col-lg-3 card-top">
        <div class="d-flex align-items-around">
            <div class="tamanho card text-white bg-secondary m-2 align-items-baseline sombra" style="width: 15rem; min-width: 11rem; display: block;">
              <div class="row m-2 align-items-baseline" style=" max-width: 300px; justify-content: center;">
                <img src="@/assets/img/multiplos-usuarios.png" alt="Icone de pessoas" style="width: 80px" class="card-img-top">
                <h5 class="card-title mt-2">Colaboradores</h5>
                <hr>
                  <p class="card-text" style="font-size: 40px;" v-text="totalColabs"></p>
              </div>
              <div class=" tamanho card-footer">
              </div>
            </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3 card-top ">
        <div class="d-flex align-items-around">
            <div class=" tamanho card text-white bg-secondary m-2 align-items-baseline sombra" style="width: 15rem; min-width: 11rem; display: block;">
              <div class="row m-2 align-items-baseline" style=" max-width: 300px; justify-content: center;">
                <img src="@/assets/img/pilha-livros.png" alt="Icone de livros" style="width: 80px" >
                <h5 class="card-title mt-2">Livros</h5>
                <hr>
                  <p class="card-text" style="font-size: 40px;" v-text="somaLivros"></p>
              </div>
              <div class=" tamanho card-footer">
              </div>
            </div>
          </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3 card-top">
        <div class="d-flex align-items-around">
          <div class="tamanho card text-white bg-secondary m-2 align-items-baseline sombra" style="width: 15rem; min-width: 11rem; display: block;">
            <div class="row m-2 align-items-baseline" style=" max-width: 300px; justify-content: center;">
              <img src="@/assets/img/bolsa-de-dinheiro.png" alt="Icone de sifrão $" style="width: 80px">
              <h5 class="card-title mt-2">Valor total</h5>
              <hr>
                <p class="card-text" style="font-size: 40px;" v-text="somaValores"></p>
            </div>
            <div class=" tamanho card-footer">
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>  
      <div class="col-sm-12 col-md-6 col-lg-3 card-top">
        <div class="d-flex align-items-around">
          <div class="tamanho card text-white bg-secondary m-2 align-items-baseline sombra" style="width: 15rem; min-width: 11rem; display: block;">
            <div class="row m-2 align-items-baseline" style=" max-width: 300px; justify-content: center;">
              <img src="@/assets/img/facam.png" alt="Icone de página de lista" style="width: 80px">
              <h5 class="card-title mt-2">Empréstimos</h5>
              <hr>
                <p class="card-text" style="font-size: 40px;" v-text="contaEmprestimos"></p>
            </div>
            <div class=" tamanho card-footer">
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>  
    <hr>

    <!---------------->
    <!-- Inventário -->
    
    <div class="row justify-content-md-center">
      <div class="col-sm-12 col-md-6 col-lg-12">
        <h3 style="text-align: center">Inventário de Livros</h3>
      </div>

      <!----------------------->
      <!-- barra de pesquisa -->

      <nav class="navbar navbar-light bg-light mb-3 barra-pesquisa">
        <div class="container-fluid">
          <form class="input-group" @submit="barraPesquisa(busca)">
            <input class="form-control me-2" type="search" placeholder="Digite o nome do livro ou categoria ou editora" aria-label="Search" v-model="busca">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </nav>

    <!---------------------->
    <!--- cards dos itens -->

    </div>
      <div class="row ">
        <div class="col-sm-12 col-md-6 col-lg-12 ">
          <div class="display-card align-items-around" style="align-content: center;" >
            <div v-for="item in (pesquisaLivro ? pesquisaLivro : listaLivros)" :key="item.codigo" class="row ">
              <div class="col-sm-12 col-md-6 col-lg-3 " @click="detalhes(item)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="tamanho card text-white bg-dark m-2 align-items-baseline sombra" style="cursor: pointer; width: 15rem; height: 31rem; max-width: 15rem; max-height: 31rem; justify-content: space-evenly">
                  <div class="row m-2 align-items-baseline " style=" max-width: 300px; align-self: center; justify-content: center;">
                    <img :src="item.url" alt="" style="border-radius: 20px; width: 250px;">
                  </div>
                  <div class="tamanho card-header " style="white-space: normal !important;">
                    <h5 class="card-title" style=" display: contents;" v-text="item.titulo"></h5>
                    <hr>
                    <p class="card-text" v-text="item.editora"></p>
                    <p class="card-text" v-text="item.autor"></p>
                  </div>
                  <div class=" tamanho card-footer">
                    <p :class="item.status ? 'status-emprestado' : 'status-disponivel'" class="card" v-text="item.status ? 'Emprestado' : 'Disponível'"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

      <!------------------------->
      <!-- Modal para detalhes -->
      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-5 shadow">
            <div class="modal-header p-5 pb-4 border-bottom-0 modal-centro">
              <h2 class="fw-bold mb-0">Dados do livro</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
              <div class="modal-body p-5 pt-0 modal-centro">
                <hr class="my-4">
                <form id="formEdicao" aria-disabled="disabled">
                  <fieldset>
                    <div class="row" style="justify-content: center;">
                    <div class="form mb-3 col-sm-12 col-md-6 col-lg-6">
                      <label name="codigo" >Codigo</label>
                      <input name="codigo" type="text" class="form-control rounded-4" disabled id="Inputcodigo" v-model="livro.codigo">
                    </div>
                    <div class="form mb-3 col-sm-12 col-md-6 col-lg-6">
                      <label name="categoria" for="categoria">Categoria</label>
                      <input name="categoria" type="text" class="form-control rounded-4" disabled id="categoria" v-model="livro.categoria">
                    </div>
                    <div class="form mb-3 col-sm-12 col-md-6 col-lg-12">
                      <label name="titulo" for="titulo">Título</label>
                      <input name="titulo" type="text" class="form-control rounded-4" disabled id="titulo" v-model="livro.titulo">
                    </div>
                      <h5>Dados Complementares</h5>
                    <div class="form mb-3 col-sm-12 col-md-6 col-lg-8" v-if="livro.status">
                      <label name="status" for="status">Emprestado para:</label>
                      <input name="status" type="text" class="form-control rounded-4" disabled id="status" v-model="livro.status">
                    </div>
                    <div class="form mb-3 col-sm-12 col-md-6 col-lg-8" v-else>
                      <label name="status" for="status"></label>
                      <input name="status" type="text" class="form-control rounded-4" disabled id="status" placeholder="Disponível para empréstimo">
                    </div>
                    <div class="form mb-3 col-sm-12 col-md-6 col-lg-4">
                      <label name="valor" for="valor">Valor (R$)</label>
                      <input name="valor" type="number" class="form-control rounded-4" disabled id="valor" v-model="livro.valor">
                    </div>
                    <div class="form mb-3 col-sm-12 col-md-6 col-lg-12">
                      <label name="url" for="url">URL da foto</label>
                      <input name="url" type="text" class="form-control rounded-4" disabled id="url" v-model="livro.url">
                    </div>
                    <div class="form mb-3 col-sm-12 col-md-6 col-lg-6">
                      <label name="editora" for="editora">Editora</label>
                      <input name="editora" type="text" class="form-control rounded-4" disabled id="editora" v-model="livro.editora">
                    </div>
                    <div class="form mb-3 col-sm-12 col-md-6 col-lg-6">
                      <label name="autor" for="autor">Autor</label>
                      <input name="autor" type="text" class="form-control rounded-4" disabled id="autor" v-model="livro.autor">
                    </div>
                    <div class="form mb-3 col-sm-12 col-md-6 col-lg-12">
                      <label name="descricao" for="descricao">Descrição</label>
                      <input name="descricao" type="text" class="form-control rounded-4" disabled id="descricao" v-model="livro.descricao">
                    </div>

                    <hr class="my-4">
                    
                    <button class="w-50 py-2 mb-2 btn btn-outline-primary rounded-4" type="button" data-bs-dismiss="modal" aria-label="Close" @click="editarDados">
                      Editar dados
                    </button>
                     <button class="w-50 py-2 mb-2 btn btn-outline-danger rounded-4" type="button" data-bs-dismiss="modal" aria-label="Close" @click="excluir(livro.codigo)">
                      Excluir
                    </button>
                  </div>
                </fieldset>
              </form>
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
      livro: {},
      busca: '',
      pesquisaLivro: []
    }
  },

  methods: {

    detalhes(livro) {
      this.livro = livro;
    },

    editarDados() {
      this.$router.push(`/newitens/${this.livro.codigo}`);
    },

    barraPesquisa() {
      if(this.busca !== '') {
        let pesquisa = () => {
          return this.listaLivros.filter(item =>
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
        this.pesquisaLivro = this.listaLivros;
      }
    },

    excluir(codigo) {
      this.$store.commit('setItensModule/excluir', codigo)
    }
  },

  computed: {

    listaLivros() {
      return this.$store.state.setItensModule.listaLivros;
    },

    somaLivros() {
      return this.$store.state.setItensModule.totalLivros;
    },

    somaValores() {
      return this.$store.state.setItensModule.somaValor;
    },

    totalColabs() {
      return this.$store.state.setColaboradorModule.totalColabs;
    },

    listaColabs() {
      return this.$store.state.setColaboradorModule.listaColabs;
    },

    contaEmprestimos() {
      return this.$store.state.setItensModule.totalEmprestimos;
    }

  },

  mounted() {
    this.$store.state.setItensModule.nomeNavbar = 'Inventário de livros e estatísticas'
    this.pesquisaLivro = this.listaLivro;
    this.$store.commit('setItensModule/getItem');
    this.$store.commit('setItensModule/somaLivros');
    this.$store.commit('setItensModule/somaValores');
    this.$store.commit('setColaboradorModule/getColaborador');
    this.$store.commit('setColaboradorModule/somaColabs');
    this.$store.commit('setItensModule/getEmprestados')
  }
  
}
</script>

<style scoped>
.sombra:hover {
  box-shadow: 10px 5px 5px black;
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.6);
  transform: scale(1.1);
}

.col-3.card-top {
  display: contents !important;
}
.display-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card-inventario {
  color: black !important;
  background-color: #8e8e8e !important;
}
.cartao-inv {
  max-width: 200px;
}
.cartao-est {
  max-width: 150px;
}
.card-text {
  text-overflow: ellipsis !important;
}

.status-disponivel {
  font-weight: bold;
  background-color: #058d05;
  text-overflow: ellipsis !important;
  color: #fdfffe;
}

.status-emprestado {
  font-weight: bold;
  background-color: #FF7D03;
  text-overflow: ellipsis !important;
  color: #fdfdfd;
}
.barra-pesquisa {
  background-color: #bbbaba8a !important;
}
</style>
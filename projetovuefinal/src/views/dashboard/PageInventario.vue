<template>
  <div class="container">
    <!------------------>
    <!-- Estatisticas -->
    <div class="row">
      <div class="col-3 card-top">
        <div class="d-flex align-items-around">
            <div class="tamanho card text-white bg-secondary m-2 align-items-baseline" style="width: 15rem; min-width: 11rem; display: block;">
              <div class="row m-2 align-items-baseline" style=" max-width: 300px; justify-content: center;">
                <img src="@/assets/img/multiplos-usuarios.png" alt="Icone de pessoas" style="width: 80px" class="card-img-top">
                <h5 class="card-title mt-2">Colaboradores</h5>
                <hr>
                  <p class="card-text" style="font-size: 40px;">{{totalColabs}}</p>
              </div>
              <div class=" tamanho card-footer">
              </div>
            </div>
        </div>
      <div class="col-3 card-top">
            <div class=" tamanho card text-white bg-secondary m-2 align-items-baseline" style="width: 15rem; min-width: 11rem; display: block;">
              <div class="row m-2 align-items-baseline" style=" max-width: 300px; justify-content: center;">
                <img src="@/assets/img/pilha-livros.png" alt="Icone de livros" style="width: 80px" >
                <h5 class="card-title mt-2">Livros</h5>
                <hr>
                  <p class="card-text" style="font-size: 40px;">{{somaLivros}}</p>
              </div>
              <div class=" tamanho card-footer">
              </div>
            </div>
      </div>
      <div class="col-3 card-top">
        <div class="tamanho card text-white bg-secondary m-2 align-items-baseline" style="width: 15rem; min-width: 11rem; display: block;">
          <div class="row m-2 align-items-baseline" style=" max-width: 300px; justify-content: center;">
            <img src="@/assets/img/bolsa-de-dinheiro.png" alt="Icone de sifrão $" style="width: 80px">
            <h5 class="card-title mt-2">Valor total</h5>
            <hr>
              <p class="card-text" style="font-size: 40px;">{{somaValores}}</p>
          </div>
          <div class=" tamanho card-footer">
            <p class="card-text"></p>
          </div>
        </div>
      </div>  
      <div class="col-3 card-top">
        <div class="tamanho card text-white bg-secondary m-2 align-items-baseline" style="width: 15rem; min-width: 11rem; display: block;">
          <div class="row m-2 align-items-baseline" style=" max-width: 300px; justify-content: center;">
            <img src="@/assets/img/facam.png" alt="Icone de página de lista" style="width: 80px">
            <h5 class="card-title mt-2">Empréstimos</h5>
            <hr>
              <p class="card-text" style="font-size: 40px;">{{234}}</p>
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
      <div class="col-12">
        <h3 style="text-align: center">Inventário de Livros</h3>
      </div>

      <!----------------------->
      <!-- barra de pesquisa -->
      <nav class="navbar navbar-light bg-light mb-3">
        <div class="container-fluid">
          <form class="input-group">
            <input class="form-control me-2" type="search" placeholder="Digite o nome do livro ou categoria ou editora" aria-label="Search">
            <button class="btn btn-outline-success" type="button" @click="buscarLivros">Buscar</button>
          </form>
        </div>
      </nav>

      <!---------------------->
      <!--- cards dos itens -->
<!--
      <div class="text-center" v-if="listaLivros.length === 0">
        <h5>Não há livros cadastrados!</h5>
      </div>
      -->
      <div class="row">
        <div class="col-3">
          <div class="d-flex align-items-around" style="border-radius: 50%;" >
            <div v-for="(item, index) in listaLivros" :key="index" class="ml-3">
            <div class="row">
              <div class="col-3">
                <div class="tamanho card text-white bg-dark m-2 align-items-baseline" style="width: 15rem; height: 30rem; max-width: 15rem; max-height: 30rem; justify-content: space-evenly">
                  <div class="row m-2 align-items-baseline" style=" max-width: 300px; align-self: center; justify-content: center;">
                    <img :src="item.url" alt="" style="border-radius: 20px; width: 250px;">
                  </div>
                  <div class="tamanho card-header" style="white-space: normal !important;">
                    <h5 class="card-title" style=" display: contents;">{{ item.titulo }}</h5>
                    <hr>
                    <p class="card-text">{{ item.editora }}</p>
                    <p class="card-text">{{ item.autor }}</p>
                  </div>
                  <div class=" tamanho card-footer">
                    <p class="card-text" v-if="item.status === false" style="color: #15FF1B">Disponível</p>
                    <p class="card-text" v-if="item.status === true" style="color: #FF7D03">Emprestado</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {

  methods: {

    buscarLivros() {
      // buscar livro a partir da barra de pesquisa
      this.$store.dispatch('inventarioModule/somaValores');  
    }
    
  },

  computed: {

    listaLivros() {
      return this.$store.state.inventarioModule.listaLivros;
    },

    somaLivros() {
      return this.$store.state.inventarioModule.totalLivros;
    },

    somaValores() {
      return this.$store.state.inventarioModule.somaValor;
    },

    totalColabs() {
      return this.$store.state.getColaboradorModule.totalColabs;
    },

    listaColabs() {
      return this.$store.state.getColaboradorModule.listaColabs;
    }

  },

  mounted() {
    this.$store.dispatch('inventarioModule/getItem');
    this.$store.commit('inventarioModule/somaLivros');
    this.$store.commit('getColaboradorModule/somaColabs');
    this.$store.dispatch('getColaboradorModule/getColaborador');
    this.$store.commit('inventarioModule/somaValores');
  }
  
}
</script>

<style scoped>
.col-3.card-top {
  display: contents !important;
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
</style>
<template>
  <div class="container">
    <!------------------>
    <!-- Estatisticas -->
      <div class="d-flex align-items-around">
          <div class="tamanho card text-white bg-secondary m-2 align-items-baseline" style="width: 15rem;">
            <div class="tamanho card-header">
              <img src="@/assets/img/multiplos-usuarios.png" alt="" style="width: 80px">
              <h5 class="card-title mt-2">Colaboradores</h5>
              <hr>
                <p class="card-text">Quantidade</p>
            </div>
            <div class=" tamanho card-footer">
              
            </div>
          </div>
          <div class="tamanho card text-white bg-secondary m-2 align-items-baseline" style="width: 15rem;">
            <div class="tamanho card-header">
              <img src="@/assets/img/pilha-livros.png" alt="" style="width: 80px">
              <h5 class="card-title mt-2">Livros</h5>
              <hr>
                <p class="card-text">Quantidade</p>
            </div>
            <div class=" tamanho card-footer">
            </div>
          </div>
          <div class="tamanho card text-white bg-secondary m-2 align-items-baseline" style="width: 15rem;">
            <div class="tamanho card-header">
              <img src="@/assets/img/bolsa-de-dinheiro.png" alt="" style="width: 80px">
              <h5 class="card-title mt-2">Valor total</h5>
              <hr>
                <p class="card-text">Quantidade</p>
            </div>
            <div class=" tamanho card-footer">
              <p class="card-text"></p>
            </div>
          </div>
          <div class="tamanho card text-white bg-secondary m-2 align-items-baseline" style="width: 15rem;">
            <div class="tamanho card-header">
              <img src="@/assets/img/facam.png" alt="" style="width: 80px">
              <h5 class="card-title mt-2">Empréstimos</h5>
              <hr>
                <p class="card-text">Quantidade</p>
            </div>
            <div class=" tamanho card-footer">
              <p class="card-text"></p>
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
            <button class="btn btn-outline-success" type="button" @click="getItem">Buscar</button>
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
      <div class="d-flex align-items-around" style="border-radius: 50%">
        <div v-for="(item, index) in listaLivros" :key="index" class="ml-3">
          <div class="tamanho card text-white bg-dark m-2 align-items-baseline" style="width: 15rem;">
            <div class="row m-2 align-items-baseline" style=" max-width: 300px; justify-content: center;">
              <img :src="item.url" alt="" style="border-radius: 20px">
            </div>
              <div class="tamanho card-header">
                <h5 class="card-title">{{ item.titulo }}</h5>
                <hr>
                  <p class="card-text">{{ item.editora }}</p>
                  <p class="card-text">{{ item.autor }}</p>
              </div>
            <div class=" tamanho card-footer">
              <p class="card-text">{{ item.descricao }}</p>
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

    getItem() {
      this.$store.dispatch('inventarioModule/getItem');
    }
  },

  computed: {

    listaLivros() {
      return this.$store.state.inventarioModule.listaLivros;
    }

  }
}
</script>

<style scoped>
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
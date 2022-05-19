<template>
  <div class="container">
    <!------------------>
    <!-- Estatisticas -->
    <div class="row justify-content-md-center">
      <div class="col-12 mt-3">
        <h3 style="text-align: center">Estatisticas</h3>
      </div>
       <div class="cartao-est col-md-3">
        <div class="card">
          <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="card-body">
          <p class="card-text">"estatistisca do card"</p>
          <h5 class="card-title">Colaboradores</h5>
        </div>
      </div>
      <div class="cartao-est col-md-3">
        <div class="card">
          <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="card-body">
          <p class="card-text">"estatistisca do card"</p>
          <h5 class="card-title">Livros cadastrados</h5>
        </div>
      </div>
      <div class="cartao-est col-md-3">
        <div class="card">
          <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="card-body">
          <p class="card-text">"estatistisca do card"</p>
          <h5 class="card-title">Valor dos Livros</h5>
        </div>
      </div>
      <div class="cartao-est col-md-3">
        <div class="card">
          <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="card-body">
          <p class="card-text">"estatistisca do card"</p>
          <h5 class="card-title">Livros emprestados</h5>
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
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="input-group">
            <input class="form-control me-2" type="search" placeholder="Digite o nome do livro ou categoria ou editora" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </nav>

      <!---------------------->
      <!--- cards dos itens -->
      <div class="cartao-inv col-md-3">
        <div class="card">
          <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="card-body">
          <p class="card-text" style="font-size: 14px">Nome do livro</p>
        </div>
        <div class="card-body">
          <p class="card-text">Editora</p>
          <h5 class="card-title">Categoria</h5>
        </div>
        <div class="card-footer">
            <p>Emprestado</p>
          </div>
      </div>
      <div class="cartao-inv col-md-3">
        <div class="card">
          <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="card-body">
          <p class="card-text" style="font-size: 14px">Nome do livro</p>
        </div>
        <div class="card-body">
          <p class="card-text">Editora</p>
          <h5 class="card-title">Categoria</h5>
        </div>
        <div class="card-footer">
            <p>Emprestado</p>
          </div>
      </div>
      <div class="cartao-inv col-md-3">
        <div class="card">
          <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="card-body">
          <p class="card-text" style="font-size: 14px">Nome do livro</p>
        </div>
        <div class="card-body">
          <p class="card-text">Editora</p>
          <h5 class="card-title">Categoria</h5>
        </div>
        <div class="card-footer">
            <p>Disponível</p>
          </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
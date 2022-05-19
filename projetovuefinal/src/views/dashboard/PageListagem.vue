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
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
      <hr>
      <!------------------------------>
      <!--- cards dos colaboradores -->
      <div class="cartao-colab col-md-3">
        <div class="card">
          <img src="@/assets/img/logo.png" alt="">
        </div>
          <div class="card-body">
            <h5 class="card-title">Wenceslau Oliver</h5>
              <p class="card-text">email@email.com.br</p>
              <p class="card-text">(48)9 9123-4443</p>
          </div>
        <div class="card-body">
          <p class="card-text">Cargo da pessoa</p>
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
.cartao-colab {
  max-width: 220px;
}
</style>
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
            <input class="form-control me-2" type="search" placeholder="Ex: notebook" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
      <hr>
      <div class="text-center text-danger">
        <h5>Não há reservas cadastradas</h5>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Patrimônio</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Emprestado para</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in itens" :key="item.id">
            <td>{{ item.codigo }}</td>
            <td>{{ item.titulo }}</td>
            <td>{{ item.categoria }}</td>
            <td>
              <select name="user" id="user" form="userForm" class="form-control">  <!-- Adicionar um for para capturar a lista de colaboradores e listar nas options -->
                <option>Usuario</option>
                <option>Usuario2</option>
                <option>Usuario3</option>
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
      itens: []
    }
  }
}

</script>

<style>

</style>
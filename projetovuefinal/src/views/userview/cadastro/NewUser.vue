<template>
  <div class="container mt-5">
    <div class="row justify-content-md-center">
      <div class="col-8">
        <h2>Dados Pessoais</h2>
        <hr>
        <form @submit.prevent="newUser">
          <div class="row g-3">
            <div class="col-7">
              <label>Nome Completo</label>
              <input type="text" class="form-control" v-model="user.name">
            </div>
            <div class="col-5">
              <label for="genero">Gênero:</label>
              <select name="genero" id="genero" form="generoForm" class="form-control">
                <option value="masc">Masculino</option>
                <option value="fem">Feminino</option>
                <option value="ninfo">Não informado</option>
              </select>
            </div>
            <div class="col-4">
              <label>Data Nascimento</label>
              <input type="date" class="form-control" v-model="user.dataNasc">
            </div>
            <div class="col-3">
              <label for="cargo">Cargo:</label>
              <select name="cargo" id="cargo" form="cargoForm" class="form-control">
                <option value="operador">Operador</option>
                <option value="escritorio">Escritório</option>
                <option value="servGerais">Serviços Gerais</option>
                <option value="gerencia">Gerência</option>
              </select>
            </div>
            <div class="col-5">
              <label>Telefone</label>
              <input type="number" class="form-control" v-model="user.telefone">
            </div>
          </div>
          <div class="row g-3 justify-content-md-center mt-1">
            <div class="col-7">
              <label>E-Mail</label>
              <input type="email" class="form-control" v-model="user.email">
            </div>
            <div class="col-7">
              <label>Senha</label>
              <input type="text" class="form-control" v-model="user.senha">
            </div>
          </div>

          <hr>
          
          <h3>Dados de Endereço</h3>
          <br>
          <div class="row g-3">
            <div class="col-4">
              <label>CEP</label>
              <input type="number" class="form-control" v-model="user.cep">
            </div>
            <div class="col-4">
              <label>Cidade</label>
              <input type="text" class="form-control" v-model="user.cidade">
            </div>
            <div class="col-4">
              <label>Estado</label>
              <input type="text" class="form-control" v-model="user.estado">
            </div>
            <div class="col-4">
              <label>Logradouro</label>
              <input type="text" class="form-control" v-model="user.logradouro">
            </div>
            <div class="col-1">
              <label>Número</label>
              <input type="number" class="form-control" v-model="user.numero">
            </div>
            <div class="col-7">
              <label>Complemento</label>
              <input type="text" class="form-control" v-model="user.complemento">
            </div>
            <div class="col-5">
              <label>Bairro</label>
              <input type="text" class="form-control" v-model="user.bairro">
            </div>
            <div class="col-7">
              <label>Ponto de referência</label>
              <input type="text" class="form-control" v-model="user.pontoRefe">
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-3">
              <button type="submit" class="btn btn-primary">Salvar</button>
            </div>
            <div class="col-3">
              <button type="button" class="btn btn-warning" @click="limparCampos">Limpar campos</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    newUser() {
      // commit para novo usuario
    },

    limparCampos() {
      // limpar os campos do formulário (lembrar de não ficar os campos obrigatórios aparecendo)
    }
  }
}
</script>
  

<style>

</style>
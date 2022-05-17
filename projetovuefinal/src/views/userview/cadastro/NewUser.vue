<template>
  <div class="container mt-5">
    <div class="row justify-content-md-center">
      <div class="col-8">
        <h1>Dados Pessoais</h1>
        <hr>
        <form @submit.prevent="newUser">
          <div class="row g-2">
            <div class="col-6">
              <label>Nome Completo</label>
              <input type="text" class="form-control" v-model="user.name">
            </div>
            <div class="col-6">
              <label>Gênero</label>
              <input type="option" class="form-control" v-model="user.genero">
            </div>
            <div class="col-12">
              <label>Data Nascimento</label>
              <input type="date" class="form-control" v-model="user.dataNasc">
            </div>
          </div>
          <div class="row g-2">
            <div class="col-4">
              <label>Telefone</label>
              <input type="number" class="form-control" v-model="user.telefone">
            </div>
            <div class="col-4">
              <label>E-Mail</label>
              <input type="email" class="form-control" v-model="user.email">
            </div>
            <div class="col-12">
              <label>Senha</label>
              <input type="date" class="form-control" v-model="user.senha">
            </div>
            <div class="col-4">
              <label>Cargo</label>
              <input type="option" class="form-control" v-model="user.cargo">
            </div>
          </div>

          <hr>
          
          <h1>Dados Pessoas</h1>
          <div class="row g-2">
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
            <div class="col-4">
              <label>Numero</label>
              <input type="number" class="form-control" v-model="user.numero">
            </div>
            <div class="col-4">
              <label>Complemento</label>
              <input type="text" class="form-control" v-model="user.complemento">
            </div>
            <div class="col-4">
              <label>Bairro</label>
              <input type="text" class="form-control" v-model="user.bairro">
            </div>
            <div class="col-4">
              <label>Ponto de referência</label>
              <input type="text" class="form-control" v-model="user.pontoRefe">
            </div>
            <div class="col-6 mt-2 text-right">
              <button type="submit" class="btn btn-primary">Salvar</button>
            </div>
            <div class="col-6 mt-2 text-right">
              <button type="button" class="btn btn-primary" @click="limparCampos">Limpar campos</button>
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
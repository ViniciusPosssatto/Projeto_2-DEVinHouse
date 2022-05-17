<template>
  <div class="container mt-5">
    <div class="row justify-content-md-center">
      <div class="col-8">
        <h2>Dados Pessoais</h2>
        <hr>
        <vee-form @submit="newUser" >
          <div class="row g-3">
            <div class="col-7">
              <label>Nome Completo</label>
              <vee-field type="text" name="nome" class="form-control" v-model="user.nome" />
            </div>
            <div class="col-5">
              <label for="genero">Gênero:</label>
              <select name="genero" id="genero" form="generoForm" class="form-control" v-model="user.genero">
                <option value="masc">Masculino</option>
                <option value="fem">Feminino</option>
                <option value="ninfo">Não informado</option>
              </select>
            </div>
            <div class="col-4">
              <label>Data Nascimento</label>
              <vee-field type="date" name="dataNasc" class="form-control" v-model="user.dataNasc"/>
            </div>
            <div class="col-3">
              <label for="cargo">Cargo:</label>
              <select name="cargo" id="cargo" form="cargoForm" class="form-control" v-model="user.cargo">
                <option value="operador">Operador</option>
                <option value="escritorio">Escritório</option>
                <option value="servGerais">Serviços Gerais</option>
                <option value="gerencia">Gerência</option>
              </select>
            </div>
            <div class="col-5">
              <label>Telefone</label>
              <vee-field type="number" name="telefone" class="form-control" v-model="user.telefone"/>
            </div>
          </div>
          <div class="row g-3 justify-content-md-center mt-1">
            <div class="col-7">
              <label>E-Mail</label>
              <vee-field type="email" name="email" class="form-control" v-model="user.email"/>
            </div>
            <div class="col-7">
              <label>Senha</label>
              <vee-field type="text" id="senha1" name="senha1" class="form-control"/>
            </div>
            <div class="col-7">
              <label>Confirme a Senha</label>
              <vee-field type="text" name="senha" class="form-control" v-model="user.senha"/>
            </div>
          </div>

          <hr>
          
          <h3>Dados de Endereço</h3>
          <br>
          <div class="row g-3">
            <div class="col-4">
              <label>CEP</label>
              <vee-field type="number" name="cep" class="form-control" v-model="user.cep"/>
            </div>
            <div class="col-1">
              <br>
              <button type="button" @click="buscaCep">Buscar</button>
            </div>
            <div class="col-4">
              <label>Cidade</label>
              <vee-field type="text" name="cidade" class="form-control" v-model="user.cidade"/>
            </div>
            <div class="col-3">
              <label>Estado</label>
              <vee-field type="text" name="estado" class="form-control" v-model="user.estado"/>
            </div>
            <div class="col-4">
              <label>Logradouro</label>
              <vee-field type="text" name="logradouro" class="form-control" v-model="user.logradouro"/>
            </div>
            <div class="col-2">
              <label>Número</label>
              <vee-field type="number" name="numero" class="form-control" v-model="user.numero"/>
            </div>
            <div class="col-6">
              <label>Complemento</label>
              <vee-field type="text" name="complemento" class="form-control" v-model="user.complemento"/>
            </div>
            <div class="col-5">
              <label>Bairro</label>
              <vee-field type="text" name="bairro" class="form-control" v-model="user.bairro"/>
            </div>
            <div class="col-7">
              <label>Ponto de referência</label>
              <vee-field type="text" name="pontoRefe" class="form-control" v-model="user.pontoRefe"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-6">
              <button type="submit" class="btn btn-primary">Salvar</button>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-warning" @click="limparCampos">Limpar campos</button>
            </div>
          </div>
        </vee-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field } from 'vee-validate'
import '@/views/validate'
import axios from 'axios'

export default {
  data() {
    return {
      user: {
        nome: '',
        genero: '',
        dataNasc: '',
        telefone: '',
        cargo: '',
        email: '',
        senha: '',
        cep: '',
        cidade: '',
        estado: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        numero: '',
        pontoRefe: ''
      }
    }
  },
  components: {
    'vee-form': Form,
    'vee-field': Field
  },
  methods: {
    newUser() {
      // commit para novo usuario
      this.$store.commit('newUser', this.user)
      this.$router.push('/')
      //console.log(this.user)
    },

    limparCampos() {
      // limpar os campos do formulário (lembrar de não ficar os campos obrigatórios aparecendo)
    },

    buscaCep() {  // realiza a busca do cep e preenche alguns campos no formulário
       axios.get(`https://viacep.com.br/ws/${this.user.cep}/json`)
        .then((response) => {
          //console.log(response)
          this.user.cidade = response.data.localidade;
          this.user.estado = response.data.uf;
          this.user.logradouro = response.data.logradouro;
          this.user.complemento = response.data.complemento;
          this.user.bairro = response.data.bairro;
        }) .catch ((error) => {
          console.log(error.message)
          this.$toast.error('Cep informado não existe!', {
            position: 'top'
          });
        })
    }
  }
}
</script>
  

<style>

</style>
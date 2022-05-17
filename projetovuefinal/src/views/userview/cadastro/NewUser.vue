<template>
  <div class="container mt-5">
    <div class="row justify-content-md-center">
      <div class="col-8">
        <h2>Dados Pessoais</h2>
        <hr>
        <vee-form @submit="newUser" :validation-schema="schema" v-slot="{ errors }">
          <div class="row g-3">
            <div class="col-7">
              <label>Nome Completo</label>
              <vee-field type="text" name="nome" class="form-control" v-model="user.nome"/>
              <span class="text-danger" v-text="errors.nome" v-show="errors.nome"></span>
            </div>
            <div class="col-5">
              <label for="genero">Gênero:</label>
              <select name="genero" id="genero" form="generoForm" class="form-control" v-model="user.genero">
                <option value="masc">Masculino</option>
                <option value="fem">Feminino</option>
                <option value="ninfo">Não informado</option>
              </select>
              <span class="text-danger" v-text="errors.genero" v-show="errors.genero"></span>
            </div>
            <div class="col-4">
              <label>Data Nascimento</label>
              <vee-field type="date" name="dataNasc" class="form-control" v-model="user.dataNasc"/>
              <span class="text-danger" v-text="errors.dataNasc" v-show="errors.dataNasc"></span>
            </div>
            <div class="col-3">
              <label for="cargo">Cargo:</label>
              <select name="cargo" id="cargo" form="cargoForm" class="form-control" v-model="user.cargo">
                <option value="operador">Operador</option>
                <option value="escritorio">Escritório</option>
                <option value="servGerais">Serviços Gerais</option>
                <option value="gerencia">Gerência</option>
              </select>
              <span class="text-danger" v-text="errors.cargo" v-show="errors.cargo"></span>
            </div>
            <div class="col-5">
              <label>Telefone</label>
              <vee-field type="number" name="telefone" class="form-control" v-model="user.telefone"/>
              <span class="text-danger" v-text="errors.telefone" v-show="errors.telefone"></span>
            </div>
          </div>
          <div class="row g-3 justify-content-md-center mt-1">
            <div class="col-7">
              <label>E-Mail</label>
              <vee-field type="email" name="email" class="form-control" v-model="user.email"/>
              <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
            </div>
            <div class="col-7">
              <label>Senha</label>
              <vee-field type="text" id="senha1" name="senha1" class="form-control"/>
              <span class="text-danger" v-text="errors.senha1" v-show="errors.senha1"></span>
            </div>
            <div class="col-7">
              <label>Confirme a Senha</label>
              <vee-field type="text" name="senha" class="form-control" v-model="user.senha"/>
              <span class="text-danger" v-text="errors.senha" v-show="errors.senha"></span>
            </div>
          </div>

          <hr>
          
          <h3>Dados de Endereço</h3>
          <br>
          <div class="row g-3">
            <div class="col-4">
              <label>CEP</label>
              <vee-field type="number" name="cep" class="form-control" v-model="user.cep"/>
              <span class="text-danger" v-text="errors.cep" v-show="errors.cep"></span>
            </div>
            <div class="col-1">
              <br>
              <button type="button" @click="buscaCep">Buscar</button>
            </div>
            <div class="col-4">
              <label>Cidade</label>
              <vee-field type="text" name="cidade" class="form-control" v-model="user.cidade"/>
              <span class="text-danger" v-text="errors.cidade" v-show="errors.cidade"></span>
            </div>
            <div class="col-3">
              <label>Estado</label>
              <vee-field type="text" name="estado" class="form-control" v-model="user.estado"/>
              <span class="text-danger" v-text="errors.estado" v-show="errors.estado"></span>
            </div>
            <div class="col-4">
              <label>Logradouro</label>
              <vee-field type="text" name="logradouro" class="form-control" v-model="user.logradouro"/>
              <span class="text-danger" v-text="errors.logradouro" v-show="errors.logradouro"></span>
            </div>
            <div class="col-2">
              <label>Número</label>
              <vee-field type="number" name="numero" class="form-control" v-model="user.numero"/>
              <span class="text-danger" v-text="errors.numero" v-show="errors.numero"></span>
            </div>
            <div class="col-6">
              <label>Complemento</label>
              <vee-field type="text" name="complemento" class="form-control" v-model="user.complemento"/>
              <span class="text-danger" v-text="errors.complemento" v-show="errors.complemento"></span>
            </div>
            <div class="col-5">
              <label>Bairro</label>
              <vee-field type="text" name="bairro" class="form-control" v-model="user.bairro"/>
              <span class="text-danger" v-text="errors.bairro" v-show="errors.bairro"></span>
            </div>
            <div class="col-7">
              <label>Ponto de referência</label>
              <vee-field type="text" name="pontoRefe" class="form-control" v-model="user.pontoRefe"/>
              <span class="text-danger" v-text="errors.pontoRefe" v-show="errors.pontoRefe"></span>
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
import '@/views/validate/index.js'
import axios from 'axios'

export default {
  data() {
    const schema = {
      nome: "required",
      genero: "",
      dataNasc: "required|dataInferior",
      telefone: "required",
      cargo: "",
      email: "required|email",
      senha1: "required",
      senha: "required|confirmed:senha1",
      cep: "required",
      cidade: "required",
      estado: "required",
      logradouro: "required",
      complemento: "required",
      bairro: "required",
      numero: "required",
      pontoRefe: "required"
    }
    return {
      schema,
      user: {
        id: Date.now(),
        autenticado: false,
        nome: 'vine',
        genero: 'masc',
        dataNasc: '2022-05-02',
        telefone: '34343',
        cargo: 'operador',
        email: 'admin@admin.com.br',
        senha: '123',
        cep: '88080400',
        cidade: '',
        estado: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        numero: '34',
        pontoRefe: 'sdfsdfd'
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
      this.$store.dispatch('setUserModule/newUser', this.user)
      this.$router.push('/login')
      console.log(this.user)
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
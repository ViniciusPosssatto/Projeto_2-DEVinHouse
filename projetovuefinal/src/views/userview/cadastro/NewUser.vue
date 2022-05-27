<template>
  <div class="container mt-5">
    <div class="row justify-content-md-center">
      <div class="col-10">
        <h2>Dados Pessoais</h2>
        <hr>
        <vee-form id="formUser" @submit="newColaborador" :validation-schema="schema" v-slot="{ errors }">
          <div class="row g-3">
            <div class="col-5">
              <label>Nome Completo</label>
              <vee-field type="text" name="nome" class="form-control" v-model="colab.nome"/>
              <span class="text-danger" v-text="errors.nome" v-show="errors.nome"></span>
            </div>
            <div class="col-3">
              <label for="genero">Gênero:</label>
              <select name="genero" id="genero" form="generoForm" class="form-control" v-model="colab.genero">
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Não informado">Não informado</option>
              </select>
              <span class="text-danger" v-text="errors.genero" v-show="errors.genero"></span>
            </div>
            <div class="col-4">
              <label>Data Nascimento</label>
              <vee-field type="date" name="dataNasc" class="form-control" v-model="colab.dataNasc"/>
              <span class="text-danger" v-text="errors.dataNasc" v-show="errors.dataNasc"></span>
            </div>
            <div class="col-3">
              <label for="cargo">Cargo:</label>
              <select name="cargo" id="cargo" form="cargoForm" class="form-control" v-model="colab.cargo">
                <option value="Estudante">Estudante</option>
                <option value="Professor">Professor</option>
                <option value="Serviços Gerais">Serviços Gerais</option>
                <option value="Outros">Outros</option>
              </select>
              <span class="text-danger" v-text="errors.cargo" v-show="errors.cargo"></span>
            </div>
            <div class="col-4">
              <label>Telefone</label>
              <vee-field type="number" name="telefone" class="form-control" v-model="colab.telefone"/>
              <span class="text-danger" v-text="errors.telefone" v-show="errors.telefone"></span>
            </div>
            <div class="col-5">
              <label>E-Mail</label>
              <vee-field type="email" name="email" class="form-control" v-model="colab.email"/>
              <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
            </div>
          </div>
          
          <hr>
          
          <h3>Dados de Endereço</h3>
          <br>
          <div class="row g-3">
            <div class="col-4">
              <label>CEP</label>
              <vee-field type="number" name="cep" class="form-control" v-model="colab.cep"/>
              <span class="text-danger" v-text="errors.cep" v-show="errors.cep"></span>
            </div>
            <div class="col-1">
              <br>
              <button type="button" @click="buscaCep">Buscar</button>
            </div>
            <div class="col-4">
              <label>Cidade</label>
              <vee-field type="text" name="cidade" class="form-control" v-model="colab.cidade" data-toggle="tooltip" data-placement="top" title="Preenchimento automatico" readonly/>
              <span class="text-danger" v-text="errors.cidade" v-show="errors.cidade"></span>
            </div>
            <div class="col-3">
              <label>Estado</label>
              <vee-field type="text" name="estado" class="form-control" v-model="colab.estado" data-toggle="tooltip" data-placement="top" title="Preenchimento automatico" readonly/>
              <span class="text-danger" v-text="errors.estado" v-show="errors.estado"></span>
            </div>
            <div class="col-4">
              <label>Logradouro</label>
              <vee-field type="text" name="logradouro" class="form-control" v-model="colab.logradouro"/>
              <span class="text-danger" v-text="errors.logradouro" v-show="errors.logradouro"></span>
            </div>
            <div class="col-2">
              <label>Número</label>
              <vee-field type="number" name="numero" class="form-control" v-model="colab.numero"/>
              <span class="text-danger" v-text="errors.numero" v-show="errors.numero"></span>
            </div>
            <div class="col-6">
              <label>Complemento</label>
              <vee-field type="text" name="complemento" class="form-control" v-model="colab.complemento"/>
              <span class="text-danger" v-text="errors.complemento" v-show="errors.complemento"></span>
            </div>
            <div class="col-5">
              <label>Bairro</label>
              <vee-field type="text" name="bairro" class="form-control" v-model="colab.bairro"/>
              <span class="text-danger" v-text="errors.bairro" v-show="errors.bairro"></span>
            </div>
            <div class="col-7">
              <label>Ponto de referência</label>
              <vee-field type="text" name="pontoRefe" class="form-control" v-model="colab.pontoRefe"/>
              <span class="text-danger" v-text="errors.pontoRefe" v-show="errors.pontoRefe"></span>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-6" v-if="this.$route.params.id">
              <button type="button" class="btn btn-primary" style="font-weight: bold; font-size: large;" @click="editarColab">Editar</button>
            </div>
            <div class="col-6" v-else>
              <button type="submit" class="btn btn-primary" style="font-weight: bold; font-size: large;">Salvar</button>
            </div>
            <div class="col-6">
              <button type="button" style="font-weight: bold; font-size: large;" class="btn btn-warning" @click="limparCampos()">Limpar campos</button>
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
      colab: {
        id: Date.now(),
        nome: 'asasd',
        genero: '',
        dataNasc: '',
        telefone: '3434',
        cargo: '',
        email: '',
        cep: '88080400',
        cidade: '',
        estado: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        numero: '23',
        pontoRefe: 'asdasd'
      }
    }
  },
  components: {
    'vee-form': Form,
    'vee-field': Field
  },
  methods: {
    
    async newColaborador() {
      //novo usuario e edição também
      
      let newUser = await this.$store.dispatch('setColaboradorModule/newColaborador', this.colab)
      if(newUser){
        this.colab = { id: Date.now() };
        this.$toast.success('Cadastro criado com sucesso!', { 
          position: 'top'
        });
        this.$router.push('/listagem')
      }else {
        this.$toast.warning('Este email já está cadastrado no sistema!', { 
          position: 'top'
        });
        this.$router.push('/listagem')
      }

    },

    editarColab() {
      this.$store.commit('setColaboradorModule/editarColabs', this.colab)
      this.$toast.success('Usuário editado com sucesso!', { 
          position: 'top'
        });
      this.$router.push('/listagem')
    },

    limparCampos() {
      // limpar os campos do formulário
      //this.colab = {};
      document.getElementById('formUser').reset()
    },

    buscaCep() {  // realiza a busca do cep e preenche alguns campos no formulário
       axios.get(`https://viacep.com.br/ws/${this.colab.cep}/json`)
        .then((response) => {
          //console.log(response)
          this.colab.cidade = response.data.localidade;
          this.colab.estado = response.data.uf;
          this.colab.logradouro = response.data.logradouro;
          this.colab.complemento = response.data.complemento;
          this.colab.bairro = response.data.bairro;
        }) .catch ((error) => {
          console.log(error.message)
          this.$toast.error('Cep informado não existe!', {
            position: 'top'
          });
        })
    }
  },

  computed: {

  },

  mounted() {  // busca a lista de colaboradores e compara o ID - O que for igual vai ser jogado para o v-model preencher os campos
    let lista = JSON.parse(localStorage.getItem('listaColabs'))
    if(lista !== null) {
      lista.forEach(element => {
        if(element.id == this.$route.params.id) {
          //console.log(element)
          this.colab = element;
        }
      })
    }

    this.$store.state.setItensModule.nomeNavbar = 'Cadastro de colaboradores'
  }
}
</script>
  

<style>

</style>
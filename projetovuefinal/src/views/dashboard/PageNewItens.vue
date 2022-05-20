<template>
 <div class="container mt-5">
    <div class="row justify-content-md-center">
      <div class="col-8">
        <h2>Cadastro de novos Livros</h2>
        <hr>
        <h5>Dados principais</h5>
        <hr>
        <vee-form id="formItens" @submit="newItem" :validation-schema="schema" v-slot="{ errors }">
          <div class="row g-3">
            
            <div class="col-3">
              <label>Código patrimônio</label>
              <vee-field type="number" name="codigo" class="form-control" v-model="livro.codigo"/>
              <span class="text-danger" v-text="errors.codigo" v-show="errors.codigo"></span>
            </div>

            <div class="col-5">
              <label>Título do livro</label>
              <vee-field type="text" name="titulo" class="form-control" v-model="livro.titulo"/>
              <span class="text-danger" v-text="errors.titulo" v-show="errors.titulo"></span>
            </div>

            <div class="col-4">
              <label for="categoria">Categoria do livro</label>
              <select name="categoria" id="categoria" form="categoriaForm" class="form-control" v-model="livro.categoria">
                <option value="geografia">Geografia</option>
                <option value="historia">História</option>
                <option value="ingles">Inglês</option>
                <option value="literatura">Literatura</option>
                <option value="portugues">Português</option>
                <option value="biologia">Biologia</option>
              </select>
              <span class="text-danger" v-text="errors.categoria" v-show="errors.categoria"></span>
            </div>

            <hr>
            
            <h5>Dados complementares</h5>
            
            <hr>

            <div class="col-3">
              <label>Valor do livro (R$)</label>
              <vee-field type="number" name="valor" class="form-control" v-model="livro.valor"/>
              <span class="text-danger" v-text="errors.valor" v-show="errors.valor"></span>
            </div>
            <div class="col-9">
              <label>URL da foto</label>
              <vee-field type="text" name="url" class="form-control" v-model="livro.url"/>
            </div>
            <div class="col-6">
              <label>Editora</label>
              <vee-field type="text" name="marca" class="form-control" v-model="livro.editora"/>
              <span class="text-danger" v-text="errors.marca" v-show="errors.marca"></span>
            </div>
            <div class="col-6">
              <label>Autor</label>
              <vee-field type="text" name="modelo" class="form-control" v-model="livro.autor"/>
              <span class="text-danger" v-text="errors.modelo" v-show="errors.modelo"></span>
            </div>
            <div class="col-12">
              <label>Descrição</label>
              <vee-field type="text" name="descricao" class="form-control" placeholder="Algum detalhe que o livro possui" v-model="livro.descricao"/>
              <span class="text-danger" v-text="errors.descricao" v-show="errors.descricao"></span>
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

export default {

  data() {
    const schema = {
      codigo: "",
      titulo: "required",
      categoria: "",
      valor: "",
      url:"" ,
      editora: "",
      autor: "",
      descrição: ""
    }

    return {
      schema,
      livro: {
        status: false
      }
    }
    
  },
  components: {
    'vee-form': Form,
    'vee-field': Field
  },

  methods: {

    newItem() {
      // cadastra um item
      //console.log(this.livro)
      this.$store.dispatch('setItensModule/newItem', this.livro);
      this.livro = {
        status: false
      };
    },

    limparCampos() {
      // limpa os campos de input
      this.livro = {};
    }
  }
  
}

</script>

<style>



</style>
<template>
 <div class="container mt-5">
    <div class="row justify-content-md-center">
      <div class="col-8">
        <h2>Cadastro de novos itens</h2>
        <hr>
        <h5>Dados principais</h5>
        <hr>
        <vee-form id="formItens" @submit="newItens" :validation-schema="schema" v-slot="{ errors }">
          <div class="row g-3">
            
            <div class="col-3">
              <label>Código patrimônio</label>
              <vee-field type="number" name="codigo" class="form-control" v-model="item.codigo"/>
              <span class="text-danger" v-text="errors.codigo" v-show="errors.codigo"></span>
            </div>

            <div class="col-5">
              <label>Título do item</label>
              <vee-field type="text" name="titulo" class="form-control" v-model="item.titulo"/>
              <span class="text-danger" v-text="errors.titulo" v-show="errors.titulo"></span>
            </div>

            <div class="col-4">
              <label>Categoria do item</label>
              <vee-field type="text" name="categoria" class="form-control" v-model="item.categoria"/>
              <span class="text-danger" v-text="errors.categoria" v-show="errors.categoria"></span>
            </div>

            <hr>
            
            <h5>Dados complementares</h5>
            
            <hr>

            <div class="col-3">
              <label>Valor do item (R$)</label>
              <vee-field type="number" name="valor" class="form-control" v-model="item.valor"/>
              <span class="text-danger" v-text="errors.valor" v-show="errors.valor"></span>
            </div>
            <div class="col-9">
              <label>URL da foto</label>
              <vee-field type="text" name="url" class="form-control" v-model="item.url"/>
            </div>
            <div class="col-6">
              <label>Marca</label>
              <vee-field type="text" name="marca" class="form-control" v-model="item.marca"/>
              <span class="text-danger" v-text="errors.marca" v-show="errors.marca"></span>
            </div>
            <div class="col-6">
              <label>Modelo</label>
              <vee-field type="text" name="modelo" class="form-control" v-model="item.modelo"/>
              <span class="text-danger" v-text="errors.modelo" v-show="errors.modelo"></span>
            </div>
            <div class="col-12">
              <label>Descrição</label>
              <vee-field type="text" name="descricao" class="form-control" v-model="item.descricao"/>
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
      marca: "",
      modelo: "",
      descrição: ""
    }

    return {
      schema,
      item: {
        codigo: Date.now()
      }
    }
    
  },
  components: {
    'vee-form': Form,
    'vee-field': Field
  },

  methods: {

    newItens() {
      // cadastra um item
      this.$store.dispatch('setItemModule/newItem', this.item);
    },

    limparCampos() {
      // limpa os campos de input
    }
  }
  
}

</script>

<style>



</style>
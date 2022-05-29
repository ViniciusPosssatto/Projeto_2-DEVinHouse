<template>
 <div class="container mt-5 animate__animated animate__fadeIn">
    <div class="row justify-content-md-center">
      <div class="col-sm-12 col-md-6 col-lg-10">
        <hr>
        <h2>Dados principais</h2>
        <hr>
        <vee-form id="formItens" @submit="newItem" :validation-schema="schema" v-slot="{ errors }">
          <div class="row g-3">
            
            <div class="col-sm-12 col-md-6 col-lg-3">
              <label>Código patrimônio</label>
              <vee-field type="text" name="codigo" class="form-control" disabled="" v-model.number="livro.codigo"/>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-5">
              <label>Título do livro</label>
              <vee-field type="text" name="titulo" class="form-control" v-model="livro.titulo"/>
              <span class="text-danger" v-text="errors.titulo" v-show="errors.titulo"></span>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-4">
              <label for="categoria">Categoria do livro</label>
              <select name="categoria" id="categoria" form="categoriaForm" class="form-control" v-model="livro.categoria">
                <option value="Geografia">Geografia</option>
                <option value="História">História</option>
                <option value="Inglês">Inglês</option>
                <option value="Literatura">Literatura</option>
                <option value="Português">Português</option>
                <option value="Matemática">Matemática</option>
                <option value="Biologia">Biologia</option>
                <option value="Física">Física</option>
                <option value="Química">Química</option>
                <option value="Filosofia">Filosofia</option>
                <option value="Sociologia">Sociologia</option>
              </select>
              <span class="text-danger" v-text="errors.categoria" v-show="errors.categoria"></span>
            </div>

            <hr>
            
            <h2>Dados complementares</h2>
            
            <hr>

            <div class="col-sm-12 col-md-6 col-lg-3">
              <label>Valor do livro (R$)</label>
              <vee-field type="number" name="valor" class="form-control" v-model.number="livro.valor"/>
              <span class="text-danger" v-text="errors.valor" v-show="errors.valor"></span>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-9">
              <label>URL da foto</label>
              <vee-field type="text" name="url" class="form-control" v-model="livro.url"/>
              <span class="text-danger" v-text="errors.url" v-show="errors.url"></span>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <label>Editora</label>
              <vee-field type="text" name="editora" class="form-control" v-model="livro.editora"/>
              <span class="text-danger" v-text="errors.editora" v-show="errors.editora"></span>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <label>Autor</label>
              <vee-field type="text" name="autor" class="form-control" v-model="livro.autor"/>
              <span class="text-danger" v-text="errors.autor" v-show="errors.autor"></span>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-12">
              <label>Descrição</label>
              <vee-field type="text" name="descricao" class="form-control" placeholder="Algum detalhe que o livro possui" v-model="livro.descricao"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-sm-12 col-md-6 col-lg-6" v-if="this.$route.params.codigo">
              <button type="button" class="btn btn-primary" style="font-weight: bold; font-size: large;" @click="editarLivros">Editar</button>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6" v-else>
              <button type="submit" class="btn btn-primary" style="font-weight: bold; font-size: large;">Salvar</button>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
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

// gerar um código aleatório do patrimônio
function geraCodigo() {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 6; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}
export default {
  
  data() {
    const schema = {
      codigo: "",
      titulo: "required",
      categoria: "",
      valor: "required",
      url:"required" ,
      editora: "required",
      autor: "required",
      descrição: ""
    }

    return {
      schema,
      livro: {
        codigo: geraCodigo(),
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
      this.$store.commit('setItensModule/newItem', this.livro);
      document.getElementById('formItens').reset()
      this.$toast.success('Livro adicionado com sucesso!', { 
          position: 'top'
        });
      this.$router.push('/inventario')
    },

    editarLivros() {
      this.$store.commit('setItensModule/editarLivro', this.livro)
      this.$toast.success('Livro editado com sucesso!', { 
          position: 'top'
        });
      this.$router.push('/inventario')
    },

    limparCampos() {
      // limpa os campos de input
      //this.livro = {};
      document.getElementById('formItens').reset()
    }
  },

  mounted() {  // busca a lista de livros e compara o codigo - O que for igual vai ser jogado para o v-model preencher os campos
    let lista = JSON.parse(localStorage.getItem('listaLivros'))
    if(lista !== null) {
      lista.forEach(element => {
        if(element.codigo == this.$route.params.codigo) {
          this.livro = element;
        }
      })
    }

    this.$store.state.setItensModule.nomeNavbar = 'Cadastro de livros'
  }
  
}

</script>

<style scoped>

@media(max-width: 425px) {

  /* -- */
  .row {
    width: 100%;
    float: none;
    margin: 10px 5px 0 5px;
  }


}

</style>
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
          <form class="input-group" @submit="buscarUser(busca)">
            <input class="form-control me-2" type="search" placeholder="Digite o nome do colaborador" aria-label="Search" v-model="busca">
            <button class="btn btn-outline-success" type="submit" >Buscar</button>
          </form>
        </div>
      </nav>
      <hr>

      <!------------------------------>
      <!--- cards dos colaboradores -->

      <div class="text-center" v-if="listaColab.length === 0">
        <h5>Colaborador não econtrado ou não cadastrado</h5>
      </div>
      <div v-else class="display-card align-items-around">
        <div v-for="user in (pesquisaUser ? pesquisaUser : listaColab)" :key="user.id" class="ml-3">
          <div class="tamanho card text-white bg-dark m-2 align-items-baseline" style="width: 16rem; height: 25rem; max-width: 16rem; max-height: 30rem; justify-content: space-evenly" @click="detalhes(user)" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="row align-items-baseline" style=" max-width: 300px; align-self: center; justify-content: center;">
              <vue-gravatar :email="user.email" style="border-radius: 50%;"/>
            </div>
              <div class="tamanho card-header">
                <h5 class="card-title" v-text="user.nome"></h5>
                <hr>
                  <p class="card-text" v-text="user.email"></p>
                  <p class="card-text" v-text="user.telefone"></p>
              </div>
            <div class=" tamanho card-footer">
              <p class="card-text" v-text="user.cargo"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-5 shadow">
        <div class="modal-header p-5 pb-4 border-bottom-0 modal-centro">
          <h2 class="fw-bold mb-0">Dados do colaborador</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div class="modal-body p-5 pt-0 modal-centro">
            
            <hr class="my-4">
            <form id="formEdicao" aria-disabled="disabled">
              <fieldset>

                <div class="row" style="justify-content: center;">
                <div class="form mb-3 col-7">
                  <label name="nome" >Nome</label>
                  <input name="nome" type="text" class="form-control rounded-4" disabled id="InputNome" v-model="colab.nome">
                </div>
                <div class="form mb-3 col-5">
                  <label name="genero" for="genero">Gênero</label>
                  <input name="genero" type="text" class="form-control rounded-4" disabled id="genero" v-model="colab.genero">
                </div>
                <div class="form mb-3 col-5">
                  <label name="dataNasc" for="dataNasc">Data nascimento</label>
                  <input name="dataNasc" type="text" class="form-control rounded-4" disabled id="dataNasc" v-model="colab.dataNasc">
                </div>
                <div class="form mb-3 col-7">
                  <label name="cargo" for="cargo">Cargo</label>
                  <input name="cargo" type="text" class="form-control rounded-4" disabled id="cargo" v-model="colab.cargo">
                </div>
                <div class="form mb-3 col-4">
                  <label name="telefone" for="telefone">Telefone</label>
                  <input name="telefone" type="text" class="form-control rounded-4" disabled id="telefone" v-model="colab.telefone">
                </div>

                <div class="form mb-3 col-8">
                  <label name="email" for="email">Email</label>
                  <input name="email" type="email" class="form-control rounded-4" disabled id="email" placeholder="name@example.com" v-model="colab.email">
                </div>
                <h5>Dados de endereço</h5>
                
                <div class="form mb-3 col-4">
                  <label name="cep" for="cep">CEP</label>
                  <input name="cep" type="number" class="form-control rounded-4" disabled id="cep" v-model="colab.cep">
                </div>
                <div class="form mb-3 col-5">
                  <label name="cidade" for="cidade">Cidade</label>
                  <input name="cidade" type="text" class="form-control rounded-4" disabled id="cidade" v-model="colab.cidade">
                </div>
                <div class="form mb-3 col-3">
                  <label name="estado" for="estado">Estado</label>
                  <input name="estado" type="text" class="form-control rounded-4" disabled id="estado" v-model="colab.estado">
                </div>
                <div class="form mb-3 col-5">
                  <label name="logradouro" for="logradouro">Logradouro</label>
                  <input name="logradouro" type="text" class="form-control rounded-4" disabled id="logradouro" v-model="colab.logradouro">
                </div>
                <div class="form mb-3 col-2">
                  <label name="numero" for="numero">Numero</label>
                  <input name="numero" type="number" class="form-control rounded-4" disabled id="numero" v-model="colab.numero">
                </div>
                <div class="form mb-3 col-5">
                  <label name="complemento" for="complemento">Complemento</label>
                  <input name="complemento" type="text" class="form-control rounded-4" disabled id="complemento" v-model="colab.complemento">
                </div>
                <div class="form mb-3 col-5">
                  <label name="bairro" for="bairro">Bairro</label>
                  <input name="bairro" type="text" class="form-control rounded-4" disabled id="bairro" v-model="colab.bairro">
                </div>
                <div class="form mb-3 col-7">
                  <label name="pontoRefe" for="pontoRefe">Ponto de referência</label>
                  <input name="pontoRefe" type="text" class="form-control rounded-4" disabled id="pontoRefe" v-model="colab.pontoRefe">
                </div>

                <hr class="my-4">
                
                <button class="w-50 py-2 mb-2 btn btn-outline-primary rounded-4" type="button" data-bs-dismiss="modal" aria-label="Close" @click="editarDados">
                  Editar dados
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      colab: {
        id: '',
        status: '',
        nome: '',
        genero: '',
        dataNasc: '',
        telefone: '',
        cargo: '',
        email: '',
        cep: '',
        cidade: '',
        estado: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        numero: '',
        pontoRefe: ''
      },
      pesquisaUser: [],
      busca: ''
    }
  },

  methods: {

    buscarUser() {
      if(this.busca !== '') {
        let pesquisa = () => {
          return this.listaColab.filter(item =>
            item.nome
              .toLowerCase()
                .includes(this.busca.toLowerCase()));
        } 
        if(pesquisa) {
          this.pesquisaUser = pesquisa(this.busca);
          //console.log(this.pesquisaUser)
          if(this.pesquisaUser.length === 0) {
            this.$toast.error('Livro não econtrado! Tente outro nome.', {
              position: 'top'
            });
          }
        } 
      } else {
        this.pesquisaUser = this.listaColab;
      }
    },
  
    detalhes(colab) {
      this.colab = colab;
    },

    editarDados() {
      this.$router.push(`/newUser/${this.colab.id}`);
    }
  },
  computed: {

    listaColab() {
      return this.$store.state.setColaboradorModule.listaColabs;
    }

  },

  mounted() {
    this.$store.commit('setColaboradorModule/getColaborador');
    this.pesquisaUser = this.listaColab;
  }
}
</script>

<style>
.modal-centro {
  background-color: #bbbaba8a !important;
}

.tamanho {
  width: -webkit-fill-available;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 10px;
  max-width: 15rem;
}
.display-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
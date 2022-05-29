<template>
  <div class="row animate__animated animate__fadeIn m-2">
    <div class="col-sm-12 col-md-12 col-lg-12 text-center">
      <h1>Bem vind@!</h1>
    </div>
      <div class="col-sm-12 col-md-6 col-lg-6 align-items-around card text-white bg-dark p-3 div-card">
        <h2>Sistema de empréstimos de livros</h2>
        <span class="card card-home div-card">Aqui nós temos o melhor!!</span>
        <p>Confira! Contate um nossos atendentes virtuais e faça um tour pelo sistema conhecendo o funcionamento e os benefícios de usar a biblioteca virtual.</p>
        <p>Temos um descontão na mensalidade para aqueles que realizarem o tour. Legal né?! </p>
        <p>Participe e garanta já o seu.</p>
      </div>
    <div class="col-sm-12 col-md-6 col-lg-6">
      <h3>Cadastre livros e colaboradores</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero distinctio incidunt labore dolor. Laboriosam obcaecati accusantium id cupiditate minima minus velit necessitatibus eveniet asperiores, molestias in adipisci quae saepe repudiandae!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci eaque in fugit quae rerum consequuntur autem aperiam ullam fuga optio harum at reiciendis odit, blanditiis facere laudantium eius deleniti?</p>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6 mb-4 mt-4">
      <h3>Controle seu inventário</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur ducimus nobis blanditiis quam velit distinctio harum? Qui quia consequatur optio reiciendis fugit quaerat quae cum, illum odio ipsum? Eaque.</p>
      <hr>
      <h5>Organização faz a diferença!</h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime blanditiis facere cum, magni voluptates qui reiciendis culpa nisi quibusdam optio numquam voluptatem, soluta fugiat suscipit eos quae nulla. Cum, enim.</p>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
      <div class="col card text-white bg-dark mt-3 div-card p-4">
        <h3>Por onde começar?</h3>
        <p>Comece cadastrando seu primeiro livro:</p>
        <button @click="pageCL" class="btn btn-primary">Cadastrar um livro</button>
        <p class="mt-3">Ou se preferir, cadastre um colaborador:</p>
        <button @click="pageCC" class="btn btn-primary">Cadastrar um colaborador</button>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-11">
      <img src="@/assets/img/fundo-home-2.jpg" alt="imagem-de-livros" style= "width: 1580px; height: 280px;">
    </div>
    

    <footer class="bg-light text-center">
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2002 Copyright: TrOnline ltd. -> Telefone: 0800-059-3001 E-mail: biblioteca-vir@email.com
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: {}
    }
  },

  methods: {
    pageCL() {
      this.loader = this.$loading.show();
      setTimeout(() => {

        this.$router.push('/newItens');
        this.loader.hide();
      }, 300)
    },
    pageCC() {
      this.loader = this.$loading.show();
      setTimeout(() => {

        this.$router.push('/newUser');
        this.loader.hide();
      }, 300)
    }
  },

  mounted() {
    this.$store.state.coisasGeraisModule.nomeNavbar = 'Biblioteca Virtual'
  }


}
</script>

<style scoped>
.card-home {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 10px;
  color: rgb(7, 7, 7);
  font-size: 18px;
  margin: 10px 0 10px 0;
  text-align: center;
  max-width: 300px;
  background-color: #eeeaeab2
}

.card-home :hover {
  color: white;
  background-color: blue;
}

.div-card {
  position: inherit;
}

@media(max-width: 425px) {

  /* -- */
  .row {
    width: 100%;
    float: none;
    margin: 10px 5px 0 5px;
  }


}

</style>
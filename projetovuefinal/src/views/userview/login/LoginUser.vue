<template>

<!-- FORMULARIO PARA LOGIN DE USUÁRIO -->
  <div class="container mt-4">
    <div class="row justify-content-md-center">
      <div sm="5" class="d-flex justify-content-center align-items-center left-login">
        <div class="col-4">
          <h2 class="text-center mb-4">Biblioteca virtual</h2>
          <hr class="my-3">
          <vee-form @submit="autenticaLogin" name="formLogin"  :validation-schema="schema1" v-slot="{ errors }">
            <h4 class="text-center mb-4 title-login">Realize o login para continuar</h4>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email:</label>
              <vee-field type="email" name="email1" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="user@user.com" v-model="login.email1"/>
              <span class="text-danger" v-text="errors.email1" v-show="errors.email1"></span>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Senha:</label>
              <vee-field name="senha1" type="password" class="form-control" id="exampleInputPassword1" placeholder="*******" v-model="login.senha1"/>
              <span class="text-danger" v-text="errors.senha1" v-show="errors.senha1"></span>
              <div id="emailHelp" class="form-text">Nunca compartilhe senhas com ninguém.</div>
            </div>
            <div class="mb-3">
              <small><a href="">Esqueceu a senha?</a></small>
            </div>
            <button class="w-100 py-2 mb-2 btn btn-outline-success rounded-4"  type="submit">
              Fazer login
            </button>
            <hr class="my-4">
            <div class="mb-3">
              <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="button" @click="emConstrucao">
                <svg class="bi me-1" width="16" height="16"><use xlink:href="#google"></use></svg>
                Entrar com o Google
              </button>
              <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="button" @click="emConstrucao">
                <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"></use></svg>
                Entrar com o Facebook
              </button>
            </div>
            <hr class="my-4">
            <div class="col-12 mb-3 mt-3 justify-content-md-center">
              <span>Não tem cadastro?</span>
            </div>
            <button type="button" class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Cadastrar-se</button>
          </vee-form>
        </div>
        <div class="col-6">
          <div class="d-flex justify-content-center align-items-center left-login ms-5">
            <img src="@/assets/img/tela-login.svg" alt="imagem-livros" class="img-login">
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL PARA CADASTRO DE USUÁRIO -->

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-5 shadow">
        <div class="modal-header p-5 pb-4 border-bottom-0">
          <h2 class="fw-bold mb-0">Criar uma nova conta</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-5 pt-0">
          <vee-form id="formUserLogin" class="" @submit="newUserLogin" :validation-schema="schema" v-slot="{ errors }">
            <div class="form-floating mb-3">
              <vee-field name="nome" type="text" class="form-control rounded-4" id="InputNome" placeholder="Wenceslau" v-model="userLogin.nome"/>
              <label name="nome" for="InputNome">Nome de usuário</label>
              <span class="text-danger" v-text="errors.nome" v-show="errors.nome"></span>
            </div>
            <div class="form-floating mb-3">
              <vee-field name="email" type="email" class="form-control rounded-4" id="floatingInput1" placeholder="name@example.com" v-model="userLogin.email"/>
              <label name="email" for="floatingInput1">Email</label>
              <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
            </div>
            <div class="form-floating mb-3">
              <vee-field name="password" type="password" class="form-control rounded-4" id="floatingPassword" placeholder="Password"/>
              <label name="password" for="floatingPassword">Senha</label>
              <span class="text-danger" v-text="errors.password" v-show="errors.password"></span>
            </div>
            <div class="form-floating mb-3">
              <vee-field name="senha" type="password" class="form-control rounded-4" id="senha" placeholder="Password" v-model="userLogin.senha"/>
              <label name="senha" for="senha">Confirme a senha</label>
              <span class="text-danger" v-text="errors.senha" v-show="errors.senha"></span>
            </div>
            <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit" data-bs-dismiss="modal">Cadastrar</button>
            <small class="text-muted">Clicando em cadastrar, você aceita os termos e regras de uso.</small>
            <hr class="my-4">
            <h2 class="fs-5 fw-bold mb-3">Se preferir</h2>
            <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="button" @click="emConstrucaoModel">
              <svg class="bi me-1" width="16" height="16"><use xlink:href="#twitter"></use></svg>
              Cadastrar com o Google
            </button>
            <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="button" @click="emConstrucaoModel">
              <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"></use></svg>
              Cadastrar com o Facebook
            </button>
          </vee-form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { Form, Field } from 'vee-validate'

export default {
  components: {
    'vee-form': Form,
    'vee-field': Field
  },
  data() {
    const schema = {
      nome: "required",
      email: "required|email",
      password: "required",
      senha: "required|confirmed:password"
    }
    const schema1 = {
      email1: "required|email",
      senha1: "required"
    }
    return {
      schema,
      schema1,
      login: {
        email1: 'admin@admin.com.br',
        senha1: '123'
      },
      userLogin: {
        id: Date.now(),
        autenticado: false,
        nome: '',
        email: '',
        senha: ''
      },
      loader: {},
    }
  },
  methods: {

    autenticaLogin() {
      
      this.loader = this.$loading.show();
      this.$store.dispatch('setUserLoginModule/autenticar', this.login)
        .then(() => {
          // mensagem de login efetuado
          if(this.autenticado === true) {
            this.$toast.success('Login efetuado com sucesso!', { 
              position: 'top'
            });
            this.loader.hide();
            // redireciona para tela de dashboard caso o login for correto
            this.$router.push('/home');
          } else {
            this.$toast.error('Login ou senha incorretos!', {
              position: 'top'
            });
            this.loader.hide();
          }
        })
        .catch((err) => {
          console.log('erro do catch login ' + err.message)
        });
    },

    async newUserLogin() {
      let userTest = await this.$store.dispatch('setUserLoginModule/newUserLogin', this.userLogin)
        if(userTest){
          this.userLogin = {
            id: Date.now(),
            autenticado: false
          }
          document.getElementById('formUserLogin').reset();
          this.$toast.success('Cadastro criado com sucesso! Faça o login para continuar.', {  
            position: 'top'
          });
         
        }else {
          this.$toast.warning('Este email já está cadastrado no sistema!', {  
            position: 'top'
          });
        }
    },

    emConstrucao() {
    this.$toast.warning('Funcionamento em construção. Tente novamente mais tarde.', {
        position: 'top'
      });
    },

    emConstrucaoModel() {
      alert('Funcionamento em construção. Tente novamente mais tarde.')
    },
    
  },
  computed: {
    
    autenticado() {
      return this.$store.state.setUserLoginModule.autenticado;
    }
  },

  mounted() {
    this.$store.state.setUserLoginModule.autenticado = localStorage.getItem('token') ? true : false;
  }
}
</script>

<style scoped>

.img-login {
  width: 600px;
  height: 600px;
}


</style>
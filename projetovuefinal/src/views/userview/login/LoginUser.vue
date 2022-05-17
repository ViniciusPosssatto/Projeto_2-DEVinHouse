<template>
  <div class="container mt-4">
    <div class="col-3">
      <vee-form  @submit="autenticar" :validation-schema="schema" v-slot="{ errors }">
        <h2 class="text-center mb-4 title-login">Faça login</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email:</label>
          <vee-field type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="login.email"/>
          <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Senha:</label>
          <vee-field name="senha" type="password" class="form-control" id="exampleInputPassword1" v-model="login.senha"/>
          <span class="text-danger" v-text="errors.senha" v-show="errors.senha"></span>
          <div id="emailHelp" class="form-text">Nunca compartilhe senhas com ninguém.</div>
        </div>
        <div class="mb-3">
          <small><a href="#">Esqueceu a senha?</a></small>
        </div>
        <div class="mb-3">
          <small><a href="#">Fazer login com a conta Google</a></small>
        </div>
        <button type="submit" class="btn btn-success">Fazer login</button>
        <div class="col-12 mb-3 mt-3">
          <span>Não tenho cadastro</span>
        </div>
        <button type="button" class="btn btn-primary" @click="cadastrar">Cadastrar-se</button>
      </vee-form>
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
      email: "required|email",
      senha: "required"
    }
    return {
      schema,
      login: {},
      loader: {}
    }
  },
  methods: {
    autenticar() {
      //this.loader = this.$loading.show();
      this.$store.dispatch('autenticaUser/autenticar', this.login)
        .then(() => {
          console.log(this.login)
          // mensagem de login efetuado
          // this.$toast.success('Login efetuado com sucesso!', {
          //   position: 'top'
          // });
          //this.loader.hide();
          // redireciona para tela de dashboard caso o login for correto
          //this.$router.push('/home');
        })
        .catch((err) => {
          console.log(err.message)
          // this.$toast.error('Login ou senha incorretos!', {
          //   position: 'top'
          // });
        });
    },
    cadastrar() {
      // redireciona para tela de cadastro
      this.$router.push('/cadastro');
    }
  }
}
</script>

<style>

</style>
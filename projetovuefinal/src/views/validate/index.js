import { defineRule } from 'vee-validate';

const required = defineRule('required', value => {
    if (!value || !value.length) {
        return 'Campo obrigatório!';
    }
    return true;
    });

const email = defineRule('email', value => {
    if (!value || !value.length) {
        return true;
    }
    
    if (!/[a-z-9._%+-]+@[a-z-9.-]+\.[a-z]{2,4}/.test(value)) {
        return 'O email não é valido!';
    }
    return true;
    });

const confirmed = defineRule('confirmed', (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true;
  }
  return 'As senhas devem ser iguais!';
});

const min = defineRule('minLength', (value, [limit]) => {
    if (!value || !value.length) {
      return true;
    }
    if (value.length < limit) {
      return `Deve conter no mínimo ${limit} caracteres.`;
    }
    return true;
  });

const dataInferior = defineRule("dataInferior", value => {                
    if (new Date(value) > new Date()) {
        return "Data deve ser inferior a data atual"
    }
    return true;  
});

export { required, email, confirmed, min, dataInferior };
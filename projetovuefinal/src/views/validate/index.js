
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
       
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
      return true;
    }
    return 'O email não é valido!';
    });

const nomeCompleto = defineRule('nomeDuplo', value => {
  if(/^[a-zA-ZÃ§Ã‡Ä±ÄŸÄžÄ°Ã¶Ã–ÅŸÅžÃ¼Ãœ]+(?:\s[a-zA-ZÃ§Ã‡Ä±ÄŸÄžÄ°Ã¶Ã–ÅŸÅžÃ¼Ãœ]+)+$/.test(value)) {
    return true;
  }
  return 'Digite o nome completo!'
})

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



export { required, email, confirmed, min, dataInferior, nomeCompleto};
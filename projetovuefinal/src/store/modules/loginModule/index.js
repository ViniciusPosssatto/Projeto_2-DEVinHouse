
export default {
    namespaced: true,
    state() {
        return {
            autenticado: false,
            listaUsers: [],
            //userLogin: {}
        }
    },

    mutations: {

        isAutenticado(state) {
            state.autenticado = localStorage.getItem('token') ? true : false;
        }
    },

    actions: {

        newUserLogin(context, userLogin) {
            context.state.listaUsers.push({userLogin});
            
            if(context.state.listaUsers.length > 0) {  // ao cadastrar um usuário na lista ele joga pro localStorage
                var lista = JSON.stringify(context.state.listaUsers);
                localStorage.setItem('listaUsers', lista);
            }
        },
        
        autenticar(context, login) {
            context.dispatch('getUsers');
            if(context.state.autenticado === false) {
                context.state.listaUsers.forEach(item => {
                    //validação de email e senha = true => segue login
                    if(login.email1 === item.userLogin.email && login.senha1 === item.userLogin.senha) {
                        
                        item.userLogin.autenticado = true;
                        const token = item.userLogin.id;
                        localStorage.setItem('token', token);
                        context.state.autenticado = true;
                        var lista = JSON.stringify(context.state.listaUsers);
                        localStorage.setItem('listaUsers', lista);
                        
                    } else {
                        console.log(item)
                        console.log('deu ruim na autenticaao');
                    }
                })
            } else {
                console.log('deu ruim no segundo else');
                
            }
        },
        
        logOut(context) {
            context.dispatch('getUsers');
            if(context.state.autenticado === true){
                context.state.listaUsers.forEach(item => {
                    item.userLogin.autenticado = false;
                    localStorage.removeItem('token');
                    context.state.autenticado = false;
                    var lista = JSON.stringify(context.state.listaUsers);
                    localStorage.setItem('listaUsers', lista);
                });
            } else {
                console.log('deu ruim no logout');
            }
        },

        getUsers(context) {
            try {
                let lista = localStorage.getItem('listaUsers')
                
                if(lista.length > 0) {
                    lista = JSON.parse(lista)
                    context.state.listaUsers = lista;
                } else {
                    return context.state.listaUsers = [];
                }
            }
            catch(err) {
                console.log('erro do catch '+ err)
            }
        },
        
    }
}

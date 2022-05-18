import { createStore } from 'vuex';


const setUserModule = {
    namespaced: true,
    state() {
        return {
            user: {},
            listaUsers: [],
            autenticado: false,
            erro: false
        }
    },
    
    actions: {

        newUser(context, user) {
        context.state.listaUsers.push({user});
        //console.log(this.listaUsers)
            if(context.state.listaUsers.length > 0){
                var lista = JSON.stringify(context.state.listaUsers);
                localStorage.setItem('listaUsers', lista);
                console.log(context.listaUsers)
            }
        },

        autenticar(context, login) {
            store.dispatch('setUserModule/getUsers');
            if(context.state.autenticado === false){
                context.state.listaUsers.forEach(item => {
                  //validação de email e senha = true => segue login
                    if(login.email === item.user.email) {
                        if(login.senha === item.user.senha){
                            item.user.autenticado = true;
                            const token = item.user.id;
                            localStorage.setItem('token', token);
                            context.state.autenticado = true;
                            var lista = JSON.stringify(context.state.listaUsers);
                            localStorage.setItem('listaUsers', lista);
                        }
                    } else {
                        console.log('deu ruim');
                    }
                })
            } else {
                console.log('deu ruim no segundo else');
                return context.state.erro = true;
            }
        },

        logOut(context) {
            store.dispatch('setUserModule/getUsers');
            if(context.state.autenticado === true){
                context.state.listaUsers.forEach(item => {
                    item.user.autenticado = false;
                    localStorage.removeItem('token');
                    context.state.autenticado = false;
                    var lista = JSON.stringify(context.state.listaUsers);
                    localStorage.setItem('listaUsers', lista);
                });
            } else {
                console.log('deu ruim');
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
        }
    }


}

const store = createStore({
    modules: {
        setUserModule
    }
});

export default store;





import { createStore } from 'vuex';


const setUserModule = {
    namespaced: true,
    state() {
        return {
            user: {},
            listaUsers: [],
            autenticado: false
        }
    },
    methods: {
        usuariosLista(state) {
            let lista = localStorage.getItem('listaUsers');
            lista.JSON.parse('lista');
            state.usuarios.push(lista);
            console.log(state.usuarios)
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
            if(context.state.autenticado === false){
                context.state.listaUsers.forEach(user => {
                    if(login.email === user.email) {
                        if(login.senha === user.senha){
                            //console.log(user.email)
                            user.autenticado = true;
                            context.state.autenticado = true;
                            //context.state.id = user.id;
                        }
                    } else {
                        console.log('deu ruim');
                    }
                    
                })

            } else {
                return context.state.erro = true;
            }
        },

        getUsers(context) {
            try {
                let lista = localStorage.getItem('listaUsers')

                if(lista.length > 0) {
                    lista = JSON.parse('lista')
                    context.state.usuarios.push(lista);
                } else {
                    return context.state.usuarios = [];
                }
            }
            catch(err) {
                console.log(err)
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





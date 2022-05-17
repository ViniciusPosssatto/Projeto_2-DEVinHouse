import { createStore } from 'vuex';


const setUserModule = {
    namespaced: true,
    state() {
        return {
            user: {},
            listaUsers: []
        }
    },
    actions: {

        newUser(context, user) {
        context.state.listaUsers.push({user});
        //console.log(this.listaUsers)
            if(context.state.listaUsers.length > 0){
                var lista = JSON.stringify(context.state.listaUsers);
                localStorage.setItem('listaUsers', lista);
            }
        },
        
    }
}

const autenticaUser = {
    namespaced: true,
    state() {
        return {
            usuarios: [],
            autenticado: false,
            //id: '',
            erro: false
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

        autenticar(context, login) {
            context.state.usuarios.forEach(item => {
                if(login.email === item.email) {
                    if(login.senha === item.senha){
                        //console.log(item.email)
                        return context.state.autenticado = true;
                        //context.state.id = item.id;
                    }
                } else {
                    return console.log('deu ruim');
                }
                
            })
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
        setUserModule,
        autenticaUser
    }
});

export default store;





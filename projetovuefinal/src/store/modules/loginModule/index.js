
import { usuarioLogado, autenticar, logOut, newUserLogin } from '@/store/modules/loginModule/actions.js'

export default {
    namespaced: true,
    state() {
        return {
            autenticado: false,
            usuario: '',
            email: '',
            listaUsers: []
        }
    },

    mutations: {
        // busca o token no localStorage
        isAutenticado(state) {
            state.autenticado = localStorage.getItem('token') ? true : false;
        },

        // busca a lista de usuarios admin no localStorage
        getUsers(state) {
            state.listaUsers = localStorage.getItem('listaUsers') ? JSON.parse(localStorage.getItem('listaUsers')) : [];
        },


    },
    
    actions: {
        
        usuarioLogado, 
        autenticar, 
        logOut, 
        newUserLogin
        
        
    }
}

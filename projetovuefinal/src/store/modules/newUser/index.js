import { excluir, getColaborador, editarColabs, somaColabs } from '@/store/modules/newUser/mutations.js'

export default {
    namespaced: true,
    state() {
        return {
            listaColabs: [],
            usuárioCadastrado: '',
            totalColabs: 0
        }
    },

    mutations: {

        excluir, 
        getColaborador, 
        editarColabs, 
        somaColabs
    
    },

    actions: {
        // cria um novo colaborador
        newColaborador(context, colaborador) { // colaborador é o objeto com todos os dados capturados no form

            context.commit('getColaborador')
            
            if(context.state.listaColabs.length > 0 && context.state.listaColabs !== null){
                for(var i = 0; i <  context.state.listaColabs.length; i++){

                    if(context.state.listaColabs[i].email === colaborador.email) {
                        return false;
                    }
                }
                context.state.listaColabs.push(colaborador);
                localStorage.setItem('listaColabs', JSON.stringify(context.state.listaColabs))
                return true;
                
            } else{
                context.state.listaColabs.push(colaborador);
                localStorage.setItem('listaColabs', JSON.stringify(context.state.listaColabs))
                return true;
            }
        },

    }
        
    
}
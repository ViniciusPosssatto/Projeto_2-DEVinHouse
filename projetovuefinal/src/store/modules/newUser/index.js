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

        somaColabs(state) {
            state.totalColabs = state.listaColabs.length;
        },
        
        editarColabs(state, colaborador){   // colaborador é o ID que foi passado por params na rota do router
            
            state.lista = JSON.parse(localStorage.getItem('listaColabs'));
            
             //console.log(colaborador)
             if(state.lista.length > 0 && state.lista !== null) {
                 for(var i = 0; i < state.lista.length; i++){
                     if(state.lista[i].id == colaborador.id) {
                         state.lista[i] = colaborador;
                     }
                 }
             } 
             localStorage.setItem('listaColabs', JSON.stringify(state.lista))
        },

        getColaborador(state) {

            state.listaColabs = localStorage.getItem('listaColabs') ? state.lista = JSON.parse(localStorage.getItem('listaColabs')) : []
        },

        excluir(state, id) {
            for(var i = 0; i < state.listaColabs.length; i++){
                if(state.listaColabs[i].id == id) {
                    state.listaColabs.splice(i, 1);
                }
            }
            localStorage.setItem('listaColabs', JSON.stringify(state.listaColabs))
        }


    },

    actions: {

        newColaborador(context, colaborador) {

            context.commit('getColaborador')
            console.log(context.state.listaColabs.length)
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
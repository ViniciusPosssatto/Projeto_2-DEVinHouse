export default {
    namespaced: true,
    state() {
        return {
            listaColabs: []
        }
    },

    mutations: {

    },

    actions: {

        newColaborador(context, colaborador) {
            try {
                let lista = JSON.parse(localStorage.getItem('listaColabs')) || []
                
                if(lista.length > 0) {
                    lista.push(colaborador);
                    localStorage.setItem('listaColabs', JSON.stringify(lista))
                    
                } else {
                    context.state.listaColabs.push(colaborador);
                    lista = JSON.stringify(context.state.listaColabs);
                    localStorage.setItem('listaColabs', lista);
                }
            }
            catch(err) {
                console.log('erro do catch '+ err)
            }
        },


        getColaborador(context) {
            try {
                let lista = localStorage.getItem('listaColabs') || []
                
                if(lista.length > 0) {
                    lista = JSON.parse(lista)
                    context.state.listaColabs = lista;
                } else {
                    return context.state.listaColabs = [];
                }
            }
            catch(err) {
                console.log('erro do catch '+ err)
            }
        },

        
    }
}
export default {
    namespaced: true,
    state() {
        return {
            listaLivros: []
        }
    },

    mutations: {

    },

    actions: {

        newItem(context, colaborador) {
            try {
                let lista = JSON.parse(localStorage.getItem('listaLivros')) || []
                
                if(lista.length > 0) {
                    lista.push(colaborador);
                    localStorage.setItem('listaLivros', JSON.stringify(lista))
                    
                } else {
                    context.state.listaLivros.push(colaborador);
                    lista = JSON.stringify(context.state.listaLivros);
                    localStorage.setItem('listaLivros', lista);
                }
            }
            catch(err) {
                console.log('erro do catch '+ err)
            }
        },


        getItem(context) {
            try {
                let lista = localStorage.getItem('listaLivros') || []
                
                if(lista.length > 0) {
                    lista = JSON.parse(lista)
                    context.state.listaLivros = lista;
                } else {
                    return context.state.listaLivros = [];
                }
            }
            catch(err) {
                console.log('erro do catch '+ err)
            }
        },

        
    }
}
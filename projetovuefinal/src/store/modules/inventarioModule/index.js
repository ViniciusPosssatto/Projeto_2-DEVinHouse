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

        getItem(context) {
            try {
                let lista = localStorage.getItem('listaLivros') || [];
                
                if(lista.length > 0) {
                    lista = JSON.parse(lista)
                    context.state.listaLivros = lista;
                    console.log('caiu no if, tem coisa na lista')
                } else {
                    console.log('caiu no else do get livros')
                    context.state.listaLivros = [];
                }
            }
            catch(err) {
                console.log('erro do catch '+ err)
            }
        },

        
    }
}
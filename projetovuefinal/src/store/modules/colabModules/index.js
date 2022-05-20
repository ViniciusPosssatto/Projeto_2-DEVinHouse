export default {
    namespaced: true,
    state() {
        return {
            listaColabs: [],
            totalColabs: ''
        }
    },

    mutations: {
        somaColabs(state) {
            state.totalColabs = state.listaColabs.length;
        }
    },

    actions: {

        getColaborador(context) {
            try {
                let lista = localStorage.getItem('listaColabs') || [];
                
                if(lista.length > 0) {
                    lista = JSON.parse(lista)
                    context.state.listaColabs = lista;
                    console.log('caiu no if, tem coisa na lista')
                } else {
                    console.log('caiu no else do getcolab')
                    context.state.listaColabs = [];
                }
            }
            catch(err) {
                console.log('erro do catch '+ err)
            }
        },

        getColabBusca() {
            // deverá fazer a busca na lista para achar baseado no que o usuario digitar na barra
        }
    }
}

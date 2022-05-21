export default {
    namespaced: true,
    state() {
        return {
            listaLivros: [],
            somaValor: '',
            totalLivros: ''
        }
    },

    mutations: {
        somaLivros(state) {
            state.totalLivros = state.listaLivros.length;
        },

        somaValores(state) {
            const soma = state.listaLivros.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
            state.somaValor = soma;
            //console.log(soma);
        },
    },
    
    actions: {
        
        getItem(context) {
            try {
                let lista = localStorage.getItem('listaLivros') || [];
                
                if(lista.length > 0) {
                    let li = JSON.parse(lista)
                    context.state.listaLivros = li;
                    //console.log(li)
                    //console.log('caiu no if, tem coisa na lista')
                } else {
                    console.log('caiu no else do get livros')
                    //context.state.listaLivros = [];
                }
            }
            catch(err) {
                console.log('erro do catch '+ err)
            }
        },

        getLivro() {
            // deverá fazer a busca na lista para achar baseado no que o usuario digitar na barra
        }

        
    }
}
export default {
    namespaced: true,
    state() {
        return {
            // listaLivros: [],
            // somaValor: '',
            // totalLivros: ''
        }
    },

    mutations: {
        // somaLivros(state) {
        //     state.totalLivros = state.listaLivros.length;
        // },

        // somaValores(state) {
        //     const soma = state.listaLivros.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
        //     state.somaValor = soma;
        // },

        // editarLivros(state, colaborador){   // colaborador é o ID que foi passado por params na rota do router
        //     if(state.listaLivros == null || state.listaLivros === 0) {
        //         state.listaLivros = JSON.parse(localStorage.getItem('listaLivros'));

        //         if(state.listaLivros.length > 0 && state.listaLivros !== null) {
        //             for(var i = 0; i < state.listaLivros.length; i++){
        //                 if(state.listaLivros[i].id == colaborador.id) {
        //                     state.listaLivros[i] = colaborador;
        //                 }
        //             }
        //         }
        //         localStorage.setItem('listaLivros', JSON.stringify(state.listaLivros))
        //     } 
        // },

        // getItem(state) {
          
        //     let lista = localStorage.getItem('listaLivros') || [];
            
        //     if(lista.length > 0) {
        //         let li = JSON.parse(lista)
        //         state.listaLivros = li;
        //     } else {
        //         console.log('caiu no else do get livros')
        //     }
        // },
    },
    
    actions: {
        

        
    }
}
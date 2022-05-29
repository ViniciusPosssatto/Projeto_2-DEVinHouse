
// apresenta o total de colabs no card de estatística
const somaColabs = (state) => {
    state.totalColabs = state.listaColabs.length;
}

// função para editar os dados dos colabs
const editarColabs = (state, colaborador) => {   // colaborador é o ID que foi passado por params na rota do router
    
    state.lista = JSON.parse(localStorage.getItem('listaColabs'));
    
     if(state.lista.length > 0 && state.lista !== null) {
         for(var i = 0; i < state.lista.length; i++){
             if(state.lista[i].id == colaborador.id) {
                 state.lista[i] = colaborador;
             }
         }
     } 
     localStorage.setItem('listaColabs', JSON.stringify(state.lista))
}

// busca a lista de colabs no localStorage
const getColaborador = (state) => {

    state.listaColabs = localStorage.getItem('listaColabs') ? state.lista = JSON.parse(localStorage.getItem('listaColabs')) : []
}

// função excluir através do id do colab
const excluir = (state, id) => {
    for(var i = 0; i < state.listaColabs.length; i++){
        if(state.listaColabs[i].id == id) {
            state.listaColabs.splice(i, 1);
        }
    }
    localStorage.setItem('listaColabs', JSON.stringify(state.listaColabs))
}

export { excluir, getColaborador, editarColabs, somaColabs };
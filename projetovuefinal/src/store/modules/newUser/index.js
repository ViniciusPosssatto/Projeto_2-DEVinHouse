export default {
    namespaced: true,
    state() {
        return {
            listaColabs: [],
            usuárioCadastrado: ''
        }
    },

    mutations: {
        
        editarColabs(context, colaborador){   // colaborador é o ID que foi passado por params na rota do router
            
            context.lista = JSON.parse(localStorage.getItem('listaColabs'));
            
             //console.log(colaborador)
             if(context.lista.length > 0 && context.lista !== null) {
                 for(var i = 0; i < context.lista.length; i++){
                     if(context.lista[i].id == colaborador.id) {
                         context.lista[i] = colaborador;
                     }
                 }
             } 
             localStorage.setItem('listaColabs', JSON.stringify(context.lista))
        }
    },

    actions: {

        newColaborador(context, colaborador) {

                let lista = JSON.parse(localStorage.getItem('listaColabs')) || []
                
                if(lista.length > 0 && lista !== null) {
                    lista.push(colaborador);
                    localStorage.setItem('listaColabs', JSON.stringify(lista))
                
                } else {
                    console.log('caiu no else do if')
                    context.state.listaColabs.push(colaborador);
                    lista = JSON.stringify(context.state.listaColabs);
                    localStorage.setItem('listaColabs', lista);
                }
           
        },
        
    }
        
    
}
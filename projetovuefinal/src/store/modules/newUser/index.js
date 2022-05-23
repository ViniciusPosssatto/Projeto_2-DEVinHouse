export default {
    namespaced: true,
    state() {
        return {
            listaColabs: []
        }
    },

    mutations: {
        
        editarColabs(context, colaborador){
            
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
        
            
        
        // getColaborador(context) {
        //     try {
        //         let lista = localStorage.getItem('listaColabs') || []
                
        //         if(lista.length > 0) {
        //             lista = JSON.parse(lista)
        //             context.state.listaColabs = lista;
        //         } else {
        //             return context.state.listaColabs = [];
        //         }
        //     }
        //     catch(err) {
        //         console.log('erro do catch '+ err)
        //     }
        // },
    }
        
    
}
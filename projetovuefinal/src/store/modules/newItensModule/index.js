import { editarLivro, excluir, somaLivros, getItem, getEmprestados, salvarEmprestimo, newItem, somaValores } from '@/store/modules/newItensModule/mutations.js'

export default {
    namespaced: true,
    state() {
        return {
            listaLivros: [],
            somaLivros: '',
            totalLivros: '',
            totalEmprestimos: '',
            
        }
    },

    mutations: {
        
        editarLivro, 
        excluir, 
        somaLivros, 
        getItem, 
        getEmprestados, 
        salvarEmprestimo, 
        newItem, 
        somaValores

    },
    
    actions: {
        
        


        
    }
}
export default {
    namespaced: true,
    state() {
        return {
            listaLivros: [],
            somaLivros: '',
            totalLivros: '',
            totalEmprestimos: ''
        }
    },

    mutations: {
        
        newItem(state, colaborador) {
            
            state.listaLivros = localStorage.getItem('listaLivros') ? JSON.parse(localStorage.getItem('listaLivros')) : [];
            if(state.listaLivros.length > 0) {
                state.listaLivros.push(colaborador);
                localStorage.setItem('listaLivros', JSON.stringify(state.listaLivros))
                
                console.log(state.listaLivros)
            } else {
                state.listaLivros.push(colaborador);
                localStorage.setItem('listaLivros', JSON.stringify(state.listaLivros))
            }
            
        },

        salvarEmprestimo(state, livroEdit) {
            for(var i = 0; i < state.listaLivros.length; i++){
                if(state.listaLivros[i].codigo == livroEdit.codigo) {
                    state.listaLivros[i] = livroEdit;
                }
            }
            localStorage.setItem('listaLivros', JSON.stringify(state.listaLivros))
        },

        getEmprestados(state) {  // chamar essa no mounted da aba inventário para calcular quantos livros estao emprestados e la fazer uma computada para o totalemprestimos pra atualizar o card
            let total = 0;
            state.listaLivros.forEach(element => {
                if(element.status) {
                    total++
                    state.totalEmprestimos = total;
                }
            });
        },
        
        getItem(state) {
        
            state.listaLivros = localStorage.getItem('listaLivros') ? JSON.parse(localStorage.getItem('listaLivros')) : [];
 
        },

        //estatística para o inventario - total livros
        somaLivros(state) {
            state.totalLivros = state.listaLivros.length;
        },

        //estatística para o inventario - soma dos valores
        somaValores(state) {
            const soma = state.listaLivros.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
            state.somaValor = soma;
        },

        //função para exclusão de itens
        excluir(state, codigo) {
            for(var i = 0; i < state.listaLivros.length; i++){
                if(state.listaLivros[i].codigo == codigo) {
                    state.listaLivros.splice(i, 1);
                }
            }
            localStorage.setItem('listaLivros', JSON.stringify(state.listaLivros))
        },

        editarLivro(state, livro){   // livro é o codigo que foi passado por params na rota do router

            if(state.listaLivros == null || state.listaLivros === 0) {
                state.listaLivros = JSON.parse(localStorage.getItem('listaLivros'));

            } else {
                console.log(state.listaLivros)
                if(state.listaLivros.length > 0 && state.listaLivros !== null) {
                    for(var i = 0; i < state.listaLivros.length; i++){
                        if(state.listaLivros[i].codigo == livro.codigo) {
                            state.listaLivros[i] = livro;
                        }
                    }
                }
            }
            localStorage.setItem('listaLivros', JSON.stringify(state.listaLivros))
        },

    },
    
    actions: {
        
        


        
    }
}
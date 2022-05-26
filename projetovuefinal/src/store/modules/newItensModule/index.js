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
            
            state.listaLivros = JSON.parse(localStorage.getItem('listaLivros')) || []
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
        
            let lista = localStorage.getItem('listaLivros') || []
            
            if(lista.length > 0) {
                lista = JSON.parse(lista)
                state.listaLivros = lista;
            } else {
                state.listaLivros = [];
            }
           
        },

        somaLivros(state) {
            state.totalLivros = state.listaLivros.length;
        },

        somaValores(state) {
            const soma = state.listaLivros.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
            state.somaValor = soma;
            //console.log(soma);
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

        getLivro() {
            // deverá fazer a busca na lista para achar baseado no que o usuario digitar na barra
        }
    },
    
    actions: {
        
        


        
    }
}
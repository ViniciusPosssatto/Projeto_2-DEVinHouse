
// cadastrar novo livro
const newItem = (state, colaborador) => {
            
    state.listaLivros = localStorage.getItem('listaLivros') ? JSON.parse(localStorage.getItem('listaLivros')) : [];
    if(state.listaLivros.length > 0) {
        state.listaLivros.push(colaborador);
        localStorage.setItem('listaLivros', JSON.stringify(state.listaLivros))
    } else {
        state.listaLivros.push(colaborador);
        localStorage.setItem('listaLivros', JSON.stringify(state.listaLivros))
    }
    
}

// alterar o status do livro para o nome de quem pegou emprestado
const salvarEmprestimo = (state, livroEdit) => {
    for(var i = 0; i < state.listaLivros.length; i++){
        if(state.listaLivros[i].codigo == livroEdit.codigo) {
            state.listaLivros[i] = livroEdit;
        }
    }
    localStorage.setItem('listaLivros', JSON.stringify(state.listaLivros))
}

//somar os livros que estão emprestados
const getEmprestados = (state) => {  
    let total = 0;
    state.listaLivros.forEach(element => {
        if(element.status) {
            total++
            state.totalEmprestimos = total;
        }
    });
}

// buscar a lista no localStorage
const getItem = (state) => {

    state.listaLivros = localStorage.getItem('listaLivros') ? JSON.parse(localStorage.getItem('listaLivros')) : [];

}

//estatística para o inventario - total livros
const somaLivros  = (state) => {
    state.totalLivros = state.listaLivros.length;
}

//estatística para o inventario - soma dos valores
const somaValores = (state) => {
    const soma = state.listaLivros.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
    state.somaValor = soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
}

//função para exclusão de itens
const excluir  = (state, codigo) => {
    for(var i = 0; i < state.listaLivros.length; i++){
        if(state.listaLivros[i].codigo == codigo) {
            state.listaLivros.splice(i, 1);
        }
    }
    localStorage.setItem('listaLivros', JSON.stringify(state.listaLivros))
}

//função para editar os dados dos livros
const editarLivro  = (state, livro) => {   // livro é o codigo que foi passado por params na rota do router

    if(state.listaLivros == null || state.listaLivros === 0) {
        state.listaLivros = JSON.parse(localStorage.getItem('listaLivros'));

    } else {
        if(state.listaLivros.length > 0 && state.listaLivros !== null) {
            for(var i = 0; i < state.listaLivros.length; i++){
                if(state.listaLivros[i].codigo == livro.codigo) {
                    state.listaLivros[i] = livro;
                }
            }
        }
    }
    localStorage.setItem('listaLivros', JSON.stringify(state.listaLivros))
}

export { editarLivro, excluir, somaLivros, getItem, getEmprestados, salvarEmprestimo, newItem, somaValores }
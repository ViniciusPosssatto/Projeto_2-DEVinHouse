
// verificar nome e email para a navbar
const usuarioLogado = (context) => {
    let token = localStorage.getItem('token');
    context.commit('getUsers');
    context.state.listaUsers.forEach(item => {
        if(item.id == token) {
            context.state.usuario = item.nome;
            context.state.email = item.email;
        }
    })
}

// autenticação para login
const autenticar = (context, login) => {
    context.commit('getUsers');
    if(context.state.autenticado === false) {
        context.state.listaUsers.forEach(item => {
            //validação de email e senha = true => segue login
            if(login.email1 === item.email && login.senha1 === item.senha) {
                
                item.autenticado = true;
                const token = item.id;
                localStorage.setItem('token', token);
                context.state.autenticado = true;
                context.state.usuario = item.nome
                context.state.email = item.email
                localStorage.setItem('listaUsers', JSON.stringify(context.state.listaUsers))
            } 
        })
    } else {
        console.log('autenticado = true');
        
    }
}

// logout do site
const logOut = (context) => {
    context.commit('getUsers');
    if(context.state.autenticado === true){
        context.state.listaUsers.forEach(item => {
            item.autenticado = false;
            localStorage.removeItem('token');
            context.state.autenticado = false;
            localStorage.setItem('listaUsers', JSON.stringify(context.state.listaUsers))
        });
    } else {
        console.log('deu ruim no logout');
    }
}

// add novo usuario admin
const newUserLogin = (context, userLogin) => {
    context.commit('getUsers');
    if(context.state.listaUsers.length > 0 && context.state.listaUsers !== null){
        for(var i = 0; i <  context.state.listaUsers.length; i++){

            if(context.state.listaUsers[i].email === userLogin.email) {
                return false;
            }
        }
        context.state.listaUsers.push(userLogin);
        localStorage.setItem('listaUsers', JSON.stringify(context.state.listaUsers))
        return true;
        
    } else{
        context.state.listaUsers.push(userLogin);
        localStorage.setItem('listaUsers', JSON.stringify(context.state.listaUsers))
        return true;
    }
}

export { usuarioLogado, autenticar, logOut, newUserLogin };
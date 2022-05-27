
export default {
    namespaced: true,
    state() {
        return {
            autenticado: false,
            usuario: '',
            email: '',
            listaUsers: []
        }
    },

    mutations: {

        isAutenticado(state) {
            state.autenticado = localStorage.getItem('token') ? true : false;
        },

    },
    
    actions: {
        
        usuarioLogado(context) {
            let token = localStorage.getItem('token');
            context.dispatch('getUsers');
            context.state.listaUsers.forEach(item => {
                if(item.id == token) {
                    context.state.usuario = item.nome;
                    context.state.email = item.email;
                }
            })
        },

        autenticar(context, login) {
            context.dispatch('getUsers');
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
                        var lista = JSON.stringify(context.state.listaUsers);
                        localStorage.setItem('listaUsers', lista);
                    } 
                })
            } else {
                console.log('deu ruim no segundo else');
                
            }
        },
        
        logOut(context) {
            context.dispatch('getUsers');
            if(context.state.autenticado === true){
                context.state.listaUsers.forEach(item => {
                    item.autenticado = false;
                    localStorage.removeItem('token');
                    context.state.autenticado = false;
                    var lista = JSON.stringify(context.state.listaUsers);
                    localStorage.setItem('listaUsers', lista);
                });
            } else {
                console.log('deu ruim no logout');
            }
        },

        getUsers(context) {
            context.state.listaUsers = localStorage.getItem('listaUsers') ? JSON.parse(localStorage.getItem('listaUsers')) : [];
        },

        newUserLogin(context, userLogin) {
            context.state.listaUsers = localStorage.getItem('listaUsers') ? JSON.parse(localStorage.getItem('listaUsers')) : [];
            console.log(context.state.listaUsers.length)
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
        },
        
    }
}

import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/dashboard/HomeView.vue'

import PageEmprestimo from '@/views/dashboard/PageEmprestimo.vue'
import PageInventario from '@/views/dashboard/PageInventario.vue'
import PageListagem from '@/views/dashboard/PageListagem.vue'
import PageNewItens from '@/views/dashboard/PageNewItens.vue'

import NewUser from '@/views/userview/cadastro/NewUser.vue'
import LoginUser from '@/views/userview/login/LoginUser.vue'

// criação das rotas
const routes = [
    {
        path: '/',
        alias: ['/home', '/main'], 
        component: HomeView,
        meta: { auth: true }
    },
    {
        path: '/emprestimo',
        component: PageEmprestimo,
        meta: { auth: true }
    },
    {
        path: '/inventario',
        component: PageInventario,
        meta: { auth: true }
    },
    {
        path: '/listagem',
        component: PageListagem,
        meta: { auth: true }
    },
    {
        path: '/newitens',
        component: PageNewItens,
        meta: { auth: true }
    },
// path para levar um codigo de livro para edição
    {
        path: '/newitens/:codigo',
        component: PageNewItens,
        meta: { auth: true }
    },
    {
        path: '/newuser',
        component: NewUser,
        meta: { auth: true }
    },
// path para levar uma ID para edição
    {
        path: '/newuser/:id',
        component: NewUser,
        meta: { auth: true }
    },
    {
        path: '/login',
        alias: ['/auth'],
        component: LoginUser,
        beforeEnter: (to) => {
            const auth = localStorage.getItem('token');
            if (auth) {
                // eslint-disable-next-line
                return to = "/"
            }
            return true;
        } 
        
    },
]


const router = createRouter({
    routes,
    history: createWebHashHistory()
});


// guard para utilizar nas rotas e deixar o código mais limpo
router.beforeEach((to, from, next) => {
    const auth = localStorage.getItem('token');
    if (to.meta.auth === !auth) {
        next("/login")
    }else{
        next()
    }
    
})


export default router;
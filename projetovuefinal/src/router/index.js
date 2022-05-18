import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/components/HomeView.vue'

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
        component: HomeView
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
    {
        path: '/newuser',
        alias: ['/registro', '/cadastro'],
        component: NewUser
    },
    {
        path: '/login',
        alias: ['/auth'],
        component: LoginUser
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
import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/components/HomeView.vue'

import PageEmprestimo from '@/views/dashboard/PageEmprestimo.vue'
import PageInventario from '@/views/dashboard/PageInventario.vue'
import PageListagem from '@/views/dashboard/PageListagem.vue'
import PageNewItens from '@/views/dashboard/PageNewItens.vue'

import NewUser from '@/views/userview/cadastro/NewUser.vue'
import LoginUser from '@/views/userview/login/LoginUser.vue'

const routes = [
    {
        path: '/',
        alias: ['/home', '/main'], 
        component: HomeView
    },
    {
        path: '/emprestimo',
        component: PageEmprestimo
    },
    {
        path: '/inventario',
        component: PageInventario
    },
    {
        path: '/listagem',
        component: PageListagem
    },
    {
        path: '/newitens',
        component: PageNewItens
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

export default router;
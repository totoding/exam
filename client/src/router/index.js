import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('../views/Admin.vue'),
        redirect:"/admin/qesBank",
        children: [
            {
            path: 'qesBank',
            name: 'qesBank',
            component: () => import('../views/QesBank.vue'),
        },
        {
            path: 'exam',
            name: 'exam',
            component: () => import('../views/ExamList.vue'),
        },
    ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

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
        path: '/sign',
        name: 'Sign',
        component: () => import('../views/Sign.vue'),
    },
    {
        path: '/signExam',
        name: 'signExam',
        component: () => import('../views/SignExam.vue'),
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('../views/Admin.vue'),
        redirect: "/admin/exam",
        children: [
            {
                path: 'qesBank',
                name: 'qesBank',
                component: () => import('../views/QesBank.vue'),
            },
            {
                path: 'QesBankItem/:id',
                name: 'QesBankItem',
                component: () => import('../views/QesBankItem.vue'),
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
router.beforeEach((to, from, next) => {
    if (to.path === "/") {
        if (localStorage.getItem("token")) {//说明用户已经登录了
            next()
        } else {
            next("/sign") //如果用户没有登录直接跳转到登录界面进行用户登录
        }
    } else {
        next()
    }
})
export default router

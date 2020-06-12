import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/checkDomain',
        name: 'CheckDomain',
        component: () =>
            import ('../views/CheckDomain.vue')
    },
    {
        path: '/consultingDomains',
        name: 'ConsultDomains',
        component: () =>
            import ('../views/ConsultDomains.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
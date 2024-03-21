import { createRouter, createWebHistory } from 'vue-router';
import Error404 from '../views/error/Error404.vue';

import Auth from "@/router/auth/auth.js";
import Dashboard from "@/router/system/dashboard.js";
import { useAuth } from "@/composables/auth.js";
import Users from "@/router/system/users.js";
import FiscalMovements from "@/router/system/Movements.js"

const auth = useAuth();

const routes = [
    ...Auth,
    ...Dashboard,
    ...Users,
    ...FiscalMovements,
    {
        path: '/:pathMatch(.*)*',
        name: 'Error404',
        component: Error404,
    },
];

export default function () {
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes,
    });
    router.beforeEach((to, from) => {
        let isAuth = auth !== null

        if (to.meta.requiresAuth || typeof to.meta.requiresAuth === "undefined") {
            if (!isAuth) {
                if (from.name !== 'login') {
                    return router.replace({ name: 'login' })
                } else {
                    return true
                }
            } else {
                if (to.meta.userType === 'admin' && auth.user.type !== 'admin') {
                    return router.replace('/404')
                } else {
                    return true
                }
            }

        } else if (to.meta.requiresGuest && isAuth) {
            if (from.name !== 'dashboard') {
                return router.replace({ name: 'dashboard' })
            } else {
                return true
            }
        }
    })


    return router;
}
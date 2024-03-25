import Dashboard from "@/views/system/Dashboard.vue";

export default [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    { 
        path: '/',
        redirect: { name: 'dashboard' }
    }
]
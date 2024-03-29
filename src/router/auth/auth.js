import Login from "@/views/auth/Login.vue";
import ResetPassword from "@/views/auth/ResetPassword.vue";
import emailVerification from "@/views/auth/emailVerificarion.vue";

export default [
    {
        path: '/iniciar-sesion',
        name: 'login',
        component: Login,
        meta: {requiresAuth: false, requiresGuest: true},
    },
    {
        path: '/recuperar-clave/:token',
        name: 'resetPassword',
        component: ResetPassword,
        props: route => ({ forgotEmail: route.query['email'] }),
        meta: {requiresAuth: false, requiresGuest: true}
    },
    {
        path: '/verificacion/',
        component: emailVerification,
        name: 'email-verification',
        props: route => ({ emailVerificationSign: route.query['email-verification-sign'] }),
        meta: {requiresAuth: false, requiresGuest: true}
    },
];
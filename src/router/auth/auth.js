import Login from "@/views/auth/Login.vue";
import ForgotPassword from "@/views/auth/ForgotPassword.vue";
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
        path: '/recuperar-clave',
        name: 'forgotPassword',
        component: ForgotPassword,
        meta: {requiresAuth: false, requiresGuest: true}
    },
    {
        path: '/recuperar-clave/:token',
        name: 'resetPassword',
        component: ResetPassword,
        props: route => ({ forgotEmail: route.query['email'] }),
        meta: {requiresAuth: false, requiresGuest: false}
    },
    {
        path: '/verificacion/',
        component: emailVerification,
        name: 'email-verification',
        props: route => ({ emailVerificationSign: route.query['email-verification-sign'] }),
        meta: {requiresAuth: false, requiresGuest: false}
    },
];
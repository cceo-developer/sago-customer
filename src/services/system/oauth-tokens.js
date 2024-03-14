import {useService} from "@/composables/service.js";

const service = useService()
export function createOauthToken(email, password) {
    return service.post('/oauth-tokens', {
        grant_type: 'password',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
        email: email,
        password: password,
    })
}
export function register(user) {
    return service.post('/register', {
        grant_type: 'password',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
        name: user.name,
        email: user.email,
        password: user.password,
    })
}
export function changepassword(email) {
    return service.post('/change-password', {
        grant_type: 'password',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
        email: email
    })
}

export function getQrCode(email, type) {
    return service.get('/two-factor-qr-code',{
        grant_type: 'password',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
        email: email,
        type: type,
    });
}

export function sendCode2FA(data) {
    return service.post('verificar-codigo-2fa',{
        grant_type: 'password',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
        code: data.code,
        email: data.email,
        password: data.password,
    })
}
export function disable2FA(data) {
    return service.delete('users-disable2FA',{
        code: data.code,
    })
}

export function enable2FA() {
    return service.post('users-enable2FA')
}

export function status2FA() {
    return service.get('users-2FA-status')
}

export function reset2FAuser(id) {
    return service.post('/reset-2FA/' + id, {
        grant_type: 'password',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
    })
}
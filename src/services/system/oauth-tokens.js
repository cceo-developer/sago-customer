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
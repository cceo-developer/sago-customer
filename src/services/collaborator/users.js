import { useService } from "@/composables/service.js";

const service = useService()

export function getUsers(params) {
    return service.get('/users', {
        first: params.first,
        rows: params.rows,
        sortField: params.sortField,
        sortOrder: params.sortOrder,
        filters: JSON.stringify(params.filters)
    }
    );
}
export function getUser(id) {
    return service.get('/users/' + id)
}

export function createUser(attributes) {
    return service.post('/users', attributes)
}

export function updateUser(attributes) {
    return service.put('/users/' + attributes.id, attributes)
}
export function deleteUser(id) {
    return service.delete('/users/' + id)
}
export function verifyemail(url) {
    return service.post(url)
}
export function changeforgotpassword(data) {
    return service.post('/reset-forgot-password/', data)
}

export function refreshToken(authStore) {
    return service.get('users.refresh')
            .then((response) => {
                authStore.dispatch('auth/login', response.data);
                //resolve(response.data);
            })
            .catch(() => {
                //reject(error);
            });

}
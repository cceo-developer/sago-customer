import { useService } from "@/composables/service.js";
import {createFormData} from "@myshell/alvue/src/helpers/index.js";

const service = useService()

export function getUsers(params) {
    return service.get('/users', {
        first: params.first,
        columns: params.rows,
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

export function updatePasswordUser(id, attributes) {
    return service.put('/users-password/' + id, attributes);
}

export function updateProfileImageUser(id, file) {
    const formData = createFormData(file, 'POST');
    return service.post('/users-image/' + id, formData);
}

export function closeSessionsUser(id, file) {
    const formData = createFormData(file, 'POST');
    return service.post('/users-sessions/' + id, formData);
}

export function getToken(id) {
    return service.get('/customers/' + id + '/tokens');
}
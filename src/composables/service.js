import {useAxios} from "@/composables/axios.js";

const axios = useAxios();

export function useService() {
    return {
        post: (url, data, config = {}) => {
            return new Promise((resolve, reject) => {
                axios({
                    method: 'post',
                    url,
                    data,
                    ...config
                }).then((response) => {
                    resolve(response)
                },).catch(error => {
                    reject(error.response.data)
                })
            })
        },
        put: (url, data, config = {}) => {
            return new Promise((resolve, reject) => {
                axios({
                    method: 'post',
                    url,
                    data: {
                        _method: 'put',
                        ...data
                    },
                    ...config
                }).then((response) => {
                    resolve(response)
                },).catch(error => {
                    reject(error.response.data)
                })
            })
        },
        get: (url, params = {}, config = {}) => {
            return new Promise((resolve, reject) => {
                axios({
                    method: 'get',
                    url,
                    params,
                    ...config
                }).then((response) => {
                    resolve(response.data)
                },).catch(error => {
                    reject(error.response.data)
                })
            })
        },
        delete: (url, params = {}, config = {}) => {
            return new Promise((resolve, reject) => {
                axios({
                    method: 'delete',
                    url,
                    params,
                    ...config
                }).then((response) => {
                    resolve(response.data)
                },).catch(error => {
                    reject(error.response.data)
                })
            })
        }
    }
}
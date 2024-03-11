import axios from 'axios';
import localforage from 'localforage';
import {refreshToken} from "@/services/collaborator/users";

const sessionUser = localStorage.getItem('user');
const refreshIntervalTime = 1000 * 60 * 30;

export default {
    namespaced: true,
    state: {
        user: sessionUser ? JSON.parse(sessionUser) : null, refreshInterval: null,
    },
    getters: {
        moduleSize(state) {
            return state.user.role_module_size;
        },
    },
    actions: {
        login({state, dispatch}, {user, access_token}) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            if (access_token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
                localforage.setItem('access_token', access_token);
                dispatch('refresh');
            }
        },
        change_password({state, dispatch}, user) {
            return new Promise(function(resolve)  {
                state.user = user;
                localStorage.setItem('user', JSON.stringify(user));
                dispatch('refresh');
                resolve(user)
            })
        },
		changeImage({commit}, image) {
			commit("setImage", image);
		},
        logout({state, ...store}) {
            state.user = null;
            store.rootState.layout.dropdownMenu = false
            localStorage.clear();
            localforage.clear();
            delete axios.defaults.headers.common['Authorization'];
            clearInterval(state.refreshInterval);
            state.refreshInterval = null;
        },
        refresh({state, ...store}) {
            if (state.refreshInterval) clearInterval(state.refreshInterval);

            state.refreshInterval = setInterval(() => {
                refreshToken(store).then(({access_token}) => {
                    localforage.setItem('access_token', access_token);
                });
            }, refreshIntervalTime);
        },
    },
	mutations: {
		setImage(state, data) {
			Object.assign(state.user, {image: data})
			localStorage.setItem('user', JSON.stringify(state.user));
		},
	}
};
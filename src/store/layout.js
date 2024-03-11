import AuthLayout from '@/layouts/AuthLayout.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import ErrorLayout from '@/layouts/ErrorLayout.vue';
import {shallowRef} from "vue";

const authLayout = shallowRef(AuthLayout);
const appLayout = shallowRef(AppLayout);
const errorLayout = shallowRef(ErrorLayout);

export default {
    namespaced: true,
    modules: {},
    state: {
        current: authLayout,
    },
    actions: {
        setAuthLayout(store) {
            store.state.current = authLayout;
        },
        setAppLayout(store) {
            store.state.current = appLayout;
        },
        setErrorLayout(store) {
            store.state.current = errorLayout;
        },
    },
};
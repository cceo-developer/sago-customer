import {useStore} from 'vuex';

const $can = (permissionName) => {
    const store = useStore();
    return store.state.auth.user.all_permissions.indexOf(permissionName) !== -1;
};

export function useCan() {
    const store = useStore();
    return (permissionName) => {
        return (
            store.state.auth.user.all_permissions.indexOf(permissionName) !== -1
        );
    };
}

export default $can;
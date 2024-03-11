export function useAuth() {
    let auth;
    try {
        const localStorageAuth = JSON.parse(atob(localStorage.auth));
        if(!!localStorage.auth && typeof localStorageAuth.access_token !== "undefined") {
            return localStorageAuth
        }
    } catch (e) {
        localStorage.clear();
        auth = null;
    }

    return auth
}
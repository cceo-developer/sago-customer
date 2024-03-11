export default function asset(path) {
    return import.meta.env.VITE_API_HOST + '/storage/' + path;
}
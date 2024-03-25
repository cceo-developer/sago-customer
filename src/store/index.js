import {createStore} from 'vuex';
import layout from "@/store/layout.js";
import auth from "@/store/auth.js";

export default createStore({
    modules: {
        auth,
        layout,
    }
});
import axios from "axios";
export default class LarabugJsClient {
    constructor() {
        window.addEventListener('error', e => {
            this.send(e);
        });
    }

    send(e) {
        return new Promise(function (resolve, reject) {

            let stack = e.error.stack;
            let exception = e.error.toString();

            if (stack) {
                exception += '\n' + stack;
            }

            let data = {
                message: e.message,
                exception: exception,
                file: e.filename,
                url: window.location.origin + window.location.pathname,
                line: e.lineno,
                column: e.colno,
                error: e.message,
                stack: e.error.stack,
            };

            axios.post(import.meta.env.VITE_API_BASE_URL + '/api/larabug/javascript-report', data).then((response) => {
                resolve(response)
            }).catch(error => {
                reject({
                    status: this.status,
                    statusText: error.statusText
                })
            })
        });
    }
}
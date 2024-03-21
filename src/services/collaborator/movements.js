import { useService } from "@/composables/service.js";

const service = useService()

export function getMovements(params) {
    return service.get('/movements', {
            first: params.first,
            rows: params.rows,
            sortField: params.sortField,
            sortOrder: params.sortOrder,
            filters: JSON.stringify(params.filters)
        }
    );
}

export function getTransactions(params) {
    return service.get('/transactions', {
            first: params.first,
            rows: params.rows,
            sortField: params.sortField,
            sortOrder: params.sortOrder,
            filters: JSON.stringify(params.filters)
        }
    );
}

export function createCredential(id) {
    return service.post('/customers/' + id + '/credentials');
}
import { readonly } from 'vue';
import { FilterMatchMode } from 'primevue/api';

const columns = [
    {
        field: 'id',
        header: 'ID',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: false,
    },
    {
        field: 'name',
        header: 'Cliente',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: false
    },
    {
        field: 'name_organization',
        header: 'Organización',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: true
    },
    {
        field: 'cover_organization',
        header: 'Institución',
        filter: { value: null, matchMode: FilterMatchMode.IN },
        default: true
    },
    {
        field: 'id_transaction',
        header: 'Id de Transacción',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: true
    },
    {
        field: 'description',
        header: 'Descripción',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: true
    },
    {
        field: 'amount',
        header: 'Monto',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: true
    },
    {
        field: 'reference',
        header: 'Referencia',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: true
    },
    {
        field: 'date',
        header: 'Fecha',
        filter: { value: null, matchMode: FilterMatchMode.EQUALS },
        default: true
    },
];
const filters = readonly(
    Object.fromEntries(
        columns.filter((c) => c.filter).map((c) => [c.field, c.filter])
    )
);
const defaultColumns = readonly(columns.filter((c) => c.default));

export { filters, defaultColumns };
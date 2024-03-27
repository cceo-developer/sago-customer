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
        default: false,
    },
    {
        field: 'name_organization',
        header: 'Nombre de la Organización',
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
        field: 'balance',
        header: 'Balance',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
        default: true
    },
    {
        field: 'account_type',
        header: 'Tipo de cuenta',
        filter: { value: null, matchMode: FilterMatchMode.CONTAINS },
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
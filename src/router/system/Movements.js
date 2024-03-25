import Fiscal from "@/views/system/Movements/FiscalMovements.vue";
import Bank from "@/views/system/Movements/BankMovements.vue";
import Accounts from "@/views/system/Movements/Accounts.vue";
export default [
    {
        path: '/movimientos/fiscales',
        name: 'fiscal',
        component: Fiscal,
    },
    {
        path: '/movimientos/bancarios',
        name: 'bank',
        component: Bank,
    },
    {
        path: '/cuentas',
        name: 'accounts',
        component: Accounts,
    },

]
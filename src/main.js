import { createApp } from 'vue'

import App from './App.vue';

import './css/style.css';
import PrimeVue from 'primevue/config';
import Tailwind from "primevue/passthrough/tailwind";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';
import Calendar from 'primevue/calendar';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import FileUpload from 'primevue/fileupload';
import ProgressSpinner from 'primevue/progressspinner';
import MultiSelect from 'primevue/multiselect';
import SelectButton from 'primevue/selectbutton';
import Password from 'primevue/password';
import Paginator from 'primevue/paginator';

// theme
import 'primevue/resources/themes/lara-light-blue/theme.css';

import store from '@/store';
import alvue from '@myshell/alvue';

import '@/css/style.css';
import generateRouter from '@/router';
import LarabugJsClient from "@/const/larabug.js";
import primeVueOptions from "@/const/primeVueOptions.js";
import { usePassThrough } from "primevue/passthrough";
import PassThrough from "@/pass_through/index.js";
import Tooltip from "primevue/tooltip";

const CustomTailwind = usePassThrough(
    Tailwind,
    PassThrough,
    {
        merge: true,
        useMergeProps: true,
    }
)

new LarabugJsClient();
const app = createApp(App);
app.use(store);
app.use(generateRouter(store));
app.use(PrimeVue, {...primeVueOptions, styled: false, pt: CustomTailwind });
app.use(alvue);
app.use(ConfirmationService);
app.use(ToastService);
app.directive('tooltip', Tooltip);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('Dialog', Dialog);
app.component('Toast', Toast);
app.component('Calendar', Calendar);
app.component('ConfirmDialog', ConfirmDialog);
app.component('FileUpload', FileUpload);
app.component('ProgressSpinner', ProgressSpinner);
app.component('MultiSelect', MultiSelect);
app.component('SelectButton', SelectButton);
app.component('Password', Password);
app.component('Paginator', Paginator);

app.mount('#app');

<template>
	<div>
		<div class="flex justify-end">
			<div class="flex space-x-4">
				<MultiSelect
					v-model="selectedColumns"
					:options="newColumns"
					optionLabel="header" placeholder="Columnas"
					class="x"
					:maxSelectedLabels="1" display="chip" />
				<button
					class="px-3 py-1 rounded-md bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-100 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
					@click="restoreFilters">
					<div class="flex gap-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
						</svg>
						<div class="mt-0.5">Restablecer filtros</div>
					</div>
				</button>
			</div>
		</div>
		<div class="mt-5 bg-white p-2 border rounded-xl">
			<DataTable
				ref="dataTable" v-model:filters="lazyParams.filters" v-model:sort-field="lazyParams.sortField" scrollable
				scrollHeight="65vh" :value="items" :lazy="true" :paginator="true" class="p-datatable-sm" resizableColumns
				columnResizeMode="fit" stripedRows :totalRecords="totalRecords" :rows="lazyParams.rows" dataKey="id"
				:loading="loading" responsiveLayout="scroll" filterDisplay="row" stateStorage="session" :stateKey="stateKey"
				paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
				:rowsPerPageOptions="[20, 50, 100]"
				currentPageReportTemplate="Mostrando del {first} al {last} de {totalRecords} elementos" @page="onUpdate"
				@sort="onUpdate" @filter="onUpdate">
				<template #empty>Sin resultados</template>
				<template #loading>Cargando...</template>
				<column
					v-for="column in selectedColumns" :key="column.field" :field="column.field" :header="column.header"
					:showFilterMenu="false" sortable
					:style="column.filter.matchMode === FilterMatchMode.DATE_IS ? 'min-width: 15rem' : ''">
					<template #body="{ data }">
						<div v-if="column.field === 'type' || column.field === 'status'" class="pl-2">
							<Badge :value="data[column.field]" :severity="getSeverity(data[column.field])" />
						</div>
						<div v-else class="pl-2">
							<div v-if="column.header === 'Institución'">
								<img :src="'https://s.paybook.com' + data[column.field]" />
							</div>
							<div v-else>
								{{ column.bodyTemplate ? column.bodyTemplate(data) : data[column.field] }}
							</div>
						</div>
					</template>
					<template #filter="{ filterModel, filterCallback }">
						<template v-if="filterModel">
							<InputText
								v-if="column.filter.matchMode === FilterMatchMode.CONTAINS" v-model="filterModel.value"
								:name="column.field" class="p-column-filter" @input="handleFilterInput(filterCallback)" />
							<Calendar
								v-if="column.filter.matchMode === FilterMatchMode.EQUALS" v-model="filterModel.value"
								:filter="true" class="p-column-filter" option-label="label" option-value="value"
								dateFormat="yy-mm-dd" @update:model-value="handleCalendarInput(filterModel, filterCallback)" />
						</template>
					</template>
				</column>
			</DataTable>
		</div>
	</div>
</template>
<script setup>
import useTables from '@/composables/tables';
import { ref } from 'vue';
import { FilterMatchMode } from "primevue/api";
import { defaultColumns as fiscalColumns, filters as fiscalFilters } from '@/components/Movements/Transactions/TransactionsFiscalTableColumns.js';
import { defaultColumns as bankColumns, filters as bankFilters } from '@/components/Movements/Transactions/TransactionsBankTableColumns.js';

import Badge from 'primevue/badge';
import debounce from "lodash.debounce";
import {getTransactions} from "@/services/collaborator/movements.js";
import Pusher from "pusher-js";

const props = defineProps({
  type: {type: Object, default: () => {}},
})

const newColumns = ref(props.type === 'fiscal' ? fiscalColumns : bankColumns);
const selectedColumns = ref(props.type === 'fiscal' ? fiscalColumns : bankColumns);
const dataTable = ref();
const stateKey = 'syncfy_transactions';

const {
  onUpdate,
  restoreFilters,
  lazyParams,
  loadLazyData,
  items,
  totalRecords,
  loading
} = useTables(dataTable, stateKey, props.type === 'fiscal' ? fiscalFilters : bankFilters, (_query) => getTransactions({
  ..._query,
  filters:{
    ..._query.filters,
    account: {value: props.type, matchMode: FilterMatchMode.CONTAINS},
    typeUser: {value: true, matchMode: FilterMatchMode.CONTAINS},
  }
}));

const handleFilterInput = debounce((callback) => {
  callback();
}, 1000);

const handleCalendarInput = (filterModel, filterCallback) => {
  filterModel.value = filterModel.value.toISOString().split('T')[0];
  filterCallback();
};

const pusher = new Pusher(import.meta.env.VITE_APP_PUSHER_KEY, {
  cluster: import.meta.env.VITE_APP_PUSHER_CLUSTER,
});

const channel = pusher.subscribe('sago');

channel.bind('credentials_update', () => {
  loadLazyData();
});
</script>
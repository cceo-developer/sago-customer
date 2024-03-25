import { ref, onMounted, reactive } from 'vue';

const useTables = (dataTable, stateKey, _filters, _service) => {
	let lazyParams = reactive({});
	const items = ref([]);
	const totalRecords = ref(0);
	const loading = ref(true);
	const filters = ref({});

	items.value = [];
	filters.value = _filters;
	onMounted(() => {
		Object.assign(lazyParams, {
			first: dataTable.value.first || 0,
			rows: dataTable.value.rows || 50,
			sortField: null,
			sortOrder: null,
			filters: filters.value,
		});
		loading.value = true;
		if (sessionStorage.getItem(stateKey) === null) {
			Object.assign(lazyParams, {
				first: dataTable.value.first || 0,
				rows: dataTable.value.rows || 50,
				sortField: null,
				sortOrder: null,
				filters: filters.value,
			});
		} else {
			Object.assign(
				lazyParams,
				JSON.parse(sessionStorage.getItem(stateKey))
			);
		}
		loading.value = false;
		loadLazyData();
	});


	const loadLazyData = () => {
		loading.value = true;
		let fil = Object.assign({}, filters.value);
		let _fil = {};
		Object.keys(fil).map(function (key) {
			try {
				if(key == 'leaving_hour' || key == 'arriving_hour') {
					_fil[key] = {
						value: lazyParams.filters[key].value != null
							? lazyParams.filters[key].value.map(time => {
								const formattedTime = `${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`;
								return formattedTime;
							}).join(',')
							: null,
						matchMode: 'contains',
					};
				}
				else {
					_fil[key] = {
						value:
							lazyParams.filters[key].value != null
								? '%' + lazyParams.filters[key].value + '%'
								: null,
						matchMode: 'contains',
					};
				}
			} catch {
				_fil[key] = {
					value: null,
					matchMode: 'contains',
				};
			}
		});
		let _lazyParams = {
			first: lazyParams.first,
			rows: lazyParams.rows,
			orderBy: lazyParams.sortField,
			ascending: lazyParams.sortOrder,
			sortField: lazyParams.sortField,
			sortOrder: lazyParams.sortOrder,
			filters: _fil,
		};
		_service(_lazyParams).then((response) => {
			items.value = response.data;
			totalRecords.value = response.count;
			loading.value = false;
		});
	};
	const restoreFilters = () => {
		lazyParams.first = 0;
		lazyParams.rows = 50;
		lazyParams.sortField = null;
		lazyParams.sortOrder = null;
		lazyParams.filters = filters.value;
		loadLazyData();
	};

	const onUpdate = (event) => {
		Object.assign(lazyParams, event);
		loadLazyData();
	};

	return {
		onUpdate,
		loadLazyData,
		restoreFilters,
		lazyParams,
		items,
		totalRecords,
		loading,
	}
};


export default useTables;
<template>
	<div class="relative" aria-labelledby="modal-title" role="dialog" aria-modal="true" style="z-index: 9999;">
		<transition
			enter-active-class="transition-opacity ease-linear duration-300"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition-opacity ease-linear duration-300"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0">
			<div v-if="removeItemAlert">
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				<div class="fixed inset-0 z-10 overflow-y-auto">
					<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<div
							class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
							<div class="sm:flex sm:items-start">
								<div
									class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 sm:mx-0 sm:h-10 sm:w-10">
									<svg
										class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24"
										stroke-width="1.5" stroke="currentColor" aria-hidden="true">
										<path
											stroke-linecap="round" stroke-linejoin="round"
											d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
									</svg>
								</div>
								<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
									<h3 id="modal-title" class="text-base font-semibold leading-6 text-gray-900">
										Eliminar elemento
									</h3>
									<div class="mt-2">
										<p class="text-sm text-gray-500">
											¿Estás seguro que quieres eliminar este elemento?
										</p>
									</div>
								</div>
							</div>
							<div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
								<Button
									type="button"
									label="Eliminar"
									:loading="load"
									class="inline-flex w-full justify-center rounded-md !bg-red-600 !border-red-600 px-3 py-2 text-sm text-white shadow-sm !hover:bg-red-300 sm:ml-3 sm:w-auto"
									@click="deleteItem" />
								<Button
									type="button"
									label="Mantener"
									class="inline-flex w-full justify-center rounded-md bg-white border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm !hover:bg-gray-100 hover:text-white sm:ml-3 sm:w-auto"
									:pt="{
										root: { class: '!hover:bg-gray-100'},
										label: { class: 'p-1 text-gray-900'}
									}"
									@click="cancelEscape" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup>
import {ref} from "vue";
import {useToast} from "primevue/usetoast";
import { useService } from "@/composables/service.js";

const service = useService();
const removeItemAlert = ref(false);
const toast = useToast();
const emit = defineEmits(['done']);
const load = ref(false);
const delete_route = ref('');
const item_id = ref('');


const show = (route, id) => {
  load.value = false;
  removeItemAlert.value = true;
  delete_route.value = route;
  item_id.value = id;
};

const cancelEscape = () => {
  removeItemAlert.value = false;
};

const deleteItem = () => {
  load.value = true;
  setTimeout(() => {
    hideModal();
  }, 100);
}

const hideModal = () => {
  removeItemAlert.value = false;
  service.delete(delete_route.value + item_id.value)
      .then(() => {
        emit('done');
        load.value = false;
        toast.add({severity: 'success', summary: 'Elemento eliminado exitosamente', life: 5000});
      })
      .catch(() => {
        toast.add({severity: 'error', summary: 'Ha ocurrido un problema, intentalo más tarde', life: 5000});
        load.value = false;
        emit('done');
      });
}

defineExpose({show});
</script>

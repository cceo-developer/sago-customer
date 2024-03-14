<template>
	<div class="relative" aria-labelledby="modal-title" role="dialog" aria-modal="true" style="z-index: 9999;">
		<transition
			enter-active-class="transition-opacity ease-linear duration-300"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition-opacity ease-linear duration-300"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0">
			<div v-if="display">
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				<div class="fixed inset-0 z-10 overflow-y-auto">
					<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<transition
							enter-active-class="ease-out duration-300"
							enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enter-to-class="opacity-100 translate-y-0 sm:scale-100"
							leave-active-class="ease-in duration-200"
							leave-from-class="opacity-100 translate-y-0 sm:scale-100"
							leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
							<div v-if="display" class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
								<div class="p-6 w-full bg-white">
									<div class="sm:flex sm:items-start gap-x-1.5">
										<!-- ICON -->
										<div class="bg-primary-400 ring-primary-400 ring-2 ring-offset-2 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 shadow-lg">
											<svg class="text-primary-700 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
											</svg>
										</div>
										<!-- MESSAGE -->
										<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
											<h3 id="modal-title" class="text-base font-semibold leading-6 text-gray-900">{{ props.title }}</h3>
											<div class="mt-2">
												<p class="text-sm text-gray-500">
													{{ props.confirmationMessage }}
												</p>
												<p v-if="props.details" class="text-xs text-gray-400 mt-1.5">
													{{ props.details }}
												</p>
											</div>
										</div>
									</div>
									<!-- BUTTONS -->
									<div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
										<button
											type="button" class="bg-primary-600 hover:bg-primary-500 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto"
											@click="emitOption('confirm')">
											{{ props.acceptButtonLabel }}
										</button>
										<button
											type="button" class="bg-white hover:bg-gray-50 border mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 focus:ring-1 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:w-auto"
											@click="emitOption('cancel')">
											{{ props.cancelButtonLabel }}
										</button>
									</div>
								</div>
							</div>
						</transition>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup>
	import {ref} from "vue";

	const props = defineProps({
		title: {type: String, default: () => 'Actualizar elemento'},
		confirmationMessage: {type: String, default: () => '¿Estás seguro que quieres actualizar este elemento?'},
		details: {type: String, default: () => null},
		acceptButtonLabel: {type: String, default: () => 'Actualizar'},
		cancelButtonLabel: {type: String, default: () => 'Mantener'},
	})

	const display = ref(false);

	const hide = () => (display.value = false);
	const show = () => (display.value = true);

	const emitOption = (option) => {
		hide();
		emit(option);
	};

	const emit = defineEmits(['confirm', 'cancel']);

	defineExpose({show});
</script>
<template>
	<div class="flex items-center justify-between w-full px-3">
		<div>
			<div class="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-8">
				Cuentas
			</div>
			<div class="text-xs sm:text-sm font-medium tracking-tight text-slate-500 mt-1">
				Dentro de este módulo encontrarás toda la información de las cuentas Agregadas.
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full pt-10 px-3">
		<div class="sm:col-span-2 md:col-span-4 flex flex-col flex-auto p-6 shadow rounded-2xl overflow-hidden bg-white">
			<CredentialsTable />
		</div>
	</div>
</template>
<script setup>
import CredentialsTable from "@/components/Movements/Credentials/CredentialsTable.vue";
</script>
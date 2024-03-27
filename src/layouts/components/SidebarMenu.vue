<template>
	<router-link
		:to="{ name: 'dashboard' }"
		class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
		Dashboard
	</router-link>
	<router-link :to="{ name: 'fiscal' }" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Movimientos Fiscales</router-link>
	<router-link :to="{ name: 'bank' }" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Movimientos Bancarios</router-link>
	<router-link :to="{ name: 'accounts' }" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Cuentas</router-link>
</template>

<script setup>
</script>
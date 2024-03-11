<template>
	<router-link
		:to="{ name: 'dashboard' }"
		class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
		Dashboard
	</router-link>
	<router-link :to="{ name: 'users' }" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Usuarios</router-link>
	<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium">Movimientos Fiscales</a>
	<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium">Movimientos Bancarios</a>
</template>

<script setup>
</script>
<template>
	<header class="mb-10">
		<nav class="bg-[#183233]">
			<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div class="relative flex h-16 items-center justify-between">
					<div class="absolute inset-y-0 left-0 flex items-center sm:hidden" @click="toggleNavbarMenu">
						<button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
							<span class="absolute -inset-0.5" />
							<span class="sr-only">Abrir menu principal</span>
							<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
							<svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div class="flex flex-shrink-0 items-center">
							<router-link :to="{name: 'dashboard'}">
								<img class="h-8 w-auto" src="/src/assets/images/logo.png" alt="Logotipo de Sago" />
							</router-link>
						</div>
						<div class="hidden sm:ml-6 sm:block">
							<div class="flex space-x-4">
								<sidebar-menu />
							</div>
						</div>
					</div>
					<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<div class="relative ml-3">
							<div>
								<button id="user-menu-button" type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-expanded="false" aria-haspopup="true" @click="toggleUserMenu">
									<span class="absolute -inset-1.5" />
									<span class="sr-only">Abrir menu de usuario</span>
									<img v-if="user.image" class="h-8 w-8 rounded-full" :src="asset(user.image)" :alt="user.name" />
								</button>
							</div>
							<div v-if="submenu" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
								<router-link id="user-menu-item-0" :to="{ name: 'profile' }" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" @click="toggleUserMenu">Perfil</router-link>
								<a id="user-menu-item-2" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" @click="logout">Salir</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="mobile-menu" class="sm:hidden">
				<div v-if="ResponsiveNav" class="space-y-1 px-2 pb-3 pt-2">
					<sidebar-menu />
				</div>
			</div>
		</nav>
	</header>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<router-view />
	</div>
</template>

<script setup>
	import {onMounted, ref} from "vue";
	import SidebarMenu from "./components/SidebarMenu.vue";
	import asset from "@/const/asset.js";
	import {getUser} from "@/services/collaborator/users.js";
	import {useAuth} from "@/composables/auth.js";

	const submenu = ref(false);
	const ResponsiveNav = ref(false);
	const auth = useAuth();
	const user = ref({});

	const toggleUserMenu = () =>{
		submenu.value ^= true;
	}

	const toggleNavbarMenu = () =>{
		ResponsiveNav.value ^= true;
	}

	const logout = () => {
		localStorage.clear();
		window.location.href = '/login'
	}

	onMounted(() => {
		getUser(auth.user.id, ['name', 'image']).then((response) => {
			user.value = Object.assign({}, response);
		});
	});
</script>
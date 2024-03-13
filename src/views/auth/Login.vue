<template>
	<div>
		<h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
			Iniciar Sesión
		</h2>
	</div>

	<div class="mt-10">
		<div>
			<alv-form
				:action="() => createOauthToken(email, password)" input-parent-selector=".form-error"
				class="space-y-6" @after-done="goToDashboard">
				<div>
					<label for="email" class="block text-sm font-medium leading-6 text-gray-900">
						Correo Electrónico
					</label>
					<div class="mt-2">
						<input id="email" v-model="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md px-2 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
					</div>
				</div>

				<div class="form-error">
					<label for="password" class="block text-sm font-medium leading-6 text-gray-900">
						Contraseña
					</label>
					<div class="mt-2">
						<input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md px-2 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
					</div>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600" />
						<label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-700">Recordarme</label>
					</div>
				</div>

				<div>
					<button type="submit" class="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
						Iniciar Sesión
					</button>
				</div>
			</alv-form>
		</div>
	</div>
</template>

<script setup>
	import {createOauthToken} from "@/services/system/oauth-tokens.js";
	import {ref} from "vue";
	import {useStore} from "vuex";

	const email = ref('');
	const password = ref('');
	const store = useStore();
	const goToDashboard = (response) => {
		localStorage.auth = btoa(JSON.stringify(response.data))
		store.dispatch('auth/login', response.data);
		window.location.href = '/'
	}
</script>
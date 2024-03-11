<template>
	<div class="flex min-h-full">
		<div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
			<div class="mx-auto w-full max-w-sm lg:w-96">
				<div>
					<img class="h-10 w-auto" src="/src/assets/images/logo.png" alt="Logotipo de Sago" />
				</div>
				<router-view />
			</div>
		</div>
		<div class="relative hidden w-0 flex-1 lg:block">
			<img
				class="absolute inset-0 h-full w-full object-cover"
				src="https://images.squarespace-cdn.com/content/v1/627d8bd33fed9e33a5eb7818/1652394964918-WZRSOKNYXOR0A0JULPU1/s.jpg"
				alt="Imagen de fondo de Sago" />
		</div>
	</div>
</template>

<script setup>
</script>

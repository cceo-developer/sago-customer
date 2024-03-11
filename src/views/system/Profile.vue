<template>
	<div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
		<section aria-labelledby="image-profile">
			<form action="#" method="POST">
				<div class="shadow sm:overflow-hidden sm:rounded-md">
					<div class="bg-white px-4 py-6 sm:p-6">
						<div>
							<h2 id="payment-details-heading" class="text-lg font-medium leading-6 text-gray-900">Imágen de Perfil</h2>
							<p class="mt-1 text-sm text-gray-500">
								Desde esta opción puedes actualiza tu imagen de perfil. Se sugiere que esta imagen
								contenga tu cara ya que de esta manera será mas facil para tus compañeros ubicarte.
							</p>
						</div>

						<div class="mt-6 grid grid-cols-4 gap-6">
							<div class="col-span-full flex items-center gap-x-8">
								<img src="#" class="h-24 w-24 flex-none rounded-lg border object-cover" />
								<div>
									<div class="flex items-center">
										<FileUpload
											id="image"
											ref="uploader"
											:fileLimit="1"
											name="image"
											:auto="false"
											chooseLabel="Actualizar imagen"
											accept=".jpg, .jpeg, .png"
											mode="basic"
											class="w-full mt-4 bg-primary-600 hover:bg-primary-500 text-xs"
											:maxFileSize="1000000" />
										<div v-if="loadingFile" class="text-primary-700 mt-2.5 ml-2">
											<svg class="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
												<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
												<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
											</svg>
										</div>
									</div>
									<p class="mt-2 text-xs leading-5 text-gray-400">JPG, GIF o PNG. Tamaño máximo de 1MB.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</section>

		<section aria-labelledby="profile">
			<form action="#" method="POST">
				<div class="shadow sm:overflow-hidden sm:rounded-md">
					<div class="bg-white px-4 py-6 sm:p-6">
						<div>
							<h2 id="payment-details-heading" class="text-lg font-medium leading-6 text-gray-900">Información de Perfil</h2>
							<p class="mt-1 text-sm text-gray-500">
								Consulta la información con la que estas registrado. Si necesitas actualizar algun dato
								comunicate con tu administrador para que el lo realice.
							</p>
						</div>

						<div class="mt-6 grid grid-cols-4 gap-6">
							<div class="col-span-4 sm:col-span-2">
								<label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
								<input id="first-name" disabled type="text" name="first-name" class="mt-2 block bg-slate-100 w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" />
							</div>
							<div class="col-span-4 sm:col-span-2">
								<label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Apellido</label>
								<input id="last-name" disabled type="text" name="last-name" class="mt-2 block bg-slate-100 w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" />
							</div>

							<div class="col-span-4 sm:col-span-2">
								<label for="email-address" class="block text-sm font-medium leading-6 text-gray-900">Correo Electrónico</label>
								<input id="email-address" disabled type="email" name="email-address" class="mt-2 block bg-slate-100 w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" />
							</div>

							<div class="col-span-4 sm:col-span-1">
								<label for="birthday" class="block text-sm font-medium leading-6 text-gray-900">Fecha de Nacimiento</label>
								<input id="birthday" disabled type="text" name="birthday" class="mt-2 block bg-slate-100 w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" placeholder="DD/MM/AA" />
							</div>

							<div class="col-span-4 sm:col-span-1">
								<label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Teléfono</label>
								<input id="phone" disabled type="text" name="phone" class="mt-2 block bg-slate-100 w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" />
							</div>
						</div>
					</div>
				</div>
			</form>
		</section>

		<section aria-labelledby="update-password">
			<form action="#" method="POST">
				<div class="shadow sm:overflow-hidden sm:rounded-md">
					<div class="bg-white px-4 py-6 sm:p-6">
						<div>
							<h2 id="payment-details-heading" class="text-lg font-medium leading-6 text-gray-900">Contraseña</h2>
							<p class="mt-1 text-sm text-gray-500">
								Desde esta sección podrás actualizar la contraseña con la que inicias sesión en esta plataforma.
							</p>
						</div>

						<div class="mt-6 grid md:grid-cols-3 gap-6">
							<div>
								<label for="current-password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña actual</label>
								<InputText
									id="current-password" type="password" name="current-password"
									class="w-full py-1.5 mt-2 px-2" />
							</div>
							<div>
								<label for="new-password" class="block text-sm font-medium leading-6 text-gray-900">Nueva Contraseña</label>
								<InputText
									id="new-password" type="password" name="new-password"
									class="w-full py-1.5 mt-2 px-2" />
							</div>
							<div>
								<label for="confirm-new-password" class="block text-sm font-medium leading-6 text-gray-900">Confirma tu nueva contraseña</label>
								<InputText
									id="confirm-new-password" type="password" name="confirm-new-password"
									class="w-full py-1.5 mt-2 px-2" />
							</div>
						</div>
					</div>
					<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
						<button
							type="button" class="inline-flex justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
							Actualizar Contraseña
						</button>
					</div>
				</div>
			</form>
		</section>

		<section aria-labelledby="log-out-other-sessions">
			<form action="#" method="POST">
				<div class="shadow sm:overflow-hidden sm:rounded-md">
					<div class="bg-white px-4 py-6 sm:p-6">
						<div>
							<h2 id="payment-details-heading" class="text-lg font-medium leading-6 text-gray-900">
								Cerrar sesión abiertas
							</h2>
							<p class="mt-1 text-sm text-gray-500">
								Ingresa tu contraseña para confirmar que desea cerrar sesión en todos tus dispositivos.
							</p>
						</div>

						<div class="mt-6 grid grid-cols-1 gap-6">
							<div class="">
								<label for="current-password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña actual</label>
								<InputText
									id="current-password" type="password" name="current-password"
									class="w-full py-1.5 mt-2 px-2" />
							</div>
						</div>
					</div>
					<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
						<button
							type="button" class="inline-flex justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
							Cerrar sesiones
						</button>
					</div>
				</div>
			</form>
		</section>
	</div>
</template>

<script setup>
</script>
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
								<img :src="asset(user.image)" :alt="user.name" class="h-24 w-24 flex-none rounded-lg border object-cover" />
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
											:maxFileSize="1000000"
											@select="addFile($event.files[0])" />
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
								<input id="first-name" :value="user.name" disabled type="text" name="first-name" class="mt-2 block bg-slate-100 w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" />
							</div>
							<div class="col-span-4 sm:col-span-2">
								<label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Apellido</label>
								<input id="last-name" :value="user.last_name" disabled type="text" name="last-name" class="mt-2 block bg-slate-100 w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" />
							</div>

							<div class="col-span-4 sm:col-span-2">
								<label for="email-address" class="block text-sm font-medium leading-6 text-gray-900">Correo Electrónico</label>
								<input id="email-address" :value="user.email" disabled type="email" name="email-address" class="mt-2 block bg-slate-100 w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" />
							</div>

							<div class="col-span-4 sm:col-span-1">
								<label for="birthday" class="block text-sm font-medium leading-6 text-gray-900">Fecha de Nacimiento</label>
								<input id="birthday" :value="user.birthdate ? dateFormat(user.birthdate) : null" disabled type="text" name="birthday" class="mt-2 block bg-slate-100 w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" placeholder="DD/MM/AA" />
							</div>

							<div class="col-span-4 sm:col-span-1">
								<label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Teléfono</label>
								<input id="phone" :value="user.phone" disabled type="text" name="phone" class="mt-2 block bg-slate-100 w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" />
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
									id="current-password" v-model="password.password" type="password" name="current-password"
									class="w-full py-1.5 mt-2 px-2" />
							</div>
							<div>
								<label for="new-password" class="block text-sm font-medium leading-6 text-gray-900">Nueva Contraseña</label>
								<InputText
									id="new-password" v-model="password.new_password" type="password" name="new-password"
									class="w-full py-1.5 mt-2 px-2" />
							</div>
							<div>
								<label for="confirm-new-password" class="block text-sm font-medium leading-6 text-gray-900">Confirma tu nueva contraseña</label>
								<InputText
									id="confirm-new-password" v-model="password.new_password_confirmation" type="password" name="confirm-new-password"
									class="w-full py-1.5 mt-2 px-2" />
							</div>
						</div>
					</div>
					<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
						<Button
							:loading="load"
							:disabled="load"
							label="Actualizar Contraseña"
							type="button" class="inline-flex justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
							@click="handleUpdatePassword()" />
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
									id="current-password" v-model="closePassword.password" type="password" name="current-password"
									class="w-full py-1.5 mt-2 px-2" />
							</div>
						</div>
					</div>
					<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
						<Button
							:loading="loadCloseSesions"
							:disabled="loadCloseSesions"
							label="Cerrar sesiones"
							type="button" class="inline-flex justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
							@click="closesessions" />
					</div>
				</div>
			</form>
		</section>
		<section aria-labelledby="status-2FA">
			<alv-form
				id="alv2fa" input-parent-selector=".form-error" :action="disable2FA"
				:enable-button-on-done="true" :spinner="true" :data-object="data" :rules="rules"
				@after-done="afterDone" @after-error="afterError">
				<div class="shadow sm:overflow-hidden sm:rounded-md">
					<div class="bg-white px-4 py-6 sm:p-6">
						<div>
							<h2 id="payment-details-heading" class="text-lg font-medium leading-6 text-gray-900">
								2FA
							</h2>
							<p v-if="status" class="mt-1 text-sm text-gray-500">
								Ingresa tu token de 6 digitos para desactivar la autenticación de dos factores (2FA).
							</p>
							<p v-else class="mt-1 text-sm text-gray-500">
								Habilita la autenticación de dos factores (2FA).
							</p>
						</div>
						<div class="mt-6 grid grid-cols-1 gap-6">
							<div v-if="status" class="">
								<label for="current-password" class="block text-sm font-medium leading-6 text-gray-900">Token</label>
								<div class="flex space-x-2 mb-4">
									<input
										v-for="(digit, index) in Array.from({ length: 6 })"
										:key="index"
										v-model="item.verificationCode[index]"
										type="text"
										maxlength="1"
										class="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
										@input="moveToNextField($event, index)" />
								</div>
							</div>
						</div>
					</div>
					<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
						<div v-if="status">
							<button
								type="button"
								class="mr-5 inline-flex justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600" @click="showQR = true">
								Ver QR
							</button>
							<button
								form="alv2fa"
								type="submit" class="inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
								Desactivar 2FA
							</button>
						</div>
						<button
							v-else
							type="button"
							class="inline-flex justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600" @click="enableF2Afunct">
							Activar 2FA
						</button>
					</div>
				</div>
			</alv-form>
		</section>
		<ConfirmUpdateElementMessage
			ref="imageMessage"
			title="Actualizar foto de perfil"
			confirmationMessage="¿Estás seguro que quieres actualizar tu foto de perfil?"
			@confirm="updateProfileImage()"
			@cancel="clearFile()" />
		<ConfirmUpdateElementMessage
			ref="sesionMessage"
			title="Cerrar Sesiones"
			confirmationMessage="¿Estás seguro que quieres cerrar todas tus sesiones?"
			:acceptButtonLabel="'Confirmar'"
			:cancelButtonLabel="'Cancelar'"
			@confirm="handleCloseSessionsPassword()" />
	</div>
	<Dialog v-model:visible="showQR" header="Qr 2FA" :style="{ width: '25rem' }" position="top" :modal="false" :draggable="false">
		<div class="text-center">
			<p class="mb-4">Escanea el siguiente código QR con tu aplicación de autenticación:</p>
			<div class="flex justify-center items-center">
				<QRCode :value="qrCodeUrl" :size="200" />
			</div>
		</div>
	</Dialog>
</template>

<script setup>
// IMPORTS
import {onMounted, ref} from 'vue';
import {useToast} from 'primevue/usetoast';
// COMPOSABLES
import {useAuth} from "@/composables/auth.js";
// CONSTS
import asset from '@/const/asset.js';
import {dateFormat} from '@/const/dateFormat.js';
import messageError from '@/const/messageError.js';
// SERVICES
import {closeSessionsUser, getUser} from '@/services/collaborator/users.js';
import {updateProfileImageUser, updatePasswordUser} from '@/services/collaborator/users.js';
// COMPONENTS
import ConfirmUpdateElementMessage from '@/components/widgets/ConfirmUpdateElementMessage.vue';
import {disable2FA, enable2FA, getQrCode, status2FA} from "@/services/system/oauth-tokens.js";
import QRCode from 'qrcode.vue';

const toast = useToast();
const auth = useAuth();
const user = ref({});

const imageMessage = ref(null);
const sesionMessage = ref(null);
const showQR = ref(false);
const uploader = ref(null);
const loadingFile = ref(false);
const file = ref(null);
const status = ref(false);
const qrCodeUrl = ref('');
const load = ref(false);
const loadCloseSesions = ref(false);

const defaultChangePasswordData = () => ({
  password: null,
  new_password_confirmation: null,
  new_password: null
});
const password = ref(Object.assign({}, defaultChangePasswordData()));
const closePassword = ref({
  password: null,
});

onMounted(() => {
  getUser(auth.user.id, ['id', 'name', 'last_name', 'email', 'birthdate', 'image', 'phone']).then((response) => {
    user.value = Object.assign({}, response);
    status2FA().then((response)=>{
      if(response.message === '2FA is enabled') {
        status.value = true;
        getQrCode(user.value.email, true).then((response) =>{
          qrCodeUrl.value = response.data.qrCodeUrl;
        }).catch((error) => {
          console.error('Error al obtener la información de 2FA:', error);
        })
      }else{
        status.value = false;
      }
    })
  });
});

const addFile = (image) => {
  loadingFile.value = true;
  file.value = image;
  imageMessage.value.show();
}

const clearFile = () => {
  loadingFile.value = false;
  file.value = null;
  uploader.value.clear();
};

const updateProfileImage = () => {
  updateProfileImageUser(user.value.id, {image: file.value}).then(response => {
    toast.add({severity: 'success', summary: 'Foto de perfil actualizada.', life: 5000});
    location.reload();
    loadingFile.value = false;
    user.value.image = response.data.image;
  }).catch(() => {
    loadingFile.value = false;
    toast.add({severity: 'error', summary: 'Ha surgido un problema al enviar el archivo.', life: 5000});
  });
}

const handleUpdatePassword = () => {
  load.value = true;
  toast.add({severity: 'info', summary: 'Procesando', life: 5000});
  updatePasswordUser(user.value.id, password.value).then(() => {
    password.value = Object.assign({}, defaultChangePasswordData());
    toast.add({severity: 'success', summary: 'Contraseña actualizada correctamente.', life: 5000});
    load.value = false;
  }).catch((error) => {
    toast.add({severity: 'error', summary: messageError(error), life: 5000});
    load.value = false;
  })
}

const handleCloseSessionsPassword = () => {
  closeSessionsUser(user.value.id, closePassword.value).then(() => {
    closePassword.value = { password: null };
    toast.add({severity: 'success', summary: 'Sesiones Cerradas Correctamente.', life: 5000});
    loadCloseSesions.value = false;
    localStorage.clear();
    window.location.href = '/login'
  }).catch((error) => {
    toast.add({severity: 'error', summary: messageError(error), life: 5000});
    loadCloseSesions.value = false;
  })
}

const item = ref({ verificationCode: ['', '', '', '', '', ''] });

const data = ref({
  code: '',
})

const moveToNextField = (event, index) => {
  const input = event.target;
  if (index < 5 && input.value.length === 1) {
    input.nextElementSibling.focus();
  }
  data.value.code = item.value.verificationCode.join('');
};

const rules = ref({
  verificationCode: 'required',
});

const afterDone = () => {
  toast.add({severity: 'success', summary: '2FA desactivado con exitoso', life: 5000});
  setTimeout(() => {
    location.reload();
  }, 2000);
};

const afterError = (response) => {
  if (response.errors)
    toast.add({severity: 'error', summary: Object.values(response.errors)[0][0], details: 'Ha surgido un error', life: 5000});
  else
    toast.add({severity: 'error', summary: 'Ha surgido un error', life: 5000});
};
const enableF2Afunct = () => {
  toast.add({severity: 'info', summary: 'activando 2FA', life: 2000});
  enable2FA().then(() =>{
    toast.add({severity: 'success', summary: 'Activado con exito', life: 2000});
    toast.add({severity: 'warn', summary: 'Cerrando Sesiones', life: 2000});
    setTimeout(() => {
      localStorage.clear();
      window.location.href = '/'
    }, 2000);
  }).catch(() => {
    toast.add({severity: 'error', summary: 'Ha ocurrido un error', life: 5000});
  })
}
const closesessions = () => {
  sesionMessage.value.show()
  loadCloseSesions.value = true;
}
</script>
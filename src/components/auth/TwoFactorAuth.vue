<template>
	<div class="flex items-center justify-center">
		<div class="bg-white p-8 rounded-lg shadow-md">
			<h2 class="text-2xl mb-4">Autenticación de Dos Factores</h2>

			<div v-if="!qrCodeGenerated" class="text-center">
				<p class="mb-4">Escanea el siguiente código QR con tu aplicación de autenticación:</p>
				<div class="flex justify-center items-center">
					<QRCode :value="qrCodeUrl" :size="200" />
				</div>
			</div>
			<div>
				<alv-form
					id="alv"
					class="mt-10" input-parent-selector=".form-error" :action="sendCode2FA"
					:enable-button-on-done="true" :spinner="true" :data-object="data" :rules="rules"
					@after-done="afterDone" @after-error="afterError">
					<label for="code" class="block mb-2">Código de Verificación:</label>
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
					<button type="submit" class="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
						Enviar
					</button>
				</alv-form>
			</div>
		</div>
	</div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {getQrCode, sendCode2FA} from "@/services/system/oauth-tokens.js";
import {useToast} from "primevue/usetoast";
import QRCode from 'qrcode.vue';
import {useStore} from "vuex";

const toast = useToast();
const qrCodeGenerated = ref(false);
const qrCodeUrl = ref('');
const store = useStore();

const item = ref({ verificationCode: ['', '', '', '', '', ''] });

const data = ref({
  code: '',
  email: '',
  password: '',
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

const props = defineProps({
  email: {type: Object, default: () => {}},
  password: {type: Object, default: () => {}},
})
const generateQrCode = () => {
  getQrCode(props.email, false).then((response) =>{
    if(response.data === 'no code') {
      qrCodeGenerated.value = true;
    }else{
      qrCodeUrl.value = response.data.qrCodeUrl;
      qrCodeGenerated.value = false;
    }
    data.value.email = props.email;
    data.value.password = props.password;
  }).catch((error) => {
    console.error('Error al obtener la información de 2FA:', error);
  })
}

onMounted(() => {
  generateQrCode();
});

const afterDone = (response) => {
  toast.add({severity: 'success', summary: '2FA exitoso', life: 5000});
  localStorage.auth = btoa(JSON.stringify(response.data))
  store.dispatch('auth/login', response.data);
  window.location.href = '/'
};

const afterError = (response) => {
  if (response.errors)
    toast.add({severity: 'error', summary: Object.values(response.errors)[0][0], details: 'Ha surgido un error', life: 5000});
  else
    toast.add({severity: 'error', summary: 'Ha surgido un error', life: 5000});
};

</script>

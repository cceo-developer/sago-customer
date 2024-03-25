<script setup>
	import { computed, watch } from 'vue';
	import { useRoute } from 'vue-router';
	import { useStore } from 'vuex';
	import AppEnvironment from "@/components/widgets/AppEnvironment.vue";
	import {useAuth} from "@/composables/auth.js";

	const store = useStore();
	const route = useRoute();

	const layout = computed(() => store.state.layout.current);
	const auth = useAuth();

	watch(
		() => route.name,
		() => store.dispatch(auth ? 'layout/setAppLayout' : 'layout/setAuthLayout')
	);
</script>

<template>
	<div class="h-full">
		<component
			:is="layout" />
		<AppEnvironment />
		<Toast />
	</div>
</template>

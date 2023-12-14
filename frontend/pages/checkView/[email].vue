<template>
	<div>
		<div v-if="loading" class="text-gray-600">Loading...</div>
		<div v-else>
			<div v-if="formStatus" class="mt-8">
				<h2 class="text-lg font-bold">Status Form:</h2>
				<p v-if="formStatus === 'accepted'" class="text-green-600 font-semibold">
					Form Diterima!
				</p>
				<p v-else-if="formStatus === 'waiting'" class="text-red-600 font-semibold">
					Form Sedang Diproses
				</p>
                <p v-else-if="formStatus === 'rejected'" class="text-red-600 font-semibold">
					From Ditolak!
				</p>
				<p v-else class="text-yellow-600 font-semibold">
					Menunggu Status Form...
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
	setup() {
		const loading = ref(true);
		const formStatus = ref(null);

		onMounted(async () => {
			const route = useRoute();
			const email = route.params.email;

			try {
				const response = await fetch(
					`http://localhost:5000/api/forms/${email}`
				);

				if (!response.ok) {
					const errorMsg = (await response.json())?.error;
					throw new Error(errorMsg);
				}

				const data = await response.json();
				formStatus.value = data.status;
			} catch (error) {
				formStatus.value = { error: true, message: error.message };
			} finally {
				loading.value = false;
			}
		});

		return {
			loading,
			formStatus,
		};
	},
};
</script>

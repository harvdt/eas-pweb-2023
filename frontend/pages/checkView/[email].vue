<template>
	<div class="container mx-auto mt-8">
		<div class="bg-gray-100 p-6 rounded-lg shadow-md">
			<p class="text-lg font-bold mb-4">Informasi Status Form</p>
			<div class="flex items-center">
				<p class="text-gray-700 mr-2">Email:</p>
				<p class="text-blue-700">{{ accept.email }}</p>
			</div>
			<div class="flex items-center mt-2">
				<p class="text-gray-700 mr-2">Status:</p>
				<p
					v-if="accept.status === 'accepted'"
					class="text-green-600 font-semibold"
				>
					Diterima
				</p>
				<p
					v-else-if="accept.status === 'rejected'"
					class="text-red-600 font-semibold"
				>
					Ditolak
				</p>
				<p v-else class="text-yellow-600 font-semibold">Menunggu</p>
			</div>
		</div>
	</div>
</template>

<script setup>
const route = useRoute().params.email;
const { data: request } = await useFetch("http://localhost:5000/api/forms");
const submissions = request._rawValue.docs;

let accept;

submissions.forEach(submission => {
	if (submission.email === route) {
		accept = submission;
	}
});
</script>

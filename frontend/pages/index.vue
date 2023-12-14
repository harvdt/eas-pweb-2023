<template>
	<div class="container mx-auto mt-8">
		<form @submit.prevent="submitForm">
			<div class="mb-4">
				<label for="name" class="block text-gray-700 text-sm font-bold mb-2"
					>Nama:</label
				>
				<input
					v-model="name"
					type="text"
					id="name"
					name="name"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Masukkan nama"
					required
				/>
			</div>
			<div class="mb-4">
				<label for="email" class="block text-gray-700 text-sm font-bold mb-2"
					>Email:</label
				>
				<input
					v-model="email"
					type="email"
					id="email"
					name="email"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Masukkan email"
					required
				/>
			</div>
			<div class="mb-4">
				<label for="phone" class="block text-gray-700 text-sm font-bold mb-2"
					>Nomor Telepon:</label
				>
				<input
					v-model="phone"
					type="tel"
					id="phone"
					name="phone"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Masukkan nomor telepon"
					required
				/>
			</div>
			<div class="mb-4">
				<label for="school" class="block text-gray-700 text-sm font-bold mb-2"
					>Asal Sekolah:</label
				>
				<input
					v-model="school"
					type="text"
					id="school"
					name="school"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Masukkan asal sekolah"
					required
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					type="submit"
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Kirim
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "",
			email: "",
			phone: "",
			school: "",
		};
	},
	methods: {
		async submitForm() {
			const newForm = {
				name: this.name,
				email: this.email,
				phone: this.phone,
				institution: this.school,
			};

			try {
				const response = await fetch("http://localhost:5000/api/Forms", {
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newForm),
				});

				if (!response.ok) {
					const errorMsg = (await response.json())?.errors[0].message;
					throw new Error(errorMsg);
				}

				alert("Pendaftaran Berhasil!");
			} catch (error) {
				alert("Pendaftaran gagal: " + error.message);
			}
		},
	},
};
</script>

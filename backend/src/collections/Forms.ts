import { CollectionConfig } from "payload/types";

const Forms: CollectionConfig = {
	slug: "forms",
	access: {
		create: () => true,
		read: () => true,
		update: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			type: "text",
			label: "Name",
			required: true,
		},
		{
			name: "email",
			type: "email",
			label: "Email Address",
			required: true,
		},
		{
			name: "phone",
			type: "text",
			label: "Phone Number",
			required: true,
		},
		{
			name: "institution",
			type: "text",
			label: "Institution",
			required: true,
		},
		{
			name: "status",
			type: "select",
			label: "Status",
			options: [
				{
					value: "waiting",
					label: "Waiting",
				},
				{
					value: "rejected",
					label: "Rejected",
				},
				{
					value: "accepted",
					label: "Accepted",
				},
			],
			defaultValue: "waiting",
		},
		{
			name: "tanggalPendaftaran",
			type: "date",
			label: "Tanggal Pendafatran",
			admin: {
				date: {
					pickerAppearance: "dayOnly",
					displayFormat: "d MMM yyy",
				},
			},
		},
	],
};

export default Forms;

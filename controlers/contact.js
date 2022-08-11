import ContactModel from '../models/contactModel.js';

export const getContact = async (req, res) => {
	try {
		const [data] = await ContactModel.find();
		const { street, buildingNr, apartmentNr, city, info, zipCode, tel } = data;

		res
			.status(200)
			.json({ street, buildingNr, apartmentNr, city, info, zipCode, tel });
	} catch (error) {
		console.log(error);
	}
};

export const updateContact = async (req, res) => {
	try {
		const newContact = req.body.contactData;
		const { street, buildingNr, apartmentNr, zipCode, city, info, tel } =
			newContact;
		await ContactModel.updateOne(
			{},
			{ $set: { street, buildingNr, apartmentNr, zipCode, city, info, tel } },
		);

		const [data] = await ContactModel.find();
		res
			.status(200)
			.json({
				street: data.street,
				buildingNr: data.buildingNr,
				apartmentNr: data.apartmentNr,
				city: data.city,
				info: data.info,
				zipCode: data.zipCode,
				tel: data.tel,
			});
	} catch (error) {
		data.console.log(error);
	}
};

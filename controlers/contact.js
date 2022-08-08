import ContactModel from '../models/contactModel.js';

export const getContact = async (req, res) => {
	try {
		const [data] = await ContactModel.find();
		console.log('to jest data from controllers', data);
		const { street, buildingNr, apartmentNr, city, info, zipCode, tel } = data;

		res
			.status(200)
			.json({ street, buildingNr, apartmentNr, city, info, zipCode, tel });
	} catch (error) {
		console.log(error);
	}
};

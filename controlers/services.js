import ServiceModel from '../models/priceListModel.js';

export const getServices = async (req, res) => {
	try {
		const services = await ServiceModel.find();
		res.status(200).json(services);
	} catch (error) {
		console.log(error);
	}
};

export const deleteService = async (req, res) => {
	try {
		await ServiceModel.deleteOne({ _id: req.params.id });
		const services = await ServiceModel.find();
		res.status(200).json(services);
	} catch (error) {
		console.log(error);
	}
};

export const addService = async (req, res) => {
	try {
		const services = await ServiceModel.find();
		res.status(200).json(services);
	} catch (error) {
		console.log(error);
	}
};

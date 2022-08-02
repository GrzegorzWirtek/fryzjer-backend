import mongoose from 'mongoose';
const ServiceSchema = mongoose.Schema;

const serviceSchema = new ServiceSchema({
	text: String,
	price: Number,
});

const ServiceModel = mongoose.model('service', serviceSchema);
export default ServiceModel;

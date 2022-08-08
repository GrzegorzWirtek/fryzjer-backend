import mongoose from 'mongoose';
const ContactSchema = mongoose.Schema;

const contactSchema = new ContactSchema({
	street: String,
	buildingNr: Number,
	apartmentNr: Number,
	zipCode: Number,
	city: String,
	info: String,
	tel: Number,
});

const LoginModel = mongoose.model('contact', contactSchema);
export default LoginModel;

import mongoose from 'mongoose';
const LoginSchema = mongoose.Schema;

const loginSchema = new LoginSchema({
	login: String,
	password: String,
});

const LoginModel = mongoose.model('login', loginSchema);
export default LoginModel;

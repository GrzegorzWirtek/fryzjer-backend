import LoginModel from '../models/loginModel.js';

export const checkLogin = async (req, res) => {
	const clientLogin = req.body.loginData.login;
	const clientPassword = req.body.loginData.password;
	try {
		const loginData = await LoginModel.find();
		const { login, password } = loginData[0];

		const loginComparison = clientLogin === login ? true : false;
		const passwordComparison = clientPassword === password ? true : false;

		res
			.status(200)
			.json({ login: loginComparison, password: passwordComparison });
	} catch (error) {
		console.log(error);
	}
};

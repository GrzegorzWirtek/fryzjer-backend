import express from 'express';
import { checkLogin } from '../controlers/login.js';

const loginRouter = express.Router();

loginRouter.post('/', checkLogin);

export default loginRouter;

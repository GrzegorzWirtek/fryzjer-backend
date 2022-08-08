import express from 'express';
import { getContact } from '../controlers/contact.js';

const contactRouter = express.Router();

contactRouter.get('/', getContact);

export default contactRouter;

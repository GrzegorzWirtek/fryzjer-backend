import express from 'express';
import { getContact, updateContact } from '../controlers/contact.js';

const contactRouter = express.Router();

contactRouter.get('/', getContact);
contactRouter.post('/', updateContact);

export default contactRouter;

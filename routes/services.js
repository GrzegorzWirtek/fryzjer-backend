import express from 'express';
import {
	getServices,
	deleteService,
	addService,
	updateOne,
} from '../controlers/services.js';

const servicesRouter = express.Router();

servicesRouter.get('/', getServices);
servicesRouter.delete('/:id', deleteService);
servicesRouter.post('/', addService);
servicesRouter.post('/updateone', updateOne);

export default servicesRouter;

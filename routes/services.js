import express from 'express';
import {
	getServices,
	deleteService,
	addService,
} from '../controlers/services.js';

const servicesRouter = express.Router();

servicesRouter.get('/', getServices);
servicesRouter.delete('/:id', deleteService);
servicesRouter.post('/', addService);

export default servicesRouter;

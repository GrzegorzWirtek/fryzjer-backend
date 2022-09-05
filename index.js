import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import servicesRouter from './routes/services.js';
import loginRouter from './routes/login.js';
import contactRouter from './routes/contact.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use('/services', servicesRouter);
app.use('/login', loginRouter);
app.use('/contact', contactRouter);

app.get('/', (req, res) => {
	res.send('Welcome, this is from Hair Salon backend');
});

mongoose
	.connect(process.env.MONGOOSE_URL)
	.then(() =>
		app.listen(PORT, () => console.log(`Server runing on port ${PORT}`)),
	)
	.catch((err) => console.log(err));

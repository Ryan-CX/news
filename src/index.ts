import express from 'express';
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
import mongoose from 'mongoose';
import 'dotenv/config';
import { newsRoute } from './routes/newsRoute';
import { userRoute } from './routes/userRoute';
import path from 'path';

//in real production we should hide this to a .env file
mongoose
	.connect(
		'mongodb+srv://xcg:wrn2dyhh@notebook.h028d.mongodb.net/news?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((err) => {
		console.log('Error:', err.message);
	});

//prepare for deployment

app.use('/api/newsitems', newsRoute);
app.use('/api/users', userRoute);
app.get('/', (req, res) => {
	res.send('Hello World!');
});
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

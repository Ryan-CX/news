import express from 'express';
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
import mongoose from 'mongoose';
import 'dotenv/config';
import { newsRoute } from './routes/newsRoute';

mongoose
	.connect(`${process.env.MONGO}`)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((err) => {
		console.log('Error:', err.message);
	});

app.use('/api/newsitems', newsRoute);

app.get('/', (req, res) => {
	res.send('Hello World!');
});
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

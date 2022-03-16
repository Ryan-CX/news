import express from 'express';
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
import mongoose from 'mongoose';
import 'dotenv/config';
import { newsRoute } from './routes/newsRoute';
import { userRoute } from './routes/userRoute';
import path from 'path';
mongoose
	.connect(`${process.env.MONGO}`)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((err) => {
		console.log('Error:', err.message);
	});

//prepare for deployment
if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static('my-app/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'my-app/build/index.html'));
	});
}

app.use('/api/newsitems', newsRoute);
app.use('/api/users', userRoute);
app.get('/', (req, res) => {
	res.send('Hello World!');
});
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

// npm run dev (To run the server)
import express from 'express';
import { PORT, mongoDBURL } from './config.js';

// Mongoose required for working with MongoDB
import mongoose from 'mongoose';

import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';

import cors from 'cors';

// Connect to the mongoDB
// Should come before defining routes
mongoose
	.connect(mongoDBURL)
	.then(() => {
		// Log database running
		console.log('App is connected to the database');
		// Log server running
		app.listen(PORT, () => {
			console.log(`App is listening to port: ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});

// Use express.js as a backend framework
const app = express();

// Middleware for parsing request body (express.json is generally better vs. bodyparser.json)
app.use(express.json());

// Middleware for handling CORS policy
// Option 1: Allow all origins with default of cors(*)
app.use(cors());

// Option 2: Allow custom origins (Generally better, only clients of these origins can access our server)
// app.use(
// 	cors({
// 		origin: 'http://localhost:3000/',
// 		methods: ['POST', 'GET', 'PUT', 'DELETE'],
// 		allowedHeaders: ['Content-Type'],
// 	})
// );

// For each requisite prefix of /books, handle them with booksRoute
app.use('/books', booksRoute);

// GET server test
// First parameter: string
// Second parameter: callback function
app.get('/', (request, response) => {
	console.log(request);
	return response.status(234).send('/ is working');
});

// When having more models, it's best to not have all routes for each model in one file for easier refactoring purposes
import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// We don't need to have /books as the prefix as it is redundant

// POST books
// Route for creating and saving a new book to the database
// Workign with mongoose is asynchronous
router.post('/', async (request, response) => {
	try {
		// Validation from request
		if (
			!request.body.title ||
			!request.body.author ||
			!request.body.publishYear
		) {
			return response.status(400).send({
				message: 'Send all required fields: title, author, publishYear',
			});
		}

		// Variable for book
		const newBook = {
			title: request.body.title,
			author: request.body.author,
			publishYear: request.body.publishYear,
		};

		const book = await Book.create(newBook);

		return response.status(201).send(book);
	} catch (error) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

// GET books
// Route for getting all books in database
router.get('/', async (request, response) => {
	try {
		const books = await Book.find({});

		return response.status(200).json({
			count: books.length,
			data: books,
		});
	} catch (error) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

// GET books
// Route for getting a book by id from database
router.get('/:id', async (request, response) => {
	try {
		const { id } = request.params;

		const book = await Book.findById(id);

		return response.status(200).json(book);
	} catch (error) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

// PUT books
// Route for updating a book
router.put('/:id', async (request, response) => {
	try {
		// Validation from request
		if (
			!request.body.title ||
			!request.body.author ||
			!request.body.publishYear
		) {
			return response.status(400).send({
				message: 'Send all required fields: title, author, publishYear',
			});
		}

		const { id } = request.params;

		const result = await Book.findByIdAndUpdate(id, request.body);

		if (!result) {
			return response.status(404).json({ message: 'Book not found' });
		}

		return response
			.status(200)
			.send({ message: 'Book updated successfully' });
	} catch (error) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

// DELETE books
// Route for deleting book
router.delete('/:id', async (request, response) => {
	try {
		const { id } = request.params;

		const result = await Book.findByIdAndDelete(id);

		if (!result) {
			return response.status(404).json({ message: 'Book not found' });
		}

		return response
			.status(200)
			.send({ message: 'Book deleted successfully' });
	} catch (error) {
		console.log(error.message);
		response.status(500).send({ message: error.message });
	}
});

export default router;

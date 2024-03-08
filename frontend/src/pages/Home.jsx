import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
	const buttonStyles =
		'bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg';

	// State for books with default state of an empty array
	const [books, setBooks] = useState([]);
	// Loading state with default state of false
	const [loading, setLoading] = useState(false);

	const [showType, setShowType] = useState('table');

	useEffect(() => {
		setLoading(true);
		axios
			.get('http://localhost:3002/books')
			.then((response) => {
				setBooks(response.data.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, []);

	return (
		<div className='d-4'>
			<div className='container mx-auto p-8'>
				<div className='flex justify-center items-center space-x-4 mb-8'>
					<button
						className={`${buttonStyles} ${
							showType === 'table' ? 'bg-blue-700' : ''
						}`}
						onClick={() => setShowType('table')}
					>
						Table View
					</button>
					<button
						className={`${buttonStyles} ${
							showType === 'card' ? 'bg-blue-700' : ''
						}`}
						onClick={() => setShowType('card')}
					>
						Card View
					</button>
				</div>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-4xl font-bold text-black'>
						Books List
					</h1>
					<Link to='/books/create'>
						<MdOutlineAddBox className='text-blue-800 text-4xl' />
					</Link>
				</div>
				<div className='relative'>
					<div className='absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-100 rounded-lg'></div>
					<div className='relative z-10'>
						{loading ? (
							<Spinner />
						) : showType === 'table' ? (
							<BooksTable books={books} />
						) : (
							<BooksCard books={books} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

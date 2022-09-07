import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './New.css';

const API = process.env.REACT_APP_API_URL;

const PerfumeNew = () => {
	const navigate = useNavigate();
	const id = useParams();
	const [perfume, setPerfume] = useState({
		id: '',
		item_name: '',
		brand: '',
		scent_notes: '',
		key_notes: '',
		price: 0,
		is_long_lasting: false,
		image: '',
	});

	const newPerfume = (event) => {
		setPerfume({ ...perfume, [event.target.id]: event.target.value });
	};

	const handleNew = (perfume) => {
		axios
			.post(`${API}/perfumes/new`, perfume)
			.then(() => {
				navigate(`/perfumes`);
			})
			.catch((error) => {
				console.warn(error);
			});
	};

	const checkBox = () => {
		setPerfume({ ...perfume, is_long_lasting: !perfume.is_long_lasting });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleNew(perfume, id);
	};

	return (
		<section>
			<h1>Add a perfume!</h1>
			<img
				className='new-perfume'
				src='https://p1-tt.byteimg.com/origin/pgc-image/de5f2c153d1b4c5bbc35ae0e9dbe2367'
				alt=''
			/>
			<br></br>
			<br></br>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Item Name</label>
				<br></br>
				<input
					id='name'
					type='text'
					value={perfume.item_name}
					onChange={newPerfume}
				/>
				<br></br>
				<label htmlFor='brand'>Brand</label>
				<br></br>
				<input
					id='brand'
					type='text'
					value={perfume.brand}
					onChange={newPerfume}
				/>
				<br></br>
				<label htmlFor='scent-notes'>Scent Notes</label>
				<br></br>
				<input
					id='scent-notes'
					type='text'
					value={perfume.scent_notes}
					onChange={newPerfume}
				/>
				<br></br>
				<label htmlFor='fragrance-description'>Fragrance Description</label>
				<br></br>
				<input
					id='fragrance-description'
					type='text'
					value={perfume.fragrance_description}
					onChange={newPerfume}
				/>
				<br></br>
				<label htmlFor='key-notes'>Key Notes</label>
				<br></br>
				<input
					id='key-notes'
					type='text'
					value={perfume.key_notes}
					onChange={newPerfume}
				/>
				<br></br>
				<label htmlFor='price'>Price</label>
				<br></br>
				<input
					id='price'
					type='number'
					value={perfume.price}
					onChange={newPerfume}
				/>
				<br></br>
				<label htmlFor='image'>Image</label>
				<br></br>
				<input
					type='text'
					name='image'
					value={perfume.image}
					onChange={newPerfume}
				/>
				<br></br>
				<br></br>
				<label htmlFor='where_to_purchase'>Where To Purchase?</label>
				<br></br>
				<input
					type='text'
					name='purchase'
					value={perfume.where_to_purchase}
					id='purchase'
					onChange={newPerfume}
				/>
				<label htmlFor='long-lasting'>Is this perfume long lasting?</label>
				<br></br>
				<input
					type='checkbox'
					name='long-lasting'
					onClick={checkBox}
					id='long-lasting'
				/>
				<br></br>
				<Link to='/perfumes'>
					<button className='new-button' type='submit'>
						Submit New Perfume
					</button>
				</Link>
			</form>
		</section>
	);
};

export default PerfumeNew;

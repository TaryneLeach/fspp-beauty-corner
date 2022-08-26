import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState } from 'react';

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
		setPerfume({ ...snack, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		axios
			.get(`${API}/perfumes/${id}`)
			.then((res) => {
				setSnack(res.data);
			})
			.catch();
	}, [id]);

	const handleNew = (perfume) => {
		axios
			.put(`${API}/perfumes`, perfume)
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
		handleEdit(perfume, id);
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Item Name</label>
				<input
					id='name'
					type='text'
					value={perfume.item_name}
					onChange={newPerfume}
				/>
				<label htmlFor='brand'>Brand</label>
				<input
					id='brand'
					type='text'
					value={perfume.brand}
					onChange={newPerfume}
				/>
				<label htmlFor='scent-notes'>Scent Notes</label>
				<input
					id='scent-notes'
					type='text'
					value={perfume.scent_notes}
					onChange={newPerfume}
				/>
				<label htmlFor='fragrance-description'>Fragrance Description</label>
				<input
					id='fragrance-description'
					type='text'
					value={perfume.fragrance_description}
					onChange={newPerfume}
				/>
				<label htmlFor='key-notes'>Key Notes</label>
				<input
					id='key-notes'
					type='text'
					value={perfume.key_notes}
					onChange={newPerfume}
				/>
				<label htmlFor='price'>Price</label>
				<input
					id='price'
					type='number'
					value={perfume.price}
					onChange={newPerfume}
				/>

				<label htmlFor='image'>Image</label>
				<input
					type='image'
					name='image'
					value={perfume.image}
					onChange={newPerfume}
				/>
				<label htmlFor='long-lasting'>Long Lasting</label>
				<input
					type='checkbox'
					name='long-lasting'
					onClick={checkBox}
					id='long-lasting'
				/>
				<Link to='/perfumes'>
					<button type='submit'>Submit Perfume</button>
				</Link>
			</form>
		</section>
	);
};

export default PerfumeNew;

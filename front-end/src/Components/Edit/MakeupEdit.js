import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

const MakeupEdit = () => {
	const navigate = useNavigate();
	const id = useParams();
	const [makeup, setMakeup] = useState({
		id: '',
		item_name: '',
		brand: '',
		category: '',
		price: 0,
		is_vegan: false,
		image: '',
	});

	const editMakeup = (event) => {
		setMakeup({ ...makeup, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		axios
			.get(`${API}/makeups/${id}`)
			.then((res) => {
				setMakeup(res.data);
			})
			.catch();
	}, [id]);

	const handleEdit = (edit) => {
		axios
			.put(`${API}/makeups/${id}`, edit)
			.then(() => {
				navigate(`/makeups`);
			})
			.catch((error) => {
				console.warn(error);
			});
	};
	const checkBox = () => {
		setMakeup({ ...makeup, is_vegaan: !makeup.is_vegan });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleEdit(makeup, id);
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Item Name</label>
				<input
					id='name'
					type='text'
					value={makeup.item_name}
					onChange={editMakeup}
				/>
				<label htmlFor='brand'>Brand</label>
				<input
					id='brand'
					type='text'
					value={makeup.brand}
					onChange={editMakeup}
				/>
				<label htmlFor='category'>Category</label>
				<input
					id='category'
					type='text'
					value={makeup.category}
					onChange={editMakeup}
				/>
				<label htmlFor='price'>Price</label>
				<input
					id='price'
					type='number'
					value={makeup.price}
					onChange={editMakeup}
				/>
				<label htmlFor='image'>Image</label>
				<input
					type='image'
					name='image'
                    alt={makeup.name}
					value={makeup.image}
					onChange={editMakeup}
				/>
				<label htmlFor='is_vegan'>Vegan</label>
				<input
					type='checkbox'
					name='is-vegan'
					onClick={checkBox}
					id='is-vegan'
				/>
				<Link to='/makeups'>
					<button type='submit'>Submit Makeup Edit</button>
				</Link>
			</form>
		</section>
	);
};

export default MakeupEdit;

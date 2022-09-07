import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';

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
				setMakeup(res.data.payload);
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
            <h1>Edit a Makeup Item</h1>
            <img src="https://cdn.cliqueinc.com/posts/296442/cute-makeup-looks-296442-1638735967246-main.700x0c.jpg" alt="" />
            
			<br></br>
		
            <br></br>
			
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Item Name</label>
				<input
					id='item_name'
					type='text'
					value={makeup.item_name}
					onChange={editMakeup}
				/>
                <br></br>
                <br></br>
				<label htmlFor='brand'>Brand</label>
				<input
					id='brand'
					type='text'
					value={makeup.brand}
					onChange={editMakeup}
				/>
                <br></br>
                <br></br>
				<label htmlFor='category'>Category</label>
				<input
					id='category'
					type='text'
					value={makeup.category}
					onChange={editMakeup}
				/>
                <br></br>
                <br></br>
				<label htmlFor='price'>Price</label>
				<input
					id='price'
					type='number'
					value={makeup.price}
					onChange={editMakeup}
				/>
                <br></br>
                <br></br>
				<label htmlFor='image'>Image</label> 
              
				<input
					type='text'
					id="image"
                    alt="makeup"
					value={makeup.image}
					onChange={editMakeup}
				/>
                <br></br>
                <br></br>
				<label htmlFor='is_vegan'>Vegan</label>
				<input
					type='checkbox'
				
					onClick={checkBox}
					id='is_vegan'
				/>
				<br></br>
				<Link to='/makeups'>
					<button type='submit'>Submit Makeup Edit</button>
				</Link>
			</form>
		</section>
	);
};

export default MakeupEdit;

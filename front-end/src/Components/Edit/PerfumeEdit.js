import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';

const API = process.env.REACT_APP_API_URL;

const PerfumeEdit = () => {
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

	const editPerfume = (event) => {
		setPerfume({ ...perfume, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		axios
			.get(`${API}/perfumes/${id}`)
			.then((res) => {
				setPerfume(res.data.payload);
			})
			.catch();
	}, [id]);

	const handleEdit = (event) => {
		event.preventDefault();
		axios
			.put(`${API}/perfumes/${id}/edit`, perfume)
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
            <h1>Edit a Perfume</h1>
            <img src="https://c.tenor.com/6LDZD67I13IAAAAC/spray-ariana-grande.gif" alt="" />
            <br></br>
            <br></br>
			<form onSubmit={handleSubmit}>
            
				<label htmlFor='name'>Item Name</label>
				<input
					id='item_name'
					type='text'
					value={perfume.item_name}
					onChange={editPerfume}
				/>
                
                <br></br>
                <br></br>
				<label htmlFor='brand'>Brand</label>
				<input
					id='brand'
					type='text'
					value={perfume.brand}
					onChange={editPerfume}
				/>
                <br></br>
                <br></br>
				<label htmlFor='scent_TYPE'>Scent Type</label>
				<input
					id='scent_type'
					type='text'
					value={perfume.scent_type}
					onChange={editPerfume}
				/>
                <br></br>
                <br></br>
				<label htmlFor='fragrance_description'>Fragrance Description</label>
				<input
					id='fragrance_description'
					type='text'
					value={perfume.fragrance_description}
					onChange={editPerfume}
				/>
                <br></br>
                <br></br>
                <label htmlFor="key_notes">Key Notes</label>
                <input 
                id="key_notes"
                type="text"
                value={perfume.key_notes}
                onChange={editPerfume}
                />
                <br></br>
                <br></br>
                <label htmlFor="price">Price</label>
                <input 
                id="price"
                type="number"
                value={perfume.price}
                onChange={editPerfume}
                />
                <br></br>
                <br></br>
                <label htmlFor="image">Image</label>
            <input 
            type="text"
            id="image"
            alt="perfume"
            value={perfume.image}
            onChange={editPerfume}
            />
            <br></br>
                <br></br>
                <label htmlFor="long-lasting">Long Lasting</label>
                <input type='checkbox' name='long_lasting' onClick={checkBox} id='long_lasting' />
                <Link to="/perfumes">
                    <button  className="show-buttons"type="submit">Submit Perfume Edit</button>
                </Link>
			</form>
		</section>
	);
};

export default PerfumeEdit;

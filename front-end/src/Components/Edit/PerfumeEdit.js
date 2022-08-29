import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
				setPerfume(res.data);
			})
			.catch();
	}, [id]);

	const handleEdit = (edit) => {
		axios
			.put(`${API}/perfumes/${id}`, edit)
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
                <div>
				<label htmlFor='name'>Item Name</label>
				<input
					id='name'
					type='text'
					value={perfume.item_name}
					onChange={editPerfume}
				/>
                </div>
                <div>
				<label htmlFor='brand'>Brand</label>
				<input
					id='brand'
					type='text'
					value={perfume.brand}
					onChange={editPerfume}
				/>
                </div>
				<label htmlFor='scent-notes'>Scent Notes</label>
				<input
					id='scent-notes'
					type='text'
					value={perfume.scent_notes}
					onChange={editPerfume}
				/>
				<label htmlFor='fragrance-description'>Fragrance Description</label>
				<input
					id='fragrance-description'
					type='text'
					value={perfume.fragrance_description}
					onChange={editPerfume}
				/>
                <label htmlFor="key-notes">Key Notes</label>
                <input 
                id="key-notes"
                type="text"
                value={perfume.key_notes}
                onChange={editPerfume}
                />
                <label htmlFor="price">Price</label>
                <input 
                id="price"
                type="number"
                value={perfume.price}
                onChange={editPerfume}
                />
                <label htmlFor="image">Image</label>
            <input 
            type="image"
            name="image"
            alt="perfume"
            value={perfume.image}
            onChange={editPerfume}
            />
                <label htmlFor="long-lasting">Long Lasting</label>
                <input type='checkbox' name='long-lasting' onClick={checkBox} id='long-lasting' />
                <Link to="/perfumes">
                    <button type="submit">Submit Perfume Edit</button>
                </Link>
			</form>
		</section>
	);
};

export default PerfumeEdit;

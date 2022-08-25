import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const API = process.env.REACT_APP_API_URL;

const MakeupNew = () => {
    const navigate = useNavigate();

	const [makeup, setMakeup] = useState({
		id: '',
		item_name: '',
		brand: '',
		category: '',
		price: 0,
		is_vegan: false,
		image: '',
	});

    const newMakeup = (event) => {
		setMakeup({ ...snack, [event.target.id]: event.target.value });
	};


	const handleNew = (makeup) => {
		axios
			.post(`${API}/makeups`, makeup)
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
		handleNew(makeup, id);
	};

    return (
        <section>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Item Name</label>
            <input 
            id="name"
            type="text"
            value={makeup.item_name}
            onChange={newMakeup}
            />
            <label htmlFor="brand">Brand</label>
            <input 
            id="brand"
            type="text"
            value={makeup.brand}
            onChange={newtMakeup}
            />
            <label htmlFor="category">Category</label>
            <input
            id="category"
            type="text"
            value={makeup.category}
            onChange={newMakeup}
             />
            <label htmlFor="price">Price</label>
            <input
            id="price"
            type="number"
            value={makeup.price}
            onChange={newMakeup}
             />
               <label htmlFor="image">Image</label>
            <input 
            type="image"
            name="image"
            value={makeup.image}
            onChange={newMakeup}
            />
            <label htmlFor='is_vegan'>Vegan</label>
			<input
			type='checkbox'
			name='is-vegan'
            value={makeup.vegan}
			onClick={checkBox}
			id='is-vegan'
          
            />
          
            <Link to='/makeups'>
					<button type='submit'>Submit Makeup Edit</button>
				</Link>
                </form>
        </section>
    )
}


export default MakeupNew;
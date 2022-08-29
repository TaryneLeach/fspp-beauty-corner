import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import './New.css'
const API = process.env.REACT_APP_API_URL;

const MakeupNew = () => {
    const navigate = useNavigate();
    // const { id } = useParams()

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
		setMakeup({ ...makeup, [event.target.id]: event.target.value });
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
		handleNew(makeup);
	};

    return (
        <section>
            <h1>Add some makeup!</h1>
            <form  onSubmit={handleSubmit}>
            <label htmlFor="name">Item Name</label>
            <br></br>
            <input 
            id="name"
            type="text"
            value={makeup.item_name}
            onChange={newMakeup}
            />
            <br></br>
            <label htmlFor="brand">Brand</label>
            <br></br>
            <input 
            id="brand"
            type="text"
            value={makeup.brand}
            onChange={newMakeup}
            />
            <br></br>
            <label htmlFor="category">Category</label>
            <br></br>
            <input
            id="category"
            type="text"
            value={makeup.category}
            onChange={newMakeup}
             />
             <br></br>
            <label htmlFor="price">Price</label>
            <br></br>
            <input
            id="price"
            type="number"
            value={makeup.price}
            onChange={newMakeup}
             />
            <br></br>
            <label htmlFor="image">Image</label>
            <br></br>
            <input 
            type="text"
            name="image"
            alt="makeup"
            value={makeup.image}
            onChange={newMakeup}
            />
            <br></br>
            <br></br>
            <label htmlFor='is_vegan'>Is this makeup vegan?</label>
            <br></br>
			<input
			type='checkbox'
			name='is-vegan'
            value={makeup.vegan}
			onClick={checkBox}
			id='is-vegan'
          
            />
        
          <br></br>
            <Link to='/makeups'>
					<button type='submit'>Submit New Makeup Item </button>
				</Link>
                </form>
        </section>
    )
}


export default MakeupNew;
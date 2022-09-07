import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import './New.css'
import React from 'react';
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
        where_to_purchase: '',
        
	});

    const newMakeup = (event) => {
		setMakeup({ ...makeup, [event.target.id]: event.target.value });
	};


	const handleNew = (makeup) => {
		axios
			.post(`${API}/makeups/new`, makeup)
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
            <img className="new-makeup-img"src="https://s2.r29static.com/bin/entry/0e3/0,0,2000,1050/x,80/1716506/image.jpg" alt="" />
            <br></br>
            <br></br>
            <form  onSubmit={handleSubmit}>
            <label htmlFor="item_name">Item Name</label>
            <br></br>
            <input 
            id="item_name"
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
            id="image"
           
            value={makeup.image}
            onChange={newMakeup}
            />
            <br></br>
            <br></br>
            <label htmlFor='where_to_purchase'>Where To Purchase?</label>
            <br></br>
            <input 
            type="text"
            value={makeup.where_to_purchase}
            id="where_to_purchase"
            onChange={newMakeup}
            />
            <br></br>
            <br></br>
            <label htmlFor='is_vegan'>Is this makeup vegan?</label>
            <br></br>
			<input
			type='checkbox'
            value={makeup.vegan}
			onClick={checkBox}
			id='is_vegan'
          
            />
        
          <br></br>
            <Link to='/makeups'>
					<button className="new-button" type='submit'>Submit New Makeup Item </button>
				</Link>
                </form>
        </section>
    )
}


export default MakeupNew;
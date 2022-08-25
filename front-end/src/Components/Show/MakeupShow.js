import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'


const API = process.env.REACT_APP_API_URL;

const MakeupShow = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [makeup, setMakeup] = useState()

	useEffect(() => {
		axios
			.get(`${API}/makeups/${id}`)
			.then((res) => {
				setMakeup(res.data);
			})
			.catch((error) => {
				console.warn(error);
			});
	}, [id]);


    // delete route
	const deleteMakeup = () => {
		axios
			.delete(`${API}/makeups/${id}`)
			.then(() => {
				navigate('/makeups');
			})
			.catch((error) => {
				console.warn(error);
			});
	};

    return (
        <section>
            <article>
                <img src={makeup.image} alt={makeup.item_name} />
                <div>{makeup.brand}</div>
                <div>{makeup.category}</div>
                <div>{makeup.price}</div>
                <div>
                {makeup.is_vegan ? (
			  <h4>This makeup item is vegan.</h4>
			) : (
			  <h4>This makeup item is not vegan.</h4>
			)}
                </div>
                <button onClick={deleteMakeup}>Delete makeup item</button>
            </article>

        </section>

    )

};

export default MakeupShow;

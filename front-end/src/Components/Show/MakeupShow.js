import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Reviews from './Reviews';
import React from 'react';



const API = process.env.REACT_APP_API_URL;

const MakeupShow = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [makeup, setMakeup] = useState([])

	useEffect(() => {
		axios
			.get(`${API}/makeups/${id}`)
			.then((res) => {
				setMakeup(res.data.payload);
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
             <h1>Additional Makeup Details</h1>
            <article>
               <br></br>
                <img className="makeup-show-img" src={makeup.image} alt={makeup.item_name} />
                <div>{makeup.brand}</div>
                <div>{makeup.category}</div>
                <div>${makeup.price}</div>
                <div>
                {makeup.is_vegan ? (
			  <h4><img className="vegan"src="https://t4.ftcdn.net/jpg/02/99/88/93/360_F_299889394_1prIwRtf6ndCfZegWOEeJRPKc56dTHFK.jpg" alt=""></img></h4>
			) : (
			  <h4> <img className="not-vegan"src="https://thecrumbyvegan.files.wordpress.com/2019/12/notvegananymore.jpg?w=660" alt="" /> </h4>
			)}
                </div>
		
				<Link to="/makeups"><button className="show-buttons">Back</button></Link>
				&nbsp;  &nbsp;
				<a href={makeup.where_to_purchase}><button className="show-buttons">Purchase</button></a>
				&nbsp;  &nbsp;
				<Link to={`/makeups/${makeup.id}/edit`}><button className="show-buttons">Edit</button></Link>
				&nbsp;  &nbsp;
				<button className="show-buttons"onClick={deleteMakeup}>Delete makeup item</button>
				&nbsp;  &nbsp;
                <h5>Have you tried this makeup item? Leave a review below!</h5>
                <Reviews />
                <br></br>
				
            </article>

        </section>

    )

};

export default MakeupShow;

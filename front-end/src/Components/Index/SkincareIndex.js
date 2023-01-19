import { useState, useEffect } from 'react';
import axios from 'axios';
// import './MakeupandPerfume.css';
import React from 'react';
import SkincareCards from './SkincareCards.js';

const API = process.env.REACT_APP_API_URL;

const SkincareIndex = () => {
	const [skincare, setSkincare] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/skincare`)
			.then((res) => {
				// console.log(res.data.payload)
				setSkincare(res.data.payload);
			})
			.catch((error) => {
				console.warn(error);
			});
	}, []);

	return (
		<div>
			<h1>Skincare Selection </h1>
			{/* <img
				className='makeup-img'
				src='https://img.freepik.com/premium-vector/beautiful-black-woman-applying-pink-lipstick_85666-54.jpg?w=2000'
				alt=''/> */}
			<div>
				{skincare.length > 0
					? skincare.map((skincare, index) => {
							return <SkincareCards key={index} skincare={skincare} />;
					  })
					: null}
			</div>
		</div>
	);
};

export default SkincareIndex;

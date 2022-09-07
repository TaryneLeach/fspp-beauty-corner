import { useState, useEffect } from 'react';
import MakeupCards from './MakeupCards.js';
import axios from 'axios';
import './MakeupandPerfume.css';
import React from 'react'


const API = process.env.REACT_APP_API_URL;

const MakeupIndex = () => {
	const [makeups, setMakeups] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/makeups`)
			.then((res) => {
                // console.log(res.data.payload)
				setMakeups(res.data.payload);
			})
			.catch((error) => {
				console.warn(error);
			});
	}, []);

	return (
		<div>
			<h1>Makeup Selection </h1>
			<img
				className='makeup-img'
				src='https://img.freepik.com/premium-vector/beautiful-black-woman-applying-pink-lipstick_85666-54.jpg?w=2000'
				alt=''/>
				<div className="container">
			{makeups.length > 0
				? makeups.map((makeup, index) => {
                   
						return <MakeupCards key={index} makeup={makeup} />;
				  })
				  
				: null}
				</div>
		</div>
	);
};

export default MakeupIndex;

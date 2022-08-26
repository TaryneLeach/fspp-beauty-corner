import { useState, useEffect } from 'react';
import MakeupCards from './MakeupCards.js';
import axios from 'axios';
import './MakeupandPerfume.css';

const API = process.env.REACT_APP_API_URL;

const MakeupIndex = () => {
	const [makeups, setMakeups] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/makeups`)
			.then((res) => {
				setMakeups(res.data.payload);
			})
			.catch((error) => {
				console.warn(error);
			});
	}, []);

	return (
		<div>
			<h1>Makeup Selection </h1>
			<br></br>
			<img
				className='makeup-img'
				src='https://img.freepik.com/premium-vector/beautiful-black-woman-applying-pink-lipstick_85666-54.jpg?w=2000'
				alt=''
			/>

			{makeups.length > 0
				? makeups.map((makeup, index) => {
						return <MakeupCards key={index} makeup={makeup} />;
				  })
				: null}
		</div>
	);
};

export default MakeupIndex;

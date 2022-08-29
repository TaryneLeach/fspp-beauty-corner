import axios from 'axios';
import { useState, useEffect } from 'react';
import PerfumeCards from './PerfumeCards.js';
import './MakeupandPerfume.css'


const API = process.env.REACT_APP_API_URL;

const PerfumeIndex = () => {
	const [perfumes, setPerfumes] = useState([])

	useEffect(() => {
		axios
			.get(`${API}/perfumes`)
			.then((res) => {
				setPerfumes(res.data.payload);
				// console.log(perfumes)
			})
			.catch((error) => {
				console.warn(error);
			});
	}, []);

	return (
		<div>
			<h1>Perfume Selection</h1>
          
            
        <img className="perfume-img"src="https://i.pinimg.com/originals/8b/db/dd/8bdbdd6568058358a81d6a52b65e52b5.jpg" alt="" />
			<br></br>
            {perfumes.length > 0
				? perfumes.map((perfume, index) => {
						return <PerfumeCards key={index} perfume={perfume} />;
				  })
				: null}
		</div>
	);
};

export default PerfumeIndex;

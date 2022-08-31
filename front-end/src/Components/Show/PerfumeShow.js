import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Reviews from './Reviews';
import './MakeupandPerfumeShow.css'


const API = process.env.REACT_APP_API_URL;

const PerfumeShow = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [perfume, setPerfume] = useState([])

	useEffect(() => {
		axios
			.get(`${API}/perfumes/${id}`)
			.then((res) => {
				setPerfume(res.data.payload);
			})
			.catch((error) => {
				console.warn(error);
			});
	}, [id]);


    // delete route
	const deletePerfume = () => {
		axios
			.delete(`${API}/perfumes/${id}`)
			.then(() => {
				navigate('/perfumes');
			})
			.catch((error) => {
				console.warn(error);
			});
	};

    return (
        <section>
            <h1>Additonal Perfume Details</h1>
            <article>
                <img className="perfume-show-img" src={perfume.image} alt={perfume.item_name} />
                <div>{perfume.brand}</div>
                <div>{perfume.scent_notes}</div>
                <div>{perfume.fragrance_description}</div>
                <div>{perfume.key_notes}</div>
                <div>${perfume.price}</div>
                <div>{perfume.is_long_lasting}
                
                {perfume.is_long_lasting ? (
			  <h4><img className="long-term" src="https://t4.ftcdn.net/jpg/01/38/21/03/360_F_138210356_HhNe6CJQakx2B7UISl1PTpP4YIOCsHfz.jpg" alt=""/></h4>
			) : (
			  <h4><img className="short-term" src="https://thumbs.dreamstime.com/b/short-term-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-83571228.jpg" alt=""/></h4>
			)}
                </div>
                <h5>Have you tried this perfume? Leave a review below!</h5>
                <Reviews />
                <br></br>
                <button onClick={deletePerfume}>Delete this Perfume</button>

            </article>

        </section>

    )

};

export default PerfumeShow;
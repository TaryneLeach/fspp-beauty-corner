import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'


const API = process.env.REACT_APP_API_URL;

const PerfumeShow = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [perfume, setPerfume] = useState()

	useEffect(() => {
		axios
			.get(`${API}/perfumes/${id}`)
			.then((res) => {
				setPerfume(res.data);
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
            <article>
                <img src={perfume.image} alt={perfume.item_name} />
                <div>{perfume.brand}</div>
                <div>{perfume.scent_notes}</div>
                <div>{perfume.fragrance_description}</div>
                <div>{perfume.key_notes}</div>
                <div>{perfume.price}</div>
                <div>{perfume.is_long_lasting}
                
                {perfume.is_long_lasting ? (
			  <h4>Perfume is longlasting.</h4>
			) : (
			  <h4>Perfume is not longlasting.</h4>
			)}
                </div>
                <button onClick={deletePerfume}>Delete this Perfume</button>

            </article>

        </section>

    )

};

export default PerfumeShow;
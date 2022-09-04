import React from 'react'
import './MakeupandPerfume.css'
import { Link } from 'react-router-dom'

function PerfumeCards({ perfume }) {

    return (
    <section>
        <ul>
            <div className="product-div">
        <article>
        <li>
        <img className="perfume-list-img" src={perfume.image} alt=""
         /> 
         </li>
         <Link to={`/perfumes/${perfume.id}`}>
        <li>{perfume.item_name}</li>
        </Link>
        <li>{perfume.brand}</li>
        <li> {perfume.scent_type}</li>
        <li>${perfume.price}</li>

       </article>
       </div>
       </ul>
    </section>
    )
    }
    
    export default PerfumeCards;
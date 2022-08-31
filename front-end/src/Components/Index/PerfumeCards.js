import React from 'react'
import './MakeupandPerfume.css'
import { Link } from 'react-router-dom'

function PerfumeCards({ perfume }) {

    return (
    <section>
        <ul>
            <div>
        <article>
        <li>
        <img className="perfume-list-img" src={perfume.image} alt=""
         /> 
         </li>
     
        <li>{perfume.item_name}</li>
        <li>{perfume.brand}</li>
        <li> {perfume.scent_type}</li>
       <li>${perfume.price}</li>
       <Link to={`/perfumes/${perfume.id}`}>Additional Product Details</Link>
       </article>
       </div>
       </ul>
    </section>
    )
    }
    
    export default PerfumeCards;
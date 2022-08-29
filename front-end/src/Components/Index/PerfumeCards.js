import React from 'react'
import './MakeupandPerfume.css'

function PerfumeCards({ perfume }) {

    return (
    <section>
        <ul>
        <li>
        <img className="perfume-list-img" src={perfume.image} alt=""
         />
     
        <p>{perfume.item_name}</p>
        <p>{perfume.brand}</p>
        <p> {perfume.scent_type}</p>
       <p>${perfume.price}</p>
       
        </li>
       </ul>
    </section>
    )
    }
    
    export default PerfumeCards;
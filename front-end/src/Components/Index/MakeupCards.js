import React from 'react'
import './MakeupandPerfume.css'
import { Link } from 'react-router-dom'

function MakeupCards({ makeup }) {
    return (
<section> 
<ul>
<div>
<article>

    <img className="makeup-list-img"src={makeup.image} alt="" />
 
    <li>{makeup.item_name}</li>
    <li>{makeup.brand}</li>
    <li>{makeup.category}</li>
    <li>${makeup.price}</li>
   <Link to={`/makeups/${makeup.id}`}>Additional Product Details</Link>
    </article>
    </div>
    </ul>
   

    
</section>
    )
}

export default MakeupCards;
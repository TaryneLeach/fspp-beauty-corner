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
    <Link to={`/makeups/${makeup.id}`}>
    <li>{makeup.item_name}</li>
    </Link>
    <li>{makeup.brand}</li>
    <li>{makeup.category}</li>
    <li>${makeup.price}</li>
 
    </article>
    </div>
    </ul>
   

    
</section>
    )
}

export default MakeupCards;
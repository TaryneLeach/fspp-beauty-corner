import React from 'react'

function MakeupCards({ makeup }) {
    return (
<section>
<ul>
    <li>
    <img className="makeup-list-img"src={makeup.image} alt="" />
   
    <p>{makeup.item_name}</p>
    <p>{makeup.brand}</p>
    <p>{makeup.category}</p>
    <p>${makeup.price}</p>
    <p>{makeup.is_vegan}</p>
    </li>
    </ul>
   

    
</section>
    )
}

export default MakeupCards;
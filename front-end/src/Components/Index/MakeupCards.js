import React from 'react'
import './MakeupandPerfume.css'
import { Link } from 'react-router-dom'

function MakeupCards({ makeup }) {
    return (

<body>
<div className="main-div">


    <p className="img-div"><img className="makeup-list-img"src={makeup.image} alt="" /></p>
    <p className="link-div"><Link to={`/makeups/${makeup.id}`}>{makeup.item_name}</Link></p>
    <p className="brand-div">{makeup.brand}</p>
    <p className="category-div">{makeup.category}</p>
    <p className="price-div">${makeup.price}</p>
 
    
    </div>
    </body>
  
   

    

    )
}

export default MakeupCards;
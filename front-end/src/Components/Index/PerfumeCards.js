import React from 'react'
import './MakeupandPerfume.css'
import { Link } from 'react-router-dom'

function PerfumeCards({ perfume }) {

    return (
<body>
 <div className="main-div">
        <p><img className="perfume-list-img" src={perfume.image} alt="" /></p> 
         
        
        <p className="link-div"> <Link to={`/perfumes/${perfume.id}`}>{perfume.item_name} </Link></p>
      
        <p className="brand-div">{perfume.brand}</p>
        <p className="scent-div"> {perfume.scent_type}</p>
        <p className="price-div">${perfume.price}</p>
        </div>
        </body>
    )
    }
    
    export default PerfumeCards;
import React from 'react'
import './MakeupandPerfume.css'
import { Link } from 'react-router-dom'

function PerfumeCards({ perfume }) {

    return (
<body className="main-div">
        <div><img className="perfume-list-img" src={perfume.image} alt="" /></div> 
        <br></br>
        <div className="name">{perfume.item_name}</div>
        <br></br>
        <bf></bf>
   

        <Link to={`/perfumes/${perfume.id}`}><button className="card-button"> View Details </button></Link>
        </body>
    )
    }
    
    export default PerfumeCards;
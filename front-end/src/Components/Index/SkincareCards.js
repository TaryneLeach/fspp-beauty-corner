import React from 'react'
// import './MakeupandPerfume.css'
import { Link } from 'react-router-dom'

function SkincareCards({ skincare }) {
    return (


<div className="main-div">


  
    <br></br>
    <div className="name">{skincare.item_name}</div>
    <br></br>
    <br></br>
    <Link to={`/skincare/${skincare.id}`}><button className="card-button"> View Details</button></Link>
    
 
    
    </div>
 
  
   

    

    )
}

export default SkincareCards;
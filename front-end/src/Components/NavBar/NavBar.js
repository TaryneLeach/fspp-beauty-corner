import { Link } from 'react-router-dom'
import './NavBar.css';
import React from 'react'
const NavBar = () => {

    return (
        <nav className="nav">
        
        <h2>The Beauty Corner</h2>
      &nbsp;
        <Link className="links" to="/">Home</Link>
        &nbsp;
        <Link className="links"to="/makeups">Makeup</Link>
        &nbsp;
        <Link className="links"to='/perfumes'>Perfume</Link>
      &nbsp;
      <Link className="links" to="/userfavorites">Your Favorites</Link>
        </nav>
    )
}

export default NavBar;
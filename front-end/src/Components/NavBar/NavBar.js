import { Link } from 'react-router-dom'
import './NavBar.css';
import React from 'react'
const NavBar = () => {

    return (
        <nav className="nav">
        
     
        <a  className="a-tag"href="/"> <h2>The Beauty Corner</h2></a>
        &nbsp;
        <Link className="links"to="/makeups">Makeup</Link>
        &nbsp;
        <Link className="links"to='/perfumes'>Perfume</Link>
      &nbsp;
      <Link className="links"to="/skincare">Skincare</Link>
      {/* <Link className="links"to="/makeups/new">New Makeup</Link>
      &nbsp;
      <Link className="links"to="/perfumes/new">New Perfume</Link> */}
        </nav>
    )
}

export default NavBar;
import { Link } from 'react-router-dom'
import './NavBar.css';
const NavBar = () => {

    return (
        <nav>
        <Link className="nav-links" to="/">Home</Link>
        <Link className="nav-links"to="/makeups">Makeup</Link>
        <Link className="nav-links"to='/perfumes'>Perfume</Link>

        </nav>
    )
}

export default NavBar;
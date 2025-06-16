import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar(){
    //simple navbar component to be displayed on each page
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>My Work</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Me</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
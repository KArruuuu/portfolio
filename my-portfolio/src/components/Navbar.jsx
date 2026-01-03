import { Link } from "react-router-dom";
import "./css/Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">
                <Link to="/">Karl</Link>
            </h2>

            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

import "./css/Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">
                <a href="#home">Karl</a>
            </h2>

            <ul className="navbar-links">
                <li><a href="">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

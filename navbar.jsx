import { useState } from "react";
import "./styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">

            <div className="logo">
                Ruban<span>Raj</span>
            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                <li><a href="#home" onClick={closeMenu}>Home</a></li>

                <li><a href="#about" onClick={closeMenu}>About</a></li>

                <li><a href="#skills" onClick={closeMenu}>Skills</a></li>

                <li><a href="#experience" onClick={closeMenu}>Experience</a></li>

                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>

                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>

            </ul>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

        </nav>
    );
}

export default Navbar;
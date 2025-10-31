import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} fixed-top shadow`}>
      <div className="container px-4 px-lg-5 d-flex align-items-center justify-content-between">

        {/* Social Icons on the left */}
        <div className="d-flex gap-3">
          <a
            href="https://wa.me/260970067982"
            className={theme === 'dark' ? 'text-light' : 'text-dark'}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="https://github.com/reuben-nguni"
            className={theme === 'dark' ? 'text-light' : 'text-dark'}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://https://www.linkedin.com/in/reuben-ng-uni-88705a203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className={theme === 'dark' ? 'text-light' : 'text-dark'}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Theme Toggle and Hamburger */}
        <div className="d-flex align-items-center gap-3">
          <button
            className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
            onClick={toggleTheme}
            title="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Collapsible Page Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

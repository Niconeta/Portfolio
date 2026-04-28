import { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Nicolás Moya</h2>
        </div>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="menu-icon" />
        </button>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#footer" className="contact-header-btn" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
          <div className="social-links">
            <a
              href="https://github.com/Niconeta"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nicolásmoya7991"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
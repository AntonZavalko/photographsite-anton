import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/assets/logo.png" alt="Лого сайту" width="150" />
        </Link>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Перемикач меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Головна</Link></li>
            <li><Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Портфоліо</Link></li>
            <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Послуги</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Про мене</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Контакти</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
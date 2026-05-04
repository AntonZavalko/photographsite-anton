import { Link } from 'react-router-dom';
import SocialButtons from '../SocialButtons/SocialButtons';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Швидкі посилання</h3>
            <ul>
              <li><Link to="/">Головна</Link></li>
              <li><Link to="/portfolio">Портфоліо</Link></li>
              <li><Link to="/services">Послуги</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Контакти</h3>
            <p>email@example.com</p>
            <p>+380 98 345 6789</p>
          </div>
          
          <div className="footer-section">
            <h3>Соціальні мережі</h3>
            <SocialButtons />
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Фото Портфоліо. Всі права захищені.</p>
          <p>
            <Link to="/about" className="author-link">
              © Завалко Антон
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
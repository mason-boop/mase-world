import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const { pathname } = useLocation();

  return !['/'].includes(pathname) ? (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h3 className="navbar-logo">MASE</h3>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/designs" className="nav-links">
              Designs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/photos" className="nav-links">
              Photos
            </Link>
          </li>
          <div className="navbar-socials">
            <Link
              to="https://linkedin.com/in/masondominey"
              className="nav-social"
            >
              <i className="fa brands fa-linkedin fa-lg" />
            </Link>
            <Link to="https://github.com/mason-boop" className="nav-social">
              <i className="fa brands fa-github fa-lg" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  ) : null;
}

export default Navbar;

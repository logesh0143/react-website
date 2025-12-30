import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import "./Navbar.css";


function Navbar({ cartCount }) {
  return (
    <nav className="navbar">

      <div className="nav-logo">Lokesh Store</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-cart">
        <Link to="/cart">
          <button>🛒 Cart ({cartCount})</button>
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;


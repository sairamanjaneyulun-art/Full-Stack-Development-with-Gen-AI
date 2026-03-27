import { Link } from "react-router-dom";
import "./Components.css";

function Header() {
  return (
    <header>
      <div className="header-nav">
        {/* Logo */}
        <div className="header-logo">🚕 TaxiApp</div>

        {/* Navigation Menu */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/booking">Book Cab</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
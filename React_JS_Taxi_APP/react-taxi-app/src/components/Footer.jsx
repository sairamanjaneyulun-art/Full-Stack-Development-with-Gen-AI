import { Link } from "react-router-dom";
import "./Components.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Section */}
          <div className="footer-section">
            <h3>🚕 TaxiApp</h3>
            <p>Fast and reliable taxi booking service available 24/7. Professional drivers, transparent pricing, and safe rides.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/booking" className="footer-link">Book Cab</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📧 Email:<br />
            <a href="mailto:support@taxiapp.com" className="footer-link">support@taxiapp.com</a></p>
            <p>📞 Phone:<br />
            <a href="tel:+919876543210" className="footer-link">+91 9876543210</a></p>
            <p>📍 Location:<br />
            Bangalore, India</p>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <a href="#" className="footer-link">Facebook</a>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">Twitter</a>
            <a href="#" className="footer-link">LinkedIn</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 TaxiApp. All Rights Reserved.</p>
          <p><Link to="#" className="footer-link">Privacy Policy</Link> | <Link to="#" className="footer-link">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

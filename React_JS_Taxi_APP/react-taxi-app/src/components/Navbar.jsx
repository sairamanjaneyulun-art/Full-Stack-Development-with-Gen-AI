import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "#1e90ff",
    padding: "0",
    margin: "0",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: "0",
    zIndex: "100"
  };

  const navContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 30px"
  };

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "16px 20px",
    fontSize: "1em",
    fontWeight: "500",
    display: "inline-block",
    transition: "all 0.3s ease",
    borderBottom: "3px solid transparent"
  };

  return (
    <nav style={navStyle}>
      <div style={navContainerStyle}>
        <Link
          to="/"
          style={navLinkStyle}
          onMouseEnter={(e) => {
            e.target.style.borderBottom = "3px solid white";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderBottom = "3px solid transparent";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          Home
        </Link>
        <Link
          to="/services"
          style={navLinkStyle}
          onMouseEnter={(e) => {
            e.target.style.borderBottom = "3px solid white";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderBottom = "3px solid transparent";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          Services
        </Link>
        <Link
          to="/booking"
          style={navLinkStyle}
          onMouseEnter={(e) => {
            e.target.style.borderBottom = "3px solid white";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderBottom = "3px solid transparent";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          Book Taxi
        </Link>
        <Link
          to="/about"
          style={navLinkStyle}
          onMouseEnter={(e) => {
            e.target.style.borderBottom = "3px solid white";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderBottom = "3px solid transparent";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          About
        </Link>
        <Link
          to="/contact"
          style={navLinkStyle}
          onMouseEnter={(e) => {
            e.target.style.borderBottom = "3px solid white";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderBottom = "3px solid transparent";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          Contact
        </Link>
        <Link
          to="/login"
          style={{
            ...navLinkStyle,
            marginLeft: "auto",
            borderLeft: "1px solid rgba(255, 255, 255, 0.3)"
          }}
          onMouseEnter={(e) => {
            e.target.style.borderBottom = "3px solid white";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderBottom = "3px solid transparent";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
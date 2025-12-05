import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./MyNavbar.css";

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className="apple-navbar">
      <Container fluid className="apple-navbar-container">
        {/* MENU SINISTRA */}
        <button className="menu-btn" aria-label="menu">
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>

        {/* LOGO CENTRALE */}
        <Navbar.Brand as="div" className="navbar-brand-center">
          <span className="apple-logo"></span>
          <span className="brand-text">Music</span>
        </Navbar.Brand>

        {/* MENU DESTRA */}
        <span className="navbar-login">Accedi</span>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

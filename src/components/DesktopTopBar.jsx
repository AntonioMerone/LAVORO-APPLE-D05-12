import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function DesktopTopBar() {
  return (
    <header className="desktop-topbar">
      <Container fluid className="d-flex align-items-center gap-3 py-2">
        {/* FRECCE NAVIGAZIONE A SINISTRA */}
        <div className="d-flex align-items-center gap-2">
          <button className="topbar-icon-btn" aria-label="Indietro">
            <i className="bi bi-chevron-left" />
          </button>
          <button className="topbar-icon-btn" aria-label="Avanti">
            <i className="bi bi-chevron-right" />
          </button>
        </div>

        {/* SEARCH CENTRALE */}
        <div className="flex-grow-1 mx-2 mx-lg-3">
          <div className="topbar-search d-flex align-items-center">
            <i className="bi bi-search topbar-search-icon" />
            <Form.Control
              size="sm"
              type="search"
              placeholder="Cerca"
              className="topbar-search-input"
            />
          </div>
        </div>

        {/* VOLUME + ACCEDI A DESTRA */}
        <div className="d-flex align-items-center gap-3">
          <div className="d-none d-lg-block">
            <div className="volume-bar" />
          </div>
          <button className="topbar-login-btn">Accedi</button>
        </div>
      </Container>
    </header>
  );
}

export default DesktopTopBar;

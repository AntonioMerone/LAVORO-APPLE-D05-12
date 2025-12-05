// src/components/DesktopTopBar.jsx
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function DesktopTopBar() {
  return (
    <header className="desktop-topbar border-bottom border-secondary">
      <Container fluid className="d-flex align-items-center py-2">
        {/* controlli finti a sinistra */}
        <div className="d-flex align-items-center gap-2 me-4">
          <Button
            variant="outline-light"
            size="sm"
            className="rounded-circle px-2"
          >
            ⏮
          </Button>
          <Button
            variant="outline-light"
            size="sm"
            className="rounded-circle px-2"
          >
            ▶
          </Button>
          <Button
            variant="outline-light"
            size="sm"
            className="rounded-circle px-2"
          >
            ⏭
          </Button>
        </div>

        {/* search centrale */}
        <div className="flex-grow-1 me-4">
          <Form.Control
            size="sm"
            type="search"
            placeholder="Cerca"
            className="bg-dark text-light border-0"
          />
        </div>

        {/* slider volume finto */}
        <div className="me-4 d-none d-lg-block">
          <div className="volume-bar"></div>
        </div>

        {/* bottone accedi */}
        <Button variant="danger" size="sm">
          Accedi
        </Button>
      </Container>
    </header>
  );
}

export default DesktopTopBar;

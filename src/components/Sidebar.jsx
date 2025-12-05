import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

function Sidebar() {
  return (
    <aside className="bg-black text-light sidebar-desktop">
      <Container fluid className="py-3">
        {/* Logo */}
        <div className="mb-4 d-flex align-items-center gap-2">
          <i className="bi bi-apple fs-4 sidebar-apple-icon"></i>
          <span className="fw-semibold">Music</span>
        </div>

        {/* Search */}
        <Form className="mb-3">
          <Form.Control
            size="sm"
            type="search"
            placeholder="Cerca"
            className="sidebar-search"
          />
        </Form>

        {/* Menu */}
        <Nav className="flex-column">
          <Nav.Link className="sidebar-link active">Home</Nav.Link>
          <Nav.Link className="sidebar-link">Novità</Nav.Link>
          <Nav.Link className="sidebar-link">Radio</Nav.Link>
        </Nav>
      </Container>
    </aside>
  );
}

export default Sidebar;

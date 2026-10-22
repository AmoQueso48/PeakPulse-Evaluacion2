import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary border-bottom">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Viaje Seguro
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-principal" />

        <Navbar.Collapse id="menu-principal">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/cliente">Clientes</Nav.Link>
            <Nav.Link as={NavLink} to="/conductor">Conductores</Nav.Link>
            <Nav.Link as={NavLink} to="/admin">Administración</Nav.Link>
            <NavDropdown title="Atención al cliente" id="menu-atencion">
              <NavDropdown.Item href="#preguntas-frecuentes">Preguntas frecuentes</NavDropdown.Item>
              <NavDropdown.Item href="#contacto">Contacto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#reclamos">Reclamos</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0">
            <Button variant="outline-danger" onClick={() => navigate('/')}>
              Cerrar sesión
            </Button>

            {/* Buscador de ejemplo: por ahora no filtra nada */}
            <Form className="d-flex gap-2" role="search" onSubmit={(e) => e.preventDefault()}>
              <Form.Control type="search" placeholder="Buscar" aria-label="Buscar" />
              <Button variant="outline-success" type="submit">
                Buscar
              </Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
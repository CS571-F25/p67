import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TopBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="border-bottom shadow-sm">
      <Container>
        <Navbar.Brand href="#/">
          🏠
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/scheduler">
              <Nav.Link>Scheduler</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/news">
              <Nav.Link>Recent News</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact Me</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

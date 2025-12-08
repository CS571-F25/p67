import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TopBar.css';
import logo from '../assets/Logo_Antonyx_Consulting.png';

export default function TopBar() {
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="border-bottom shadow-sm">
      <Container>
        <Navbar.Brand href="#/">
          <Image 
            src={logo} 
            alt="Antonyx Consulting Logo" 
            height="30" 
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link active={location.pathname === "/"}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link active={location.pathname === "/about"}>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/assessment">
              <Nav.Link active={location.pathname === "/assessment"}>Assessment</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/news">
              <Nav.Link active={location.pathname === "/news"}>Recent News</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link active={location.pathname === "/contact"}>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

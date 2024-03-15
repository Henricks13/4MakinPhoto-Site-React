// Header.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; // Importe o componente Link
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold"> {/* Adicione o Link para a página inicial */}
          <img
            src="/logoSite.png"
            alt="Logo do Site"
            className="logo logo-mobile"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Jogos Recentes</Nav.Link> {/* Link para a página inicial */}
            <Nav.Link as={Link} to="/all-games">Todos os Jogos</Nav.Link> {/* Link para a página de todos os jogos */}
            <Nav.Link href="#link">Contato</Nav.Link> {/* Link para a página de contato */}
            <Nav.Link as={Link} to="/admin-login">Administrador</Nav.Link> {/* Link para a página de login do administrador */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

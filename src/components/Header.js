import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Importe o componente Link
import './Header.css';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <img
            src="/logoSite.png"
            alt="Logo do Site"
            className="logo logo-mobile"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
        <Navbar.Collapse id="basic-navbar-nav" className={expanded ? 'show' : ''}>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Jogos Recentes</Nav.Link>
            <Nav.Link as={Link} to="/all-games">Todos os Jogos</Nav.Link>
            <Nav.Link href="#link">Contato</Nav.Link>
            <Nav.Link as={Link} to="/admin-login">Administrador</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

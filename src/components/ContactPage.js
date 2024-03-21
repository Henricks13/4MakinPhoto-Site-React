import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className="contact-form-wrapper">
      <Container className="contact-form mt-4">
        <Row className="contact-form-row">
          <Col xs={12} className="mb-4">
            <div className="contact-info">
              <h2>Contato</h2>
              <p>Aqui você pode encontrar minhas informações de contato:</p>
              <ul>
                <li><FaInstagram /> <a href="https://www.instagram.com/henrick__s/">@henrick__s</a></li>
                <li><FaWhatsapp /> <a href="https://wa.me/5561995827357?text=Ol%C3%A1%2C+vim+pelo+site+das+Fotos.+Desejo+informa%C3%A7%C3%B5es%21">+61 99582-7357</a></li>
              </ul>
            </div>
          </Col>
          <Col xs={12} className="mb-4">
            <Form className="h-100">
              <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTelefone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="tel" placeholder="Digite seu telefone" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAssunto">
                <Form.Label>Assunto</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Digite o assunto da mensagem" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Col xs={12}>
                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;

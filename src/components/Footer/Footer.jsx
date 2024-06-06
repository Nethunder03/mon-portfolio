import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";


function Footer() {
  
  const numeroDeTelephone = "+221 77 860 5036"; 

  const appelerNumero = () => {
    window.location.href = `tel:${numeroDeTelephone}`;
  };
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={12} className="home-about-social">
          <h1>Suivez-moi sur !</h1>          
        </Col>
      </Row>
      
      <Row>
        <Col md={4} className="footer-body">
          <div className="home-sci">
            <a rel="noreferrer" href="https://wa.me/+221768028136/" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a rel="noreferrer" href="https://t.me/whisperback" target="_blank"><i class="fab fa-telegram"></i></a>
            <a rel="noreferrer" href="https://twitter.com/votre-profil" target="_blank"><i class="fab fa-twitter"></i></a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/rock-ferrand-malela-4260b4229" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a rel="noreferrer" href="https://github.com//Nethunder03" target="_blank"><i class="fab fa-github"></i></a>  
          </div>
        </Col>

        <Col md={4} className="contact-bouton">
          <div className="contact">
            <a href="mailto:votre@email.com" className="fas fa-envelope"></a>
            <a href="" onClick={appelerNumero} class="fas fa-phone-square-alt"></a>
          </div>
        </Col>
        <Col className="footer-copywright">
          <h3>&copy; 2024 Rock Ferrand MALELA.</h3>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Footer;

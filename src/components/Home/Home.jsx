import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import "./Home.css"
import Type from "./Type";

function Home() {

    const currentHour = new Date().getHours();
    let greeting;
  
    if (currentHour >= 0 && currentHour < 15) {
      greeting = 'Bonjour';
    } else {
      greeting = 'Bonsoir';
    }

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h2 style={{ paddingBottom: 15 }} className="heading">
                {greeting} !!!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h2>

              <h2 className="heading-name">
                J'suis
                <strong className="main-name"> Rock Ferrand MALELA</strong>
              </h2>

              <div style={{ padding: 20, textAlign: "left" }}>
                <Type />
              </div>

              <div className="home-social-icons">
                <a rel="noreferrer" href="https://wa.me/+221768028136/" target="_blank"><i class="fab fa-whatsapp"></i></a>
                <a rel="noreferrer" href="https://t.me/whisperback" target="_blank"><i class="fab fa-telegram"></i></a>
                <a rel="noreferrer" href="https://twitter.com/votre-profil" target="_blank"><i class="fab fa-twitter"></i></a>
                <a rel="noreferrer" href="https://www.linkedin.com/in/rock-ferrand-malela-4260b4229" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a rel="noreferrer" href="https://github.com//Nethunder03" target="_blank"><i class="fab fa-github"></i></a>  
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

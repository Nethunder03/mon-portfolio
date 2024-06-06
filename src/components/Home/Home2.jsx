import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ma_photo.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UN BREF <span className="purple"> Aperçu </span> DE MOI
            </h1>
            <p className="home-about-body">
            En tant que <span className="purple">Data Scientist </span> | <span className="red">Junior</span> et enthousiaste dans les domaines de l'IoT et de l'IA, 
            je trouve de la joie à explorer le vaste paysage de la science des données et de ses applications. 🤷‍♂️
              <br />
              <br />Je maîtrise les langages fondamentaux tels que :
              <i>
                <b className="purple"> Python, R, et SQL. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt s'étendent à &nbsp;
              <i>
                <b className="purple">... </b>
                ...{" "}
                <b className="purple">
                  ...
                </b>
              </i>
              <br />
              <br />
              Qu'il s'agisse de créer des algorithmes ou de développer des applications axées sur les données,
               j'aime donner vie à mes idées en utilisant des outils tels que 
               <b className="purple">TensorFlow et PyTorch</b> pour l'IA, et 
              <i>
                <b className="purple">
                  {" "}
                  Arduino   
                </b>
                {" "}pour les projets IoT.
              </i>
              &nbsp;
              <i>
                <b className="purple"> ... </b>
              </i>
            </p>

            <div className="text-center text-sm-start">
              <a className="btn-box " href="/about">Plus sur Moi</a><hr className="my-2"/>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>

        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
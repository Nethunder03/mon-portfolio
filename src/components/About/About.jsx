import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
//import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import SkillProgressBar from "./SkillProg";
import CompetenceChart from "./SkillData";
import { IoSchoolSharp,  } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";


import "./About.css" 

function About() {
  const openTab = (tabName, event) => {
    const tabLinks = document.getElementsByClassName('tab-links');
    const tabContents = document.getElementsByClassName('tab-contents');
  
    for (const tabLink of tabLinks) {
      tabLink.classList.remove('active-link');
    }
  
    for (const tabContent of tabContents) {
      tabContent.classList.remove('active-tab');
    }
  
    event.currentTarget.classList.add('active-link');
  
    const activeTabContent = document.getElementById(tabName);
    if (activeTabContent) {
      activeTabContent.classList.add('active-tab');
    }
  
    
  };
  
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Qui <strong className="purple">Je suis</strong> !!!
            </h1>
            <Aboutcard />

          </Col> 
          <Col md={5} style={{ textAlign: "justify" }} >

            <div className="tab-titles">
              <h1 className="tab-links active-link" onClick={(event) => openTab('skills', event)}>
                <strong>Comp.</strong>
              </h1>
              <h1 className="tab-links" onClick={(event) => openTab('experience', event)}>
                <strong>Expérience</strong>
              </h1>
              <h1 className="tab-links" onClick={(event) => openTab('education', event)}>
                <strong>Education</strong>
              </h1>
            </div>

            <div className="tab-contents active-tab" id="skills">
              <div className="skill-contents">
                  <SkillProgressBar skill="Linux + Windows Serveur" level={65} />
                  <SkillProgressBar skill="Html, Css, Js" level={75} />
                  <SkillProgressBar skill="SQL(SGBDR)" level={50} />
                  <SkillProgressBar skill="PowerBi" level={60} />
                  <SkillProgressBar skill="Office 360" level={80} />
                  <SkillProgressBar skill="Photoshop" level={40} />
                  
              </div>

              <div className="skill-contents" id="datascience">
                <h2 className="skill-links"><strong>Data Science</strong></h2>
                  <CompetenceChart />
                </div>

            </div>

          <div className="tab-contents" id="experience">
            <ul className="experience-contents" >
              <li>
                <span className="title" style={{ color: "#0ef", fontWeight: "Bold" }}>...</span>
              </li>

            </ul>
          </div>
          <div className="tab-contents" id="education">
            <div className="education-contents"><IoSchoolSharp /><strong>{" "}Cursus Scolaire</strong>
            <ul>
              <li className="education"><span className="custom-icon" style={{ color: "#0ef", fontWeight: "Bold" }}>2023 - 2024 :</span>
                <span className="title"> Master en Data Science et  Intelligence Artificelle.</span><br/>Institut Superieur d'Informatique (ISI)</li>
              <li className="education"><span className="custom-icon" style={{ color: "#0ef", fontWeight: "Bold" }}>2021 - 2023 :</span>
                <span className="title"> Licence en Réseaux informatique.</span><br/>Institut Superieur d'Informatique      (ISI)</li>
              </ul>
            </div>
            <div className="education-contents"><PiCertificateFill/><strong>{" "}Formations</strong>
              <ul>
                <li className="education" ><span className="custom-icon" style={{ color: "#0ef", fontWeight: "Bold" }}>2023 - 2024 :</span>
                  <span className="title"> Data Sciences from A to Z.</span><br/>   <a href="https://www.udemy.com/course/les-data-sciences-de-a-a-z/">(Udemy)</a></li>
                <li className="education"><span className="custom-icon" style={{ color: "#0ef", fontWeight: "Bold" }}>2022 :</span>
                  <span className="title"> Huawei Computer Networking</span><br/>Huawei Academie </li>
            
                <li className="education"><span className="custom-icon" style={{ color: "#0ef", fontWeight: "Bold" }}>2022 – 2023 :</span>
                  <span className="title"> Windows Serveur 2019.</span><br/>LinkedIn (Claude Couderc)</li>
              
                <li className="education"><span className="custom-icon" style={{ color: "#0ef", fontWeight: "Bold" }}>2020 – 2022 :</span>
                  <span className="title"> Parcours ICND1, ICND2, CCNA V3 CCNP.</span><br/>Alphorm (Redouane BAIK)</li>        
              </ul>
            </div>
              
          </div>
          </Col>

           <Col md={5}>
          
      
          </Col>
        </Row>
        <h1 className="project-heading">
           <strong className="purple">Ensemble de Compétences </strong> | Professionelles
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Outils</strong>
        </h1>
        <Toolstack />

       
      </Container>
    </Container>
  );
}

export default About;
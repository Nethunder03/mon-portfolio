import React, { useState, useEffect } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiFillStar,
} from "react-icons/ai";
import { FaCode } from 'react-icons/fa';
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import logo from "../../Assets/logo.png";
import "./Navbar.css";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      setNavColour(window.scrollY >= 20);
    }

    window.addEventListener("scroll", scrollHandler);

    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <NavItemLink to="/" icon={<AiOutlineHome />} label="Accueil" onClick={() => setExpand(false)} />
            <NavItemLink to="/about" icon={<AiOutlineUser />} label="À Propos" onClick={() => setExpand(false)} />
            <NavItemLink to="/project" icon={<AiOutlineFundProjectionScreen />} label="Projets" onClick={() => setExpand(false)} />
            <NavItemLink to="/footer" icon={<CgFileDocument />} label="Contact" onClick={() => setExpand(false)} />
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Nethunder03"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
        </Nav.Item>
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Composant réutilisable pour les éléments de navigation
function NavItemLink({ to, icon, label, onClick }) {
  return (
    <Nav.Item>
      <Nav.Link as={NavLink} to={to} onClick={onClick}>
        {icon} {label}
      </Nav.Link>
    </Nav.Item>
  );
}

export default NavBar;

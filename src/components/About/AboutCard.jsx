import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut, Je suis <span className="purple">Rock Ferrand MALELA </span>
            <br />
            <br />
            Je suis un jeune passionné de l'informatique qui explore les domaines fascinants des réseaux informatiques, 
            de la data science et de l'intelligence artificielle. Actuellement étudiant en master en Data Science et IA, 
            je suis immergé dans l'univers dynamique et en constante évolution de la technologie.<br/>
            <br />  
            Ma fascination pour l'intelligence artificielle a commencé pendant mes études en réseaux informatiques, 
            où j'ai découvert le pouvoir des algorithmes et des structures de données pour résoudre des problèmes complexes. 
            Mon parcours académique m'a conduit à explorer comment l'IA peut être appliquée pour extraire des informations 
            significatives à partir de données massives, ouvrant ainsi la porte à des opportunités incroyables dans le domaine de la science des données.
            Je suis constamment en quête de nouvelles connaissances, cherchant à comprendre les tendances émergentes et à appliquer ces concepts dans des projets concrets.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Analyste de données",
          "Modélisation statistique",
          "Apprentissage automatique",
          "Programmation Python",
          "Visualisation de données",
          "Gestion de bases de données SQL",
          "Analyse exploratoire des données (AED)",
          "Compréhension de base des technologies Big Data",
          "Création de tableaux de bord (Tableau, Power BI)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
import React from "react";
import "./Home.scss";

function Home(): JSX.Element {
  return (
    <>
      <h1 className="titulo">Home</h1>
      <img
        src="https://i.imgur.com/H88yIo2.png"
        alt="Imagem Tela Inicial"
        className="img"
      />
    </>
  );
}

export default Home;

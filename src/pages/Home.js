import React from "react";
import Header from "../components/homeComponents/Header";
import Noticias from "../components/homeComponents/Noticias";
import Perfil from "../components/homeComponents/Perfil";

import "../styles/home.css";

const Home = () => {
  return (
    <div className="ultra-div">
      <Header />
      <div className="items">
        <Perfil />
        <Noticias />

        <div className="grupos">grupos</div>

        <div className="chat"></div>

        <div className="conec">conectados</div>
      </div>
    </div>
  );
};

export default Home;

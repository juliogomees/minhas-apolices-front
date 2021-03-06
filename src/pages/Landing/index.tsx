import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.png";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import Modal from "../../components/Modal";

import "./style.css";
import api from "../../services/api";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div id="logo-container">
          <img src={logoImg} alt="Minhas apólices" className="logo-image" />
          <h2>Melhores soluções para administrar sua corretora.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de corretores"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Listar
          </Link>

          <Link to="/register" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" />
            Cadastrar
          </Link>

          <Link to="/login" className="login">
            Ja tenho uma conta
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="Coração roxo"></img>
        </span>
      </div>
    </div>
  );
}
export default Landing;

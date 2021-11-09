import React from "react";
import Typical from "react-typical";
import Contact from "../ContactMe/Contact";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              
              <a href="https://www.instagram.com/jeovagomes/" target="_blank">
                <i className="bi bi-instagram"></i>
              </a>
              
              <a href="https://github.com/jeovabah">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Olá, Sou <span className="highlighted-text">Jeová Jr</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Desenvolvedor Front End",
                    1000,
                    "Javascript, Java e React",
                    1000,
                    "Estudante de Ciência da Computação",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                 Estágio Profissional Desenvolvimento Web
              </span>
            </span>
          </div>

          <div className="profile-options">
            <a href="#contato" className="btn primary-btn">
              {" "}
              Contrate{" "}
            </a>
            <a
              href="curriculo_JeovaJr.pdf"
              download="Curriculo curriculo_JeovaJr.pdf"
            >
              <button className="btn highlighted-btn">Curriculo</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

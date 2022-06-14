import React from "react";
import { Link } from "react-router-dom";
import Timer from "../assets/Timer.png";
import "../styles/Laboratorios.css";

export const Laboratorios = () => {
  return (
    <div className="containerPP">
      <section className="sectionInterrupcion">
        <div className="imgInterruption">
          <img
            src={Timer}
            alt="imagen Interrupcion"
            className="labInterruption"
          ></img>
        </div>
        <div className="textInterruptionContainer">
          <h2>Interrupción</h2>
          <p className="descriptionParagraf">
            Este es un ejemplo de una interrupción que se ocasiona al querer
            ingresar un número impar y un nombre diferente a la palabra 'Par'.
          </p>
          <Link className="button" to="/Interrupcion">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            Ve al Ejemplo
          </Link>
        </div>
      </section>

      <section className="sectionInterrupcion">
        <div className="imgInterruption">
          <img
            src={Timer}
            alt="imagen Interrupcion"
            className="labInterruption"
          ></img>
        </div>
        <div className="textInterruptionContainer">
          <h2>Semáforos</h2>
          <p className="descriptionParagraf">
            En esta sección se publicará el laboratorio #3
          </p>
          <Link className="button" to="">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            Ve al Ejemplo
          </Link>
        </div>
      </section>
    </div>
  );
};

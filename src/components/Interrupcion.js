import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Interrupcion.css";
import So from "../assets/So.png";
import { Link } from "react-router-dom";

export const Interrupcion = () => {
  const [modalCorrecto, setModalCorrecto] = useState(false);
  const [modalIncorrecto, setModalIncorrecto] = useState(false);
  const [State, setState] = useState({
    numPar: 0,
    nombre: "",
  });
  const [Msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(setState);
  };

  const ValidarDatos = () => {
    const { numPar, nombre } = State;
    try {
      if (numPar % 2 === 0 && nombre === "Par") {
        abrirCerrarModalCorrecto();
      } else if (numPar % 2 !== 0) {
        throw "Número es impar";
      } else throw "Nombre incorrecto";
    } catch (error) {
      if (error === "Número es impar" || error === "Nombre incorrecto") {
        setMsg(error);
        abrirCerrarModalIncorrecto();
      }
    }
  };

  const abrirCerrarModalCorrecto = () => {
    setModalCorrecto(!modalCorrecto);
  };

  const abrirCerrarModalIncorrecto = () => {
    setModalIncorrecto(!modalIncorrecto);
  };

  return (
    <div className="interruptionContainerPP">
      <div className="infoContainer">
        <div className="containerImg">
          <img src={So} alt="interrupcion" className="imgInterruption"></img>
        </div>
      </div>
      <div className="formContainer">
        <form className="Formulario">
          <h2 className="tittle">Interrupciones</h2>
          <span>Ingresa un número par </span>
          <input
            type="number"
            name="numPar"
            onChange={handleChange}
            id="NumPar"
            placeholder="24"
            required
          ></input>
          <span>Ingresa el nombre 'Par' </span>
          <input
            type="text"
            name="nombre"
            onChange={handleChange}
            placeholder="Par"
            required
          ></input>
          <button className="button Validacion" onClick={() => ValidarDatos()}>
            Comprobar
          </button>
          <Link className="btnBack" to="/">
            Regresar al inicio
          </Link>
        </form>
      </div>

      <Modal isOpen={modalCorrecto}>
        <ModalHeader>¡CORRECTO!</ModalHeader>
        <ModalBody>
          <div className="Modal">
            <span>Has ingresado todos los datos correctamente</span>
            <br />
            <span>Ahora intenta equivocarte para generar una Interrupción</span>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-success"
            onClick={() => abrirCerrarModalCorrecto()}
          >
            Aceptar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalIncorrecto}>
        <ModalHeader>
          ¡Felicidades! Acabas de generar una interrupción{" "}
        </ModalHeader>
        <ModalBody>
          <div className="Modal">
            <p> Excepción Capturada es : {Msg}</p>
            <span> Aprendimos a generar una interrupción </span>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-danger"
            onClick={() => abrirCerrarModalIncorrecto()}
          >
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

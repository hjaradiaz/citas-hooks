import React, { useState, useRef, useEffect} from "react";
import Titulo from "../Titulo";

import { v4 as uuidv4 } from "uuid";

import {
  Button,
  Form,
  FormGroup,
  StyleInput,
  StyleArea,
  Alert,
} from "./style.js";

const initalState = {
  cita: {
    id: "",
    nombre: "",
    apellido: "",
    direccion: "",
    fecha: "",
    hora: "",
    sintomas: "",
  }
};

function Formulario(props) {

  const [cita, setCitaInfo] = useState({...initalState.cita});
  const [error, setError] = useState(false);
  //console.log(cita);
  const handleChange = (e) => {
    setCitaInfo({
       ...cita, [e.target.name]: e.target.value ,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    
    if (
      cita.nombre === "" ||
      cita.apellido === "" ||
      cita.direccion === "" ||
      cita.fecha === "" ||
      cita.hora === "" ||
      cita.sintomas === ""
    ) {
      setCitaInfo({ ...cita });
      setError(true);
      return;
    }

    const nuevaCita = {...cita};
    if (nuevaCita.id === "") { // asignar nuevo id, solo cen modo add
      nuevaCita.id = uuidv4();
    }

    console.log(nuevaCita);

    props.agregarCita(nuevaCita);

    setCitaInfo({ ...initalState.cita });
    setError(false);
  };


  const primeraCarga = useRef(true);
  useEffect(() => {
    if (primeraCarga.current) {
      primeraCarga.current = false;
      return;
    }
    
    setCitaInfo({
      ...props.infoCitaEditar.cita
    })
  }, [props.infoCitaEditar]);


  return (
    <div>
      <Titulo titulo={"Formulario de citas"} />
      <Form>
        <FormGroup col="2">
          <label htmlFor="nombre">Nombre</label>
          <StyleInput
            type="text"
            placeholder="Ingresar Nombre"
            name="nombre"
            onChange={handleChange}
            //defaultValue={this.props.infoCitaEditar.cita.nombre}
            value={cita.nombre}
          />
        </FormGroup>
        <FormGroup col="2">
          <label htmlFor="apellido">Apellido</label>
          <StyleInput
            type="text"
            placeholder="Ingresar Apellido"
            name="apellido"
            onChange={handleChange}
            //value={this.state.cita.apellido}
            value={cita.apellido}
          />
        </FormGroup>
        <FormGroup col="1">
          <label htmlFor="direccion">Dirección</label>
          <StyleInput
            type="text"
            placeholder="Ingresar Dirección"
            name="direccion"
            onChange={handleChange}
            value={cita.direccion}
          />
        </FormGroup>
        <FormGroup col="3">
          <label htmlFor="fecha">Fecha cita</label>
          <StyleInput
            type="date"
            name="fecha"
            onChange={handleChange}
            value={cita.fecha}
          />
        </FormGroup>
        <FormGroup col="3">
          <label htmlFor="hora">Hora cita</label>
          <StyleInput
            type="time"
            name="hora"
            onChange={handleChange}
            value={cita.hora}
          />
        </FormGroup>
        <FormGroup col="3">
          <label htmlFor="sintomas">Sintomas</label>
          <StyleArea
            placeholder="Ingresar sintomas"
            name="sintomas"
            onChange={handleChange}
            value={cita.sintomas}
          ></StyleArea>
        </FormGroup>

        {error && (
          <FormGroup col="1">
            <Alert>Todos los campos son requeridos</Alert>
          </FormGroup>
        )}

        <FormGroup>
          <Button onClick={handleClick}>{cita.id !== "" ? "actualizar cita" : "reservar cita"}</Button>

        </FormGroup>
      </Form>
    </div>
  );
}


export default Formulario;

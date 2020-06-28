import React, { useState } from "react";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  height: 100%;
}
*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
};
body{
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  color: #555;
  box-sizing: border-box; 
}
`;

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

function App() {

  const [citaInfo, setCitaInfo] = useState(initalState);
  const [listaCitas, setListaCitas] = useState([]);

  const agregarCita = (cita) => {
    const indice = listaCitas.findIndex((obj => obj.id == cita.id));

    if (indice > -1) { // actualizar cita
      let nuevaListaCitas = listaCitas;
      nuevaListaCitas[indice] = cita;
      setListaCitas([...nuevaListaCitas]);
    } else { // nueva cita
      setListaCitas([...listaCitas, cita]);
    }

    //limpiar cita de edicion
    setCitaInfo({ ...initalState });

  };

  const elimnarCita = (id) => {
    const nuevaListaCitas = listaCitas.filter(
      (cita) => cita.id !== id
    );

    setListaCitas([...nuevaListaCitas]);
  };

  const obtenerInfoCita = (id) => {
    const cita = listaCitas.filter((cita) => cita.id === id)[0];
    //console.log(this.state);
    setCitaInfo({
      cita: {
        ...cita
      }
    });
  }


  return (
    <div>
      <GlobalStyle />
      <Formulario agregarCita={agregarCita} infoCitaEditar={citaInfo} />
      <ListaCitas
        listaCitas={listaCitas}
        elimnarCita={elimnarCita}
        obtenerInfoCita={obtenerInfoCita}
      />
    </div>
  );

}

export default App;

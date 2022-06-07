// Importando react dom para poder usar os elementos dom
import ReactDOM from "react-dom";
// Importando react para poder usar JSX
import React from "react";
// Importando CSS
import "./index.css";
// Importando primeiro componente
import Primeiro from "./components/basic/Primeiro.jsx";
// Segundo component
import ComParametro from "./components/basic/ComParametro";

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    {/* passando propriedades */}
    <ComParametro titulo="Situação do aluno" aluno="Pedro" nota="9.0" />
  </div>,
  document.getElementById("root")
);

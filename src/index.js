// Importando react dom para poder usar os elementos dom
import ReactDOM from "react-dom";
// Importando react para poder usar JSX
import React from "react";
// Importando CSS
import "./index.css";
// Importando primeiro componente
import Primeiro from "./components/basic/Primeiro.js";

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
  </div>,
  document.getElementById("root")
);

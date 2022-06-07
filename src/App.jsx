import React from "react";
// Importando CSS
import "./index.css";
// Importando primeiro componente
import Primeiro from "./components/basic/Primeiro.jsx";
// Segundo component
import ComParametro from "./components/basic/ComParametro";
import Fragmento from "./components/basic/Fragmento";

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Fragmento />
    {/* passando propriedades */}
    <ComParametro titulo="Situação do aluno" aluno="Pedro" nota="4.5" />
    <Primeiro></Primeiro>
  </div>
);

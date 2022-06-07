// Importando react dom para poder usar os elementos dom
import ReactDOM from "react-dom";
// Importando react para poder usar JSX
import React from "react";
// Importando CSS
import "./index.css";


const tag = <strong>Ola react</strong>;

ReactDOM.render(<div>{tag}</div>, document.getElementById("root"));

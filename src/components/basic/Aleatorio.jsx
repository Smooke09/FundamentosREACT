import React from "react";

export default (props) => {
  // destructor
  const { min, max } = props;

  const numero = parseInt(Math.random() * (max - min)) + min;

  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor Minimo: {min}</strong>
      </p>
      <p>
        <strong>Valor Maximo: {max}</strong>
      </p>
      <p>
        <strong>Valor Valor escolhido: {numero}</strong>
      </p>
    </div>
  );
};

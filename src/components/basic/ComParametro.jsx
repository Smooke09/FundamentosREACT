import React from "react";

// props seria os parametros passado as propriedades no arquivo index
export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  // Passando parametros mas comun e utilizar props

  // Propriedades sao apenas leitura
  const notaInt = Math.ceil(props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.aluno}</strong> tem a nota <strong>{notaInt}</strong> e
        está <strong>{status}</strong>
      </p>
    </div>
  );
}

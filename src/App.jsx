import "./App.css";
import React from "react";
// Importando CSS
import "./index.css";
// Importando primeiro componente
import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ComParametro from "./components/basic/ComParametro";
import Fragmento from "./components/basic/Fragmento";
import Aleatorio from "./components/basic/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basic/Familia";
import FamiliaMembro from "./components/basic/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Primeiro from "./components/basic/Primeiro.jsx";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card title="#13- Megasena" color="#f26419">
        <Mega qtde={8}></Mega>
      </Card>

      <Card title="#12 - Contador" color="#f26419">
        <Contador numeroInicial={0}></Contador>
      </Card>

      <Card title="#11 - Componente controlado" color="#33658a">
        <Input></Input>
      </Card>

      <Card title="#10 - Comunicação Indireta" color="#FBCB0A">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card title="#09 - Comunicação direta" color="#371B58">
        <DiretaPai></DiretaPai>
      </Card>

      <Card title="#08 - Renderização condicional" color="#4C3575">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Pedro" }}></UsuarioInfo>
        <UsuarioInfo
          usuario={{ email: "Pedrolucas@hotmail.com  " }}
        ></UsuarioInfo>
      </Card>

      <Card title="#07 - Exercicio Repeticao" color="#4B5D67">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card title="#06 - Repetição" color="#4B5D67">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card title="#05 - Componentes Filhos" color="#3C2C3E">
        <Familia sobrenome="Venchiarutti">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Lucas" />
          <FamiliaMembro nome="Gabriela" />
        </Familia>
      </Card>
      <Card title="#04 - Desafio Aleatorio" color="#1F4690">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card title="#03 - Fragmento" color="#3A5BA0">
        <Fragmento />
      </Card>
      <Card title="#02 - Com Parametro" color="#FFA500">
        {/* passando propriedades */}
        <ComParametro titulo="Situação do aluno" aluno="Pedro" nota="4.5" />
      </Card>
      <Card title="#01 - Primeiro Componete" color="#4C3575">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);

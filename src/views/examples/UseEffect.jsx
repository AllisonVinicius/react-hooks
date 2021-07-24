import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [oque, setOque] = useState("impar");

  useEffect(
    //efeito colateral
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  ); //array de dependecia, tdas vez modificar  o estado e disparada o efeito

  useEffect(
    function () {
      if (fatorial > 1000000) {
        document.title = "Eita";
      }
    },
    [fatorial]
  );

  useEffect(
    function () {
      setOque(number % 2 === 0 ? "par" : "imapr");
    },
    [number]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="exercicio #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "nao existe" : fatorial}{" "}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <div>
          <span className="text">É par ou nao: </span>
          <span className="text red">{oque}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;

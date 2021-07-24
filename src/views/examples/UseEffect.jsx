import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";

function calcFatorial(n) {
  if (n < 0) return "Nao existe";
  if (n === 0) return 0;
  return calcFatorial((n - 1) * n);
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  useEffect(
    //efeito colateral
    function () {
      setFatorial(calcFatorial(number));
    },
    [number] //array de dependecia, tdas vez modificar  o estado e disparada o efeito
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial} </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;

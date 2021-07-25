import React, { useState, useRef } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [state, setstate] = useState("");
  const count = useRef(0);
  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="exercicio 01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{state}[</span>
          <span className="text red">Contatdors</span>
          <span className="text">]</span>
        </div>

        <input
          type="text"
          className="input"
          value={state}
          onChane={(e) => setstate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;

import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [state, setstate] = useState("");
  const [state1, setstate1] = useState("");
  const myInput1 = useRef(null);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [state, state1]);

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
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input
          type="text"
          className="input"
          ref={myInput1}
          value={state}
          onChange={(e) => setstate(e.target.value)}
        />
      </div>
      <SectionTitle title="exercicio 02" />
      <div className="center">
        <input
          type="text"
          className="input"
          value={state1}
          onChange={(e) => setstate1(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;

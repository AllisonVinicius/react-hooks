import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function (s1, s2) {
  return [...s1].map((e, i) => `${e}${s2[i] || ""} `).join("");
};

const UseRef = (props) => {
  const [state, setstate] = useState("");
  const [state1, setstate1] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(() => {
    count.current = count.current + 1;
    myInput2.current.focus();
  }, [state]);

  useEffect(() => {
    count.current = count.current + 1;
    myInput1.current.focus();
  }, [state1]);

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
          <span className="text">{merge(state, state1)}[</span>
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
          ref={myInput2}
          value={state1}
          onChange={(e) => setstate1(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;

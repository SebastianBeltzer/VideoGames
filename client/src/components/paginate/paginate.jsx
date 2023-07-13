import React, { useState } from "react";
import styles from "./paginate.module.css";

const Paginate = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      setPagina(parseInt(event.target.value));
      if (
        parseInt(event.target.value < 1) ||
        parseInt(event.target.value) > Math.ceil(maximo) ||
        isNaN(parseInt(event.target.value))
      ) {
        setPagina(1);
        setInput(1);
      } else {
        setPagina(parseInt(event.target.value));
      }
    }
  };

  const onChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.BotonPaginate}
        disabled={pagina === 1 || pagina < 1}
        onClick={previousPage}
      >
        Back
      </button>
      <input
        className={styles.inputPaginate}
        onChange={(event) => onChange(event)}
        onKeyDown={(event) => onKeyDown(event)}
        name="page"
        autoComplete="off"
        value={input}
      />

      <button
        className={styles.BotonPaginate}
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
        onClick={nextPage}
      >
        Next.
      </button>
    </div>
  );
};
export default Paginate;

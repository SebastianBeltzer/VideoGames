import { useState } from "react";
import style from "./mygames.module.css";

import FormPost from "./fromPost/fromPost";
import FormPut from "./fromPut/fromPut";
import FormDelete from "./fromDelete/fromDelete";

function Mygames() {
  const [div1Enabled, setDiv1Enabled] = useState(true);
  const [div2Enabled, setDiv2Enabled] = useState(false);
  const [div3Enabled, setDiv3Enabled] = useState(false);
  const [div4Enabled, setDiv4Enabled] = useState(false);

  const handleButton1Click = () => {
    setDiv1Enabled(false);
    setDiv2Enabled(false);
    setDiv3Enabled(true);
    setDiv4Enabled(false);
  };

  // const handleButton2Click = () => {
  //   setDiv1Enabled(false);
  //   setDiv2Enabled(true);
  //   setDiv3Enabled(false);
  //   setDiv4Enabled(false);
  // };

  // const handleButton3Click = () => {
  //     setDiv1Enabled(false);
  //     setDiv2Enabled(false);
  //     setDiv3Enabled(false);
  //     setDiv4Enabled(true);
  // };

  const handleResetClick = () => {
    setDiv1Enabled(true);
    setDiv2Enabled(false);
    setDiv3Enabled(false);
    setDiv4Enabled(false);
  };

  return (
    <div className={style.fondo}>
      <div>
        <div className={style.buttonsDiv}>
          <button className={style.shadow__btn} onClick={handleResetClick}>
            Crear Videogame
          </button>
          {/*<button onClick={handleButton2Click}>Editar videogame</button>*/}
          <button className={style.shadow__btn2} onClick={handleButton1Click}>
            Borrar Videogame
          </button>
        </div>

        <div style={{ display: div1Enabled ? "block" : "none" }}>
          <FormPost />
        </div>
        {/*<div style={{ display: div2Enabled ? "block" : "none" }}>
          <FormPut />
  </div>*/}
        <div style={{ display: div3Enabled ? "block" : "none" }}>
          <FormDelete />
        </div>
      </div>
    </div>
  );
}

export default Mygames;

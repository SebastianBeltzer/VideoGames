import React from "react";
import style from "./error.module.css";

function Error() {
  return (
    <div className={style.fondo}>
      <div>
        <div className={style.Box}>
          <div className={style.title}>
            <button className={style.bttn}>
              <span className={style.actualtext}>
                &nbsp;ErrorPage//:incorrect_address.&nbsp;
              </span>
              <span className={style.hovertext} aria-hidden="true">
                &nbsp;ErrorPage//:incorrect_address.&nbsp;
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;

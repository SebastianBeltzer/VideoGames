import React from "react";
import style from "./loading.module.css";

export default function Loading() {
  return (
    <div className={`${style.body} ${style.centered}`}>
      <div className={style.loader}>
        <div data-glitch="Loading..." className={style.glitch}>
          Loading...
        </div>
      </div>
    </div>
  );
}

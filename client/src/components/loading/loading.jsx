import React from "react";
import style from "./loading.module.css";

export function Loading() {
  return (
    <div className={style.loader}>
      <div data-glitch="Loading..." className={style.glitch}>
        Loading...
      </div>
    </div>
  );
}

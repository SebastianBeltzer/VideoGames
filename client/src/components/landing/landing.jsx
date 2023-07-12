import { Link } from "react-router-dom";
import style from "./landing.module.css";
const Landing = () => {
  return (
    <div className={style.fondo}>
      <div>
        <div className={style.Box}>
          <div className={style.title}>
            <button className={style.bttn}>
              <span className={style.actualtext}>
                &nbsp;Ingresa_a_CYBER/GAMES&nbsp;
              </span>
              <span className={style.hovertext} aria-hidden="true">
                &nbsp;Ingresa_a_CYBER/GAMES&nbsp;
              </span>
            </button>
          </div>
          <button className={style.button}>
            <Link to="/Home">Start the games</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

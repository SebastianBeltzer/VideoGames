import SearchBar from "../searchbar/searchbar";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "./nav.module.css";
const Nav = () => {
  const location = useLocation();

  return (
    <nav className={style.navbar}>
      <div>
        <div className={style.buttonHome}>
          <NavLink to="/Home">
            <button className={style.button}>
              <span className={style.actualtext}>&nbsp;cyber/games&nbsp;</span>
              <span className={style.hovertext} aria-hidden="true">
                &nbsp;cyber/games&nbsp;
              </span>
            </button>
          </NavLink>
        </div>
      </div>

      {location.pathname !== "*" && location.pathname !== "/Mygames" ? (
        <SearchBar />
      ) : null}
      <div className={style.container}>
        <NavLink to="/">
          <div className={style.radiowrapper}>
            <input
              className={style.input}
              name="btn"
              id="value-1"
              type="radio"
            />
            <div className={style.btn}>
              <span aria-hidden="">_</span>Landing
              <span className={style.btn__glitch} aria-hidden="">
                _Landing🦾
              </span>
              <label className={style.number}>r1</label>
            </div>
          </div>
        </NavLink>
        <NavLink to="/Error">
          <div className={style.radiowrapper}>
            <input
              className={style.input}
              name="btn"
              id="value-2"
              defaultChecked
              type="radio"
            />
            <div className={style.btn}>
              _Error<span aria-hidden="">_</span>
              <span className={style.btn__glitch} aria-hidden="">
                _E_r_r_o_r_
              </span>
              <label className={style.number}>r2</label>
            </div>
          </div>
        </NavLink>
        <NavLink to="/Mygames">
          <div className={style.radiowrapper}>
            <input
              className={style.input}
              name="btn"
              id="value-3"
              type="radio"
            />
            <div className={style.btn}>
              Mygames<span aria-hidden=""></span>
              <span className={style.btn__glitch} aria-hidden="">
                Mygames_
              </span>
              <label className={style.number}>r3</label>
            </div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;

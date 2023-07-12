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
/**
 <div className="container">
  <div className="radio-wrapper">
    <input className="input" name="btn" id="value-1" type="radio" />
    <div className="btn">
      <span aria-hidden="">_</span>Cyber
      <span className="btn__glitch" aria-hidden="">_Cyber🦾</span>
      <label className="number">r1</label>
    </div>
  </div>
  <div className="radio-wrapper">
    <input className="input" name="btn" id="value-2" checked={true} type="radio" />
    <div className="btn">
      _Radio<span aria-hidden="">_</span>
      <span className="btn__glitch" aria-hidden="">_R_a_d_i_o_</span>
      <label className="number">r2</label>
    </div>
  </div>
  <div className="radio-wrapper">
    <input className="input" name="btn" id="value-3" type="radio" />
    <div className="btn">
      Buttons<span aria-hidden=""></span>
      <span className="btn__glitch" aria-hidden="">Buttons_</span>
      <label className="number">r3</label>
    </div> 
  </div>
</div>

.container {
  display: flex;
  flex-direction: row;
}

.radio-wrapper {
  position: relative;
  height: 38px;
  width: 84px;
  margin: 3px;
}

.radio-wrapper .input {
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 10;
  opacity: 0;
}

.btn {
  --primary: #ff184c;
  --shadow-primary: #fded00;
  --color: white;
  --font-size: 9px;
  --shadow-primary-hue: 180;
  --shadow-secondary-hue: 60;
  --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
  --clip: polygon(11% 0, 95% 0, 100% 25%, 90% 90%, 95% 90%, 85% 90%, 85% 100%, 7% 100%, 0 80%);
  --border: 5px;
  --shimmy-distance: 5;
  --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
  --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
  --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
  --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
  --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
  color: var(--color);
  text-transform: uppercase;
  font-size: var(--font-size);
  letter-spacing: 3px;
  position: relative;
  font-weight: 900;
  width: 100%;
  height: 100%;
  line-height: 38px;
  text-align: center;
  transition: background 0.2s, 0.3s;
}

.input:checked + .btn {
  --primary: #8B00FF;
  --shadow-primary: #00e572;
}

.input:hover + .btn {
  --primary: #cc133c;
  --font-size: 11px;
}

.btn:after, .btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  clip-path: var(--clip);
  z-index: -1;
}

.btn:before {
  background: var(--shadow-primary);
  transform: translate(var(--border), 0);
}

.btn:after {
  background: var(--primary);
}

.btn__tag {
  position: absolute;
  padding: 1px 4px;
  letter-spacing: 1px;
  line-height: 1;
  bottom: -5%;
  right: 5%;
  font-weight: normal;
  color: hsl(0, 0%, 0%);
  font-size: var(--label-size);
}

.btn__glitch {
  position: absolute;
  top: calc(var(--border) * -1);
  left: calc(var(--border) * -1);
  right: calc(var(--border) * -1);
  bottom: calc(var(--border) * -1);
  background: var(--shadow-primary);
  text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
  clip-path: var(--clip);
  animation: glitch 2s infinite;
  display: none;
}

.input:hover + .btn .btn__glitch {
  display: block;
}

.input:checked + .btn .btn__glitch {
  display: block;
  animation: glitch 5s infinite;
}

.btn__glitch:before {
  content: '';
  position: absolute;
  top: calc(var(--border) * 1);
  right: calc(var(--border) * 1);
  bottom: calc(var(--border) * 1);
  left: calc(var(--border) * 1);
  clip-path: var(--clip);
  background: var(--primary);
  z-index: -1;
}

@keyframes glitch {
  0% {
    clip-path: var(--clip-one);
  }

  2%, 8% {
    clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }

  6% {
    clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }

  9% {
    clip-path: var(--clip-two);
    transform: translate(0, 0);
  }

  10% {
    clip-path: var(--clip-three);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }

  13% {
    clip-path: var(--clip-three);
    transform: translate(0, 0);
  }

  14%, 21% {
    clip-path: var(--clip-four);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }

  25% {
    clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }

  30% {
    clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }

  35%, 45% {
    clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * -1%));
  }

  40% {
    clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * 1%));
  }

  50% {
    clip-path: var(--clip-six);
    transform: translate(0, 0);
  }

  55% {
    clip-path: var(--clip-seven);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }

  60% {
    clip-path: var(--clip-seven);
    transform: translate(0, 0);
  }

  31%, 61%, 100% {
    clip-path: var(--clip-four);
  }
}

.number {
  background: var(--shadow-primary);
  color: #323232;
  font-size: 5.5px;
  font-weight: 700;
  letter-spacing: 1px;
  position: absolute;
  width: 15px;
  height: 6px;
  top: 0;
  left: 81%;
  line-height: 6.2px;
}

 */

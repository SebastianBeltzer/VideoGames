import SearchBar from "../searchbar/searchbar";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "./nav.module.css";
const Nav = () => {
  const location = useLocation();

  return (
    <nav className={style.navbar}>
      <div className={style.left_buttoms}>
        <NavLink to="/Home">
          <button>Inicio</button>
        </NavLink>
        <NavLink to="/Mygames">
          {" "}
          <button>My Games</button>
        </NavLink>
      </div>

      {location.pathname !== "*" && location.pathname !== "/Mygames" ? (
        <SearchBar />
      ) : null}
      <NavLink to="/">
        <button>Landing</button>
      </NavLink>
      <NavLink to="/Error">
        <button>Error</button>
      </NavLink>
    </nav>
  );
};

export default Nav;

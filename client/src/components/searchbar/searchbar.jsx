import { useState } from "react";

import { useDispatch } from "react-redux";
import { getVGName } from "../../redux/actions";
import style from "./search.module.css";
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = () => {
    dispatch(getVGName(search));
  };
  return (
    <div className={style.searchBox}>
      <div className={style.inputwrapper}>
        <input
          className={style.inputbox}
          placeholder="Search for your favorite video game by its name here."
          type="search"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          className={style.btn}
          type="Submit"
          onClick={() => {
            handleSubmit();
            setSearch("");
          }}
        >
          <span>Buscar</span>
        </button>
      </div>
    </div>
  );
}

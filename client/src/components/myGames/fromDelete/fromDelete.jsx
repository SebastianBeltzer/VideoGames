import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./fromdelete.module.css";
import { removeVG } from "../../../redux/actions";
const FormDelete = () => {
  const dispatch = useDispatch();
  const [deleteid, setDeleteid] = useState({
    id: "",
  });
  const HandleonChange = (event) => {
    setDeleteid({
      ...deleteid,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(removeVG(deleteid.id));
    alert("El Juego a sido Borrado!");
  };
  return (
    <div className={style.formContainer}>
      <form onSubmit={handleOnSubmit}>
        <label className={style.label} htmlFor="id">
          Id para eliminar el juego
        </label>
        <input
          className={style.inputss}
          type="text"
          name="id"
          id="id"
          placeholder="Id para Eliminar el juego"
          onChange={HandleonChange}
        />
        <button className={style.buttonEnv} disabled={!deleteid.id}>
          Borrar
        </button>
      </form>
    </div>
  );
};

export default FormDelete;

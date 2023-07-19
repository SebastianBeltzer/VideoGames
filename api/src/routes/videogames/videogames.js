// Importamos Express y los controladores necesarios
const express = require("express");
const getIdVideogame = require("../../controllers/getIdVideogames");
const getAllGames = require("../../controllers/getAll");

const router = express.Router();

// Ruta para obtener un videojuego por su ID
router.get("/:id", async (req, res) => {
  await getIdVideogame(req, res);
});

// Ruta para obtener todos los videojuegos o filtrar por nombre
router.get("/", async (req, res) => {
  const name = req.query.name; // Obtenemos el parámetro 'name' de la consulta
  const allVideogame = await getAllGames(); // Obtenemos todos los videojuegos

  // Eliminamos duplicados utilizando un conjunto (Set) y luego lo convertimos a un array
  const uniqueSet = new Set(allVideogame);
  const uniqueArray = Array.from(uniqueSet);

  if (name) {
    // Si se proporcionó el parámetro 'name', filtramos los videojuegos por nombre
    const filterName = uniqueArray.filter((elm) =>
      elm.name.toLowerCase().includes(name.toLowerCase())
    );

    // Si encontramos videojuegos coincidentes, los enviamos como respuesta con un código 200.
    // De lo contrario, enviamos un mensaje de error 404.
    filterName.length
      ? res.status(200).send(filterName)
      : res.status(404).send("No está el videogame");
  } else {
    // Si no se proporcionó el parámetro 'name', enviamos todos los videojuegos.
    res.status(200).send(uniqueArray);
  }
});

// Exportamos el enrutador
module.exports = router;

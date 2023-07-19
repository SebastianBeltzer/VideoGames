const express = require("express");
const router = express.Router();

const { Videogame, Genre } = require("../../db");
const deleteVideogame = require("../../controllers/deleteVideogame");
const putVideogame = require("../../controllers/putVideogame");
const getDataBase = require("../../controllers/getDataBase");
const postVideogames = require("../../controllers/postVideogame");

// Ruta para obtener todos los videojuegos
router.get("/", async (req, res) => {
  try {
    const cantidad = await Videogame.findAll({
      include: [{ model: Genre, through: "VideogameGenre" }],
    });

    if (cantidad.length === 0)
      return res.status(200).send("No se encuentra ningún videojuego subido");

    // Mapeamos los datos obtenidos de la base de datos y enviamos solo los campos necesarios para mostrar en la web de posteos
    const allPostDB = cantidad.map((element) => {
      return {
        name: element.name,
        id: element.id,
        description: element.description,
        genres: element.Genres.map((genre) => genre.name),
        platforms: element.plataformas,
        date: element.fecha,
        rating: element.rating,
        image: element.image,
      };
    });

    return res.status(200).json(allPostDB);
  } catch (error) {
    res.status(404).send("Not Found");
  }
});

// Ruta para agregar un nuevo videojuego
router.post("/", async (req, res) => {
  postVideogames(req, res); // Invocamos el controlador 'postVideogames' para manejar la lógica de agregar un nuevo videojuego.
});

// Ruta para eliminar un videojuego por su ID
router.delete("/:id", async (req, res) => {
  deleteVideogame(req, res); // Invocamos el controlador 'deleteVideogame' para manejar la lógica de eliminar un videojuego por su ID.
});

// Ruta para modificar un videojuego existente
router.put("/", async (req, res) => {
  const modifc = req.body;
  try {
    if (!modifc.id)
      throw Error("Se requiere el ID para modificar el Video Game");

    const modificador = await putVideogame(modifc); // Invocamos el controlador 'putVideogame' para manejar la lógica de modificar un videojuego.
    if (modificador.error) throw Error("Error en modificador");
    return res.status(200).send(modificador);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

module.exports = router;

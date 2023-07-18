const express = require("express");
const router = express.Router();

const { Videogame, Genre } = require("../../db");
const deleteVideogame = require("../../controllers/deleteVideogame");
const putVideogame = require("../../controllers/putVideogame");
const getDataBase = require("../../controllers/getDataBase");
const postVideogames = require("../../controllers/postVideogame");

router.get("/", async (req, res) => {
  try {
    const cantidad = await Videogame.findAll({
      include: [{ model: Genre, through: "VideogameGenre" }],
    });
    if (cantidad.length === 0)
      return res.status(200).send("no se encuentra ningun videogame subido");
    //
    const allPostDB = cantidad.map((element) => {
      // mapeo y  mando solo lo que quiero mostrar en la web de posteos
      return {
        name: element.name,
        apiId: element.id,
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
    res.status(404).send("not found");
  }
});

router.post("/", async (req, res) => {
  postVideogames(req, res);
});

router.delete("/:id", async (req, res) => {
  deleteVideogame(req, res);
});
router.put("/", async (req, res) => {
  const modifc = req.body;
  try {
    if (!modifc.id)
      throw Error(" se requiere el id para modificar el Video Game");

    const modificador = await putVideogame(modifc);
    if (modificador.error) throw Error("error en modificador");
    return res.status(200).send(modificador);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

module.exports = router;

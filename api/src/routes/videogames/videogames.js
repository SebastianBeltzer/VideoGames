const express = require("express");
const getOrCreateVideogameById = require("../../controllers/getOrCreateVideogameById");
const getAllGames = require("../../controllers/getAll");

const router = express.Router();

router.get("/:id", async (req, res) => {
  await getOrCreateVideogameById(req, res);
});

router.get("/", async (req, res) => {
  const name = req.query.name;
  const allVideogame = await getAllGames();
  const uniqueSet = new Set(allVideogame);
  const uniqueArray = Array.from(uniqueSet);
  if (name) {
    const filterName = uniqueArray.filter((elm) =>
      elm.name.toLowerCase().includes(name.toLowerCase())
    );
    filterName.length
      ? res.status(200).send(filterName)
      : res.status(404).send("No esta el videogame");
  } else {
    res.status(200).send(uniqueArray);
  }
});

module.exports = router;

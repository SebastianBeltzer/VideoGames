const express = require("express");
const { Genre } = require("../../db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const genres = await getGenres();

    res.status(200).json(genres);
  } catch (error) {
    res.status(404).send("not found");
  }
});
router.get("/db", async (req, res) => {
  try {
    const dbG = await Genre.findAll();
    res.status(200).json(dbG);
  } catch (error) {
    res.status(404).send("not found");
  }
});

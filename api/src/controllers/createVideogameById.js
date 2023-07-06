const axios = require("axios");
require("dotenv").config();
const KEY = process.env.API_KEY;
const { Videogame, Genre } = require("../db");

const createVideogameById = async (req, res) => {
  try {
    const { id } = req.params;
    const videogame = await Videogame.findOne({
      where: {
        apiId: id,
      },
    });
    if (!videogame) {
      const { data } = await axios(
        `https://api.rawg.io/api/games/${id}?key=${KEY}`
      );
      const newId = (await Videogame.count()) + 1;
      const newVideogame = await Videogame.create({
        apiId: newId,
        description: data.description_raw,
        platforms: data.platforms
          .map((plataform) => plataform.platform.name)
          .join(", "),
        date: data.released,
        rating: data.rating,
        image: data.background_image,
      });
      const genreName = await Genre.findAll({
        where: {
          name: data.genres.map((genre) => genre.name),
        },
      });
      await newVideogame.addGenres(genreName);
      const getNewVideogameId = await Videogame.findOne({
        where: {
          apiId: newId,
        },
      });

      if (!res.headersSent) {
        return res.status(200).json(getNewVideogameId);
      }
    }
    res.status(200).send(videogame);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = createVideogameById;

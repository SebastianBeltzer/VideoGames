const axios = require("axios");
require("dotenv").config();
const KEY = process.env.API_KEY;
const { Videogame, Genre } = require("../db");

const getOrCreateVideogameById = async (req, res) => {
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
          .map((platform) => platform.platform.name)
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
    } else {
      const videoGame = videogame;
      const idResults = {
        name: videoGame.name,
        id: videoGame.id,
        description: videoGame.description,
        genres: videoGame.Genres.map((genre) => genre.name).join(", "),
        platforms: videoGame.platforms
          .map((platform) => platform.platform.name)
          .join(", "),
        date: videoGame.date,
        rating: videoGame.rating,
        image: videoGame.image,
      };

      return res.status(200).json(idResults);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getOrCreateVideogameById;

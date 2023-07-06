const axios = require("axios");
const { Videogame, Genre } = require("../db");
require("dotenv").config();
const KEY = process.env.API_KEY;

const getIdVideogame = async (req, res) => {
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
      const videoGame = data;
      const idResults = {
        name: videoGame.name,
        apiId: videoGame.id,
        description: videoGame.description_raw,
        genres: videoGame.genres.map((genre) => genre.name).join(", "),
        platforms: videoGame.platforms
          .map((platform) => platform.platform.name)
          .join(", "),
        date: videoGame.released,
        rating: videoGame.rating,
        image: videoGame.background_image,
      };

      return res.status(200).json(idResults);
    }
    return res.status(200).json(videogame);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getIdVideogame;

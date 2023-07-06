const axios = require("axios");
require("dotenv").config();
const KEY = process.env.API_KEY;

const getVideogames = async () => {
  const promises = [];
  for (let i = 1; i <= 15; i++) {
    const url = `https://api.rawg.io/games?key=${KEY}&page=${i}`;
    promises.push(axios.get(url));
  }

  const responses = await Promise.all(promises);
  const info = responses
    .map((response) => response.data.results)
    .flat()
    .map((element) => {
      return {
        name: element.name,
        apiId: element.id,
        description: element.description,
        genres: element.genres.map((genre) => genre.name),
        platforms: element.platforms.map((platform) => platform.platform.name),
        date: element.released,
        rating: element.rating,
        image: element.background_image,
      };
    });
  return info;
};

module.exports = getVideogames;

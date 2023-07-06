const axios = require("axios");
const KEY = process.env.API_KEY;

const getGenres = async () => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/genres?key=${KEY}`
    );
    const map = data.results.map((element) => element.name);
    return map;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getGenres;

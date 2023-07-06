const getDataBase = require("./getDataBase");
const getVideogames = require("./getVideoGames");

const getAllGames = async () => {
  const infoApi = await getVideogames();
  const infoDataBase = await getDataBase();
  const infoAll = infoApi.concat(infoDataBase);
  return infoAll;
};
module.exports = getAllGames;

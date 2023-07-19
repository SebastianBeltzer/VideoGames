const getDataBase = require("./getDataBase");
const getVideogames = require("./getVideoGames");

const getAllGames = async () => {
  const infoApi = await getVideogames(); // Obtiene la información de los videojuegos desde la API externa
  const infoDataBase = await getDataBase(); // Obtiene la información de los videojuegos desde la base de datos local
  const infoAll = infoApi.concat(infoDataBase); // Combina la información de ambas fuentes (API y base de datos)
  return infoAll; // Devuelve la información completa de todos los videojuegos
};
module.exports = getAllGames;

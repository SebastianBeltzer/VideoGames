const axios = require("axios");
const { Videogame, Genre } = require("../db");
require("dotenv").config();
const KEY = process.env.API_KEY;

const isValidUUID = (id) => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
};
// Función asincrónica para obtener un videojuego por su ID
const getIdVideogame = async (req, res) => {
  try {
    const { id } = req.params; // Obtenemos el ID del videojuego de los parámetros de la solicitud

    if (!isValidUUID(id)) {
      // Hacemos una solicitud a la API externa para obtener el videojuego por su ID
      const { data } = await axios(
        `https://api.rawg.io/api/games/${id}?key=${KEY}`
      );

      // Extraemos los datos relevantes del videojuego desde la respuesta de la API
      const videoGame = data;
      const idResults = {
        name: videoGame.name,
        id: videoGame.id,
        description: videoGame.description_raw,
        genres: videoGame.genres.map((genre) => genre.name).join(", "),
        platforms: videoGame.platforms
          .map((platform) => platform.platform.name)
          .join(", "),
        date: videoGame.released,
        rating: videoGame.rating,
        image: videoGame.background_image,
      };

      // Enviamos los datos del videojuego obtenidos desde la API con un código 200.
      return res.status(200).json(idResults);
    }
    const videogame = await Videogame.findOne({
      where: {
        id: id,
      },
      include: Genre,
    });

    // Si el videojuego existe en la base de datos local, obtenemos los géneros en formato de cadena
    const genres = videogame.genres.map((genre) => genre.name).join(", ");

    // Creamos un objeto con los datos relevantes del videojuego para enviar como respuesta
    const idResults = {
      id: videogame.id,
      name: videogame.name,
      description: videogame.description,
      platforms: videogame.platforms,
      image: videogame.image,
      date: videogame.date,
      rating: videogame.rating,
      createInDb: videogame.createInDb,
      genres: genres, // Asignamos los nombres de los géneros en formato de cadena
    };

    // Enviamos los datos del videojuego desde la base de datos local con un código 200.
    return res.status(200).json(idResults);
  } catch (error) {
    // Si ocurre un error, enviamos un mensaje de error con un código 500.
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getIdVideogame;

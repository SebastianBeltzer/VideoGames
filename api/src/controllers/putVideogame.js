const { Videogame } = require("../db");

const updateVideogame = async (update) => {
  try {
    const updateVideogame = await Videogame.update(
      {
        name: update.name || Videogame.name,
        description: update.description || Videogame.description,
        platforms: update.platforms || Videogame.platforms,
        date: update.date || Videogame.date,
        rating: update.rating || Videogame.rating,
        image: update.image || Videogame.image,
      },
      {
        where: {
          id: update.id,
        },
      }
    );
    if (!updateVideogame) {
      return { message: "No se encontró el videojuego" };
    }
    return { message: "Videogame Actualizado" };
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = updateVideogame;

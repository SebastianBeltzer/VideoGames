require("dotenv").config();
const { Videogame, Genre } = require("../db");

const getDataBase = async () => {
  const reserver = await Videogame.findAll({
    include: [
      {
        model: Genre,
        through: "VideogameGenre",
      },
    ],
  });
  const allPost = reserver.map((elemente) => {
    return {
      name: elemente.name,
      id: elemente.id,
      description: elemente.description,
      genres: elemente.Genres.map((genre) => genre.name),
      plataformas: elemente.plataformas,
      fecha: elemente.fecha,
      rating: elemente.rating,
      image: elemente.image,
    };
  });
  return allPost;
};

module.exports = getDataBase;

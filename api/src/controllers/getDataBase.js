require("dotenv").config();
const { Videogame, Genre } = require("../db");

const getDataBase = async () => {
  const cantidad = await Videogame.findAll({
    include: [{ model: Genre, through: "VideogameGenre" }],
  });
  //
  const allPostDB = cantidad.map((el) => {
    // mapeo y mando solo lo que quiero mostrar en la web de posteos
    return {
      name: el.name,
      id: el.id,
      description: el.description,
      genres: el.genres?.map((genre) => genre.name),
      platforms: el.plataformas,
      date: el.date,
      rating: el.rating,
      image: el.image,
    };
  });
  return allPostDB;
};

module.exports = getDataBase;

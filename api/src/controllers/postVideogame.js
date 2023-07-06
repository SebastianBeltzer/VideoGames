const { Videogame, Genre } = require("../db");

const postVideogames = async (req, res) => {
  const { name, description, plataforms, date, rating, image, genres } =
    req.body;
  if (
    !name ||
    !description ||
    !plataforms ||
    !date ||
    !rating ||
    !image ||
    !genres
  ) {
    res.status(404).send({ error: "Faltan datos" });
  }
  const count = await Videogame.count();
  const nextId = count + 960529;
  const existsVg = (await Videogame.findAll()).filter(
    (exists) => exists.id === id
  );
  if (existsVg.length === 1) {
    return res.status(201).json({ message: `Videogame existente` });
  }

  try {
    const newGame = await Videogame.create({
      name,
      description,
      plataforms,
      date,
      rating,
      image,
      apiId: nextId,
    });
    const genreName = await Genre.create({
      name: genres,
    });

    await newGame.addGenres(genreName);
    return res.status(201).json({ message: `Videogame creado` });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

module.exports = postVideogames;

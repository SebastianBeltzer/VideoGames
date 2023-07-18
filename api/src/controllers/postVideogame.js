const { Videogame, Genre } = require("../db");

const postVideogames = async (req, res) => {
  const {
    name,
    description,
    platforms,
    date,
    rating,
    image,
    genres,
    createInDb,
  } = req.body;

  const count = await Videogame.count();
  const nextId = count + 960529;
  const existeVg = (await Videogame.findAll()).filter(
    (existe) => existe.id === id
  );
  if (existeVg.length === 1) {
    return res.status(201).json({ message: `Videogame Existente` });
  }

  try {
    const newVG = await Videogame.create({
      name: name,
      id: nextId,
      description: description,
      platforms: platforms,
      date: date,
      rating: rating,
      image: image,
      createInDb: createInDb,
    });
    const genrNam = await Genre.create({
      name: genres,
    });

    await newVG.addGenres(genrNam);

    return res.status(201).json({
      message: `Video game created successfully and the Id to edit or delete is ${nextId}`,
    });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

module.exports = postVideogames;

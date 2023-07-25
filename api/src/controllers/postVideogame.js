const { Videogame, Genre } = require("../db");
const { v4: uuidv4 } = require("uuid");
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

  const nextId = uuidv4();
  const existeVg = (await Videogame.findAll()).filter(
    (existe) => existe.name === name
  );
  if (existeVg.length === 1) {
    return res.status(401).json({ message: `Videogame Existente` });
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

    await newVG.addGenre(genrNam);

    return res.status(201).json(newVG);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

module.exports = postVideogames;

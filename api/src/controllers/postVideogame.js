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

  // Contamos la cantidad actual de videojuegos en la base de datos
  const count = await Videogame.count();

  // Calculamos el próximo ID sumando un valor arbitrario al número actual de videojuegos
  const nextId = count + 960529;

  // Verificamos si ya existe un videojuego con el próximo ID calculado
  const existeVg = (await Videogame.findAll()).filter(
    (existe) => existe.id === nextId
  );

  // Si el videojuego con el próximo ID ya existe, respondemos con un mensaje de error y un código 201 (Creado)
  if (existeVg.length === 1) {
    return res.status(201).json({ message: `Videogame Existente` });
  }

  try {
    // Creamos un nuevo videojuego en la base de datos utilizando el modelo 'Videogame' y los datos proporcionados
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

    // Creamos un nuevo género en la base de datos utilizando el modelo 'Genre' y el nombre de género proporcionado
    const genrNam = await Genre.create({
      name: genres,
    });

    // Asociamos el género recién creado con el nuevo videojuego utilizando el método 'addGenre'
    await newVG.addGenre(genrNam);

    // Respondemos con un mensaje de éxito y un código de estado 201 (Creado), incluyendo el ID del videojuego creado en el mensaje.
    return res.status(201).json({
      message: `Video game created successfully and the Id to edit or delete is ${nextId}`,
    });
  } catch (error) {
    // En caso de error durante la creación del videojuego, respondemos con un mensaje de error y un código de estado 404 (No encontrado).
    return res.status(404).send({ error: error.message });
  }
};

module.exports = postVideogames;

const { Router } = require("express");

const Videogame = require("./videogames/videogames");
const genres = require("./genres/genres");
const post = require("./posted/post");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", Videogame);

router.use("/genres", genres);

router.use("/posts", post);

module.exports = router;

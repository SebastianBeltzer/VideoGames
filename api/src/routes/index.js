// Importamos Express y creamos una instancia de un enrutador
const express = require("express");
const router = express.Router();

// Importamos los controladores para las rutas '/videogames', '/genres', y '/posts'
const Videogame = require("./videogames/videogames");
const genres = require("./genres/genres");
const post = require("./posted/post");

// Configuramos los routers para cada recurso
router.use("/videogames", Videogame);
router.use("/genres", genres);
router.use("/posts", post);

// Exportamos el enrutador configurado
module.exports = router;

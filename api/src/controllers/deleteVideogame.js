const { Videogame } = require("../db");

require("dotenv").config();

const deleteVideogame = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "No id provided",
      });
    }
    await Videogame.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      message: "Videogame deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Couldn't delete the game",
    });
  }
};

module.exports = deleteVideogame;

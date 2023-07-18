const validate = (post) => {
  let errors = {};
  if (post.name.length === "") {
    errors.name = "Se requiere que este lleno el campo";
  }

  if (post.name.length < 6) {
    errors.name = "Debe ser mayor a 6 digitos";
  }
  if (post.name.length > 10) {
    errors.name = "Debe ser menor a 10 digitos";
  }

  if (post.description.length === "") {
    errors.description = "Se requiere que este lleno el campo";
  }

  if (post.description.length < 6) {
    errors.description = "Debe ser mayor a 6 digitos";
  }
  if (post.description.length > 150) {
    errors.description = "Debe ser menor a 150 digitos";
  }

  if (post.genres.length === "") {
    errors.genres = "Se requiere que este lleno el campo";
  }

  if (post.platforms.length === "") {
    errors.platforms = "Se requiere que este lleno el campo";
  }

  if (post.platforms.length < 2) {
    errors.platforms = "Debe ser mayor a 2 digitos";
  }
  if (post.platforms.length > 10) {
    errors.platforms = "Debe ser menor a 10 digitos";
  }

  if (post.rating.length === "") {
    errors.rating = "Se requiere que este lleno el campo";
  }

  if (post.image.length === "") {
    errors.image = "Se requiere que este lleno el campo";
  }

  if (!/^https?:\/\//.test(post.image)) {
    errors.imagen = "You must add the URL of an image.";
  }

  return errors;
};
export default validate;

import { Link } from "react-router-dom";
import style from "./card.module.css";
function Card({ id, name, rating, genres, image }) {
  const renderStars = () => {
    const stars = [];
    const cantidad = parseInt(rating);

    for (let i = 1; i <= cantidad; i++) {
      if (i <= cantidad) {
        stars.push(<span key={i}>⭐</span>);
      } else {
        stars.push(<span key={i}>⭐</span>);
      }
    }
    return stars;
  };
  return (
    <div key={id} className={style.card}>
      <Link to={`/Home/${id}`}>
        <img className={style.card__img} src={image} />
      </Link>

      <div className={style.card__descrwrapper}>
        <p className={style.card__title}>{name}</p>
        <div className={style.card__descr}>
          <p>{genres}</p>

          <div className={style.Btn}>
            <div className={style.leftContainer}>
              <p className={style.like}>Rating: {rating}</p>
            </div>
            <p className={style.stars}>{renderStars()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;

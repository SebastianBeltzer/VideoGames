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
/*
<button class="Btn">
  <span class="leftContainer">
    <svg fill="white" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>
    <span class="like">Like</span>
  </span>
  <span class="likeCount">
    2,050
  </span>
</button>
 */

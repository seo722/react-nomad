import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Back({ id, coverImg, title, year, genres, url, rating }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="/">
          {title}({year})
        </Link>
      </h2>
      <ul>
        <li>
          <a href={url} target="_blank">
            more information
          </a>
        </li>
        <li>{rating}</li>
        <li>
          Genres
          <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
        </li>
      </ul>
    </div>
  );
}

Back.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Back;

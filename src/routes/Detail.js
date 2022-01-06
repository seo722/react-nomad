import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import Back from "../components/backhome";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <Back
            key={movies.id}
            id={movies.id}
            coverImg={movies.medium_cover_image}
            title={movies.title}
            year={movies.year}
            genres={movies.genres}
            url={movies.url}
            rating={movies.rating}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;

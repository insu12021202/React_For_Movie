import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import DetailForMovie from "../components/DetailForMovie";
import PropTypes from "prop-types";

function Detail() {
  const id = useParams().id;
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <DetailForMovie
          title={detail.title}
          img={detail.medium_cover_image}
          rating={detail.rating}
          description={detail.description_full}
          genres={detail.genres}
        />
      )}
    </div>
  );
}

DetailForMovie.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Detail;

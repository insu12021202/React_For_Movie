import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import DetailForMovie from "../components/DetailForMovie/";
import PropTypes from "prop-types";
import { Loader, Loader_text } from "../Home/style.js";
import { DetailContainer } from "../components/DetailForMovie/style.js";

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
    <DetailContainer>
      {loading ? (
        <Loader>
          <Loader_text>Loading...</Loader_text>
        </Loader>
      ) : (
        <DetailForMovie
          title={detail.title}
          img={detail.medium_cover_image}
          rating={detail.rating}
          description={detail.description_full}
          genres={detail.genres}
        />
      )}
    </DetailContainer>
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

import { Link } from "react-router-dom";
import {
  Genres,
  GenresLi,
  Item,
  MovieImg,
  Title,
  Year,
  Summary,
} from "./style";

function Movie({ id, coverImg, title, summary, genres, year }) {
  return (
    <Item>
      <MovieImg src={coverImg} alt={title} />
      <Title>
        <Link to={`/movie/${id}`}>{title}</Link>
      </Title>
      <Year>{year}</Year>
      <Summary>{summary.slice(0, 295)}...</Summary>
      <Genres>
        {genres.map((g) => (
          <GenresLi key={g}>{g}</GenresLi>
        ))}
      </Genres>
    </Item>
  );
}

export default Movie;

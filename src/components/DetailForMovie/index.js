import {
  Genres,
  GenresLi,
  Item,
  MovieImg,
  Summary,
  Title,
  Year,
} from "../../Home/style";

function DetailForMovie({ title, img, rating, description, genres }) {
  return (
    <Item>
      <MovieImg alt={title} src={img} />
      <Title>{title}</Title>
      <Year>Rating : {rating}/10</Year>
      <Summary>{description}</Summary>
      <Genres>
        <h4>Genres</h4>
        {genres.map((g) => (
          <GenresLi key={g}>{g}</GenresLi>
        ))}
      </Genres>
    </Item>
  );
}

export default DetailForMovie;
